import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
	fullWidth: {
		width: '100%'
	},
	underlineYellow: {
		borderColor: '#F7B32B'
	},
	floatingLabelYellow: {
		color: '#F7B32B'
	},
	colorWhite: {
		color: 'white'
	}
};

const UserSignup = props => (
	<article className="signup-container text-center">
		<h2 className="uppercase text-white">{props.userType} Sign Up</h2>
		<form className="signup-form">
			<TextField
				hintText="Enter Name"
				errorText={props.errorName}
				floatingLabelText="Name"
				onChange={props.onNameChange}
				onKeyUp={props.onSubmitUser}
				style={styles.fullWidth}
				underlineFocusStyle={props.userType === 'Volunteer' ? styles.underlineYellow : ''}
				floatingLabelFocusStyle={props.userType === 'Volunteer' ? styles.floatingLabelYellow : ''}
				errorStyle={styles.colorWhite}
				value={props.name}
			/>
			<TextField
				hintText="Enter Email"
				errorText={props.errorEmail}
				floatingLabelText="Email"
				onChange={props.onEmailChange}
				onKeyUp={props.onSubmitUser}
				style={styles.fullWidth}
				underlineFocusStyle={props.userType === 'Volunteer' ? styles.underlineYellow : ''}
				floatingLabelFocusStyle={props.userType === 'Volunteer' ? styles.floatingLabelYellow : ''}
				errorStyle={styles.colorWhite}
				value={props.email}
			/>
			<TextField
				hintText="8 or more characters."
				errorText={props.errorPassword}
				floatingLabelText="Password"
				onChange={props.onPasswordChange}
				onKeyUp={props.onSubmitUser}
				style={styles.fullWidth}
				underlineFocusStyle={props.userType === 'Volunteer' ? styles.underlineYellow : ''}
				floatingLabelFocusStyle={props.userType === 'Volunteer' ? styles.floatingLabelYellow : ''}
				errorStyle={styles.colorWhite}
				value={props.password}
				type='password'
			/>
			<TextField
				hintText="8 or more characters."
				errorText={props.errorPasswordConfirmation}
				floatingLabelText="Password Confirmation"
				onChange={props.onPasswordConfirmChange}
				onKeyUp={props.onSubmitUser}
				style={styles.fullWidth}
				underlineFocusStyle={props.userType === 'Volunteer' ? styles.underlineYellow : ''}
				floatingLabelFocusStyle={props.userType === 'Volunteer' ? styles.floatingLabelYellow : ''}
				errorStyle={styles.colorWhite}
				value={props.passwordConfirmation}
				type='password'
			/>
			<RaisedButton
				label="Sign Up"
				labelColor='white'
				onClick={props.onSubmitUser}
				style={{marginTop: 100, minWidth: 250}}
				backgroundColor={props.userType === 'Volunteer' ? '#f7b32b' : '#14cfe8'}
			/>
			<h4 className="text-white">
				{props.error}
			</h4>
		</form>
	</article>
)

export default UserSignup;
