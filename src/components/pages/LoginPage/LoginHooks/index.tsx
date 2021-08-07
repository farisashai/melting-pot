import React from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin } from 'react-google-login';
import { Button } from '@material-ui/core';
import { ReactComponent as Google } from 'assets/google.svg';

const CLIENT_ID = '245662031136-hvjuoeoh8e97nodofh60293macuncav4.apps.googleusercontent.com';

const LoginHooks = () => {
  const onSuccess = (responseGoogle: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('profileObj' in responseGoogle) {
      console.log('login success, user: ', responseGoogle.profileObj);
      // const { name } = responseGoogle.profileObj;
    }
  };

  const onFailure = (res: any) => {
    console.log('Login failed', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: CLIENT_ID,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <Button
      onClick={signIn}
      variant="contained"
      color="default"
    >
      <Google />
      &nbsp;&nbsp;Sign in with Google
    </Button>
  );
};

export default LoginHooks;
