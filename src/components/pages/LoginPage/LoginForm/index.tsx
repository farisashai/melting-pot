import Logo from 'components/common/Logo';
import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './style.scss';
import LoginHooks from '../LoginHooks';

const index = () => (
  <div className="login-wrapper">
    <div className="login-form">
      <Logo setBlack />
      <h1 className="login-title">Melting Pot</h1>
      <TextField label="Email" />
      <TextField type="password" label="Password" />
      <Button variant="contained" color="secondary">
        Sign In
      </Button>
      <LoginHooks />
    </div>
  </div>
);

export default index;

// eslint-disable-next-line no-lone-blocks
{ /*
<GoogleLogin
  className="google-login"
  clientId={process.env.REACT}
  buttonText="Login"
  onSuccess={onSuccessfulLogin}
  onFailure={onFailedLogin}
  cookiePolicy="single_host_origin"
  isSignedIn={false}
  render={(renderProps) => (
    <button
      onClick={renderProps.onClick}
      style={{
        backgroundColor: '#3d405b',
        color: 'white',
        borderRadius: '2px',
        padding: '10px',
        margin: '20px',
        cursor: 'pointer',
        border: '1px solid rgba(255, 255, 255, 1)',
        width: '100px',
      }}
    >
      Login
    </button>
  )} */ }
