import React from 'react';
import Headline from '../components/Reusable/Headline.jsx';
import AppStoreIcon from '../components/Reusable/AppStoreIcon.jsx';
import WhiteTruckButton from '../components/Reusable/WhiteTruckButton.jsx';
import VolunteerThankYou from '../components/ThankYouPage/VolunteerThankYou.jsx';
import DonorThankYou from '../components/ThankYouPage/DonorThankYou.jsx';
import DonateButton from '../components/ThankYouPage/DonateButton.jsx';
import auth from '../utils/auth.js';

class ThankYouPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      role: parseInt(localStorage.getItem('role'), 10)
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    if (this.state.role !== 1) {
      this.context.router.push('/thankyou?userType=donor');
    } else if (this.state.role !== 0) {
      this.context.router.push('/thankyou?userType=volunteer');
    } else {
      this.context.router.push('/');
    }
  }
  handleClick() {
    if (this.state.role !== 1) {
      auth.login(localStorage.getItem('email'), localStorage.getItem('password'))
      .then((response) => {
        localStorage.setItem('token', response.data.authtoken.auth_token);
        return auth.getUser();
      })
      .then((response) => {
        localStorage.setItem('role', response.data.user.role_id);
        localStorage.setItem('name', response.data.user.name);
        if (auth.loggedIn()) {
          this.context.router.push('/donation');
          auth.onChange(true);
        }
      })
      .catch((err) => {
        this.context.router.push('/');
      });
    } else {
      this.context.router.push('/');
    }
  }
  render() {
    return (
      <section className="thank-you text-center text-white">
        <WhiteTruckButton />
        <Headline value="Thank You!" className="thank-you__title" />
        {this.state.role !== 0 ? <VolunteerThankYou /> : <DonorThankYou />}
        {this.state.role ? '' : <DonateButton onClick={this.handleClick} />}
        {this.state.role !== 1 ? '' : <AppStoreIcon />}
      </section>
    );
  }
}

ThankYouPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ThankYouPage;
