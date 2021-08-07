import React from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin } from 'react-google-login';
import { Button } from '@material-ui/core';
import { ReactComponent as Google } from 'assets/google.svg';
import { useDispatch } from 'react-redux';
import { userActions } from 'redux/user/user-slice';
import { useHistory } from 'react-router';
import { HOME_PATH } from 'constants/route-constants';

const CLIENT_ID = '245662031136-hvjuoeoh8e97nodofh60293macuncav4.apps.googleusercontent.com';

const LoginHooks = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSuccess = (responseGoogle: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('profileObj' in responseGoogle) {
      const profile = responseGoogle.profileObj;
      dispatch(userActions.updateUser({ profile }));
      history.push(HOME_PATH);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFailure = (res: any) => {
    // console.log('Login failed', res);
    dispatch(userActions.updateUser({ payload: null }));
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
