import Wave from 'components/common/Wave';
import React from 'react';
import LoginForm from './LoginForm';
import './style.scss';

const LoginPage = () => (
  <div className="login-container">
    <Wave />
    <LoginForm />
  </div>
);

export default LoginPage;
