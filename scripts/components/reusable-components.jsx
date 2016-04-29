import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({
	render: function() {
		return (
			<div className='header text-flex'>
				<AppStoreIcon />
				<Login />
			</div>
		);
	}
});

var Headline = React.createClass({
	render: function() {
		return (
			<h1 className='text-center text-grey'>{this.props.value}</h1>
		);
	}
});

var AppStoreIcon = React.createClass({
	render: function() {
		return (
			<Link to="">
				<img src="images/App-Store-Badge.png" alt="apple store icon"/>
			</Link>
		);
	}
});

var Login = React.createClass({
	render: function() {
		return (
			<h3 className='text-margin-left'>
				<Link to="/signin" className='text-grey'>Login</Link>
			</h3>
		);
	}
});

var Footer = React.createClass({
	render: function() {
		return (
			<div className='footer'>
				<p>Made with ♥ by <Link to='http://hacksmiths.io'>Team Hacksmiths</Link></p>
			</div>
		);
	}
});

module.exports = {
	Header: Header,
	Footer: Footer,
	Headline: Headline
}