import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { Button } from '@material-ui/core';
import { ReactComponent as Google } from 'assets/google.svg';
import { useDispatch } from 'react-redux';
import { userActions } from 'redux/user/user-slice';
import { useHistory } from 'react-router';
import { LOGIN_PATH } from 'constants/route-constants';

const CLIENT_ID = '245662031136-hvjuoeoh8e97nodofh60293macuncav4.apps.googleusercontent.com';

const LogoutHooks = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogoutSuccess = () => {
    history.push(LOGIN_PATH);
  };

  const onFailure = () => {
    dispatch(userActions.updateUser({ }));
  };

  const { signOut } = useGoogleLogout({
    onLogoutSuccess,
    onFailure,
    clientId: CLIENT_ID,
  });

  return (
    <Button
      onClick={signOut}
      variant="contained"
      color="default"
    >
      <Google />
      &nbsp;&nbsp;Log out
    </Button>
  );
};

export default LogoutHooks;
