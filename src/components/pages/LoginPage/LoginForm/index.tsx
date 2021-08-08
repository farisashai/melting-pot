import Logo from 'components/common/Logo';
import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './style.scss';
import LoginHooks from '../LoginHooks';

const LoginForm = () => (
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

export default LoginForm;
