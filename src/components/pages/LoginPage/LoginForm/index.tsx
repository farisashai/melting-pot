import Logo from 'components/common/Logo';
import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import './style.scss';

const CLIENT_ID = '245662031136-hvjuoeoh8e97nodofh60293macuncav4.apps.googleusercontent.com';

const index = () => (
  <div className="login-wrapper">
    <div className="login-form">

      <Logo setBlack />

      <h1 className="login-title">Melting Pot</h1>

      <input className="login-input" type="text" placeholder="Email" />
      <input className="login-input" type="password" placeholder="Password" />
      <button className="login-button" type="button">Sign In</button>
      <GoogleLogin
        clientId={CLIENT_ID}
        onSuccess={(responseGoogle: GoogleLoginResponse | GoogleLoginResponseOffline) => {
          if ('profileObj' in responseGoogle) {
            // const { name } = responseGoogle.profileObj;
          }
        }}
      >
        Sign In with Google
      </GoogleLogin>
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
