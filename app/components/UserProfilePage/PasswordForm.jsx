import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Styles = {
  formGroup: {
    width: '95%',
    maxWidth: 350
  },
  formCentered: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    margin: 'auto'
  },
  dialog: {
    textAlign: 'center',
    width: '100%'
  },
  formHeader: {
    textAlign: 'center',
    fontSize: 20
  },
  changePasswordGroup: {
    margin: 10,
    textAlign: 'center'
  }
};

const PasswordForm = (props) => (
<div
  style={Styles.changePasswordGroup}
  className={props.isEditing ? 'change-password-reveal' : 'hidden'}
>
  <FlatButton
    primary
    label="Change Password"
    onTouchTap={props.onChangePasswordClick}
  />
  <div className={props.passwordEdit ? 'edit-password-form' : 'hidden'}>
    <Dialog
      actions={props.actions}
      modal={false}
      open={props.isOpen}
      contentClassName="dialog-grey update-password__dialog"
      style={Styles.dialog}
      onRequestClose={props.onHandleClose}
    >
      <div className="update-password">
        <h4
          className="dialog-title text-center text-yellow"
          style={Styles.formHeader}
        >
        Update Password
        </h4>
        <div className="password-form-wrapper" style={Styles.formCentered}>
          <form
            className="password-form"
            style={Styles.form}
            onSubmit={props.onPasswordReset}
          >
            <div className="form-group">
              <TextField
                style={Styles.formGroup}
                id="currentPassword"
                name="currentPassword"
                floatingLabelText="Current Password"
                value={props.formData.CurrentPassword}
                onChange={props.onFormUpdate}
                type="password"
                hasErrors
              />
            </div>
            <div className="form-group">
              <TextField
                id="newPassword"
                style={Styles.formGroup}
                name="password"
                floatingLabelText="New Password"
                value={props.formData.NewPassword}
                errorText={props.errors.NewPassword}
                onChange={props.onFormUpdate}
                type="password"
              />
            </div>
            <div className="form-group">
              <TextField
                style={Styles.formGroup}
                id="newPasswordConfirmation"
                name="passwordConfirmation"
                floatingLabelText="Confirm New Password"
                value={props.formData.NewPasswordConfirmation}
                errorText={props.errors.NewPasswordConfirmation}
                onChange={props.onFormUpdate}
                type="password"
              />
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  </div>
</div>
);

export default PasswordForm;
