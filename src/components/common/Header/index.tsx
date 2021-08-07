import React from 'react';
import Wave from 'components/common/Wave';
import './style.scss';
import { HOME_PATH } from 'constants/route-constants';
import Logo from 'components/common/Logo';
import { Avatar, InputAdornment, TextField } from '@material-ui/core';
import { icons } from 'constants/constants';
import { useSelector } from 'react-redux';
import * as userSelectors from 'redux/user/user-selectors';
import LogoutHooks from './LogoutHooks';

const Header = () => {
  const user = useSelector(userSelectors.user);

  return (
    <>
      <Wave />
      <div className="header">
        <div className="header-logo">
          <Logo setBlack={false} />
          <h1 className="header-title">Melting Pot</h1>
        </div>
        <nav className="nav-items">
          <a href={HOME_PATH}>Explore</a>
          <a href={HOME_PATH}>Blog</a>
          <a href={HOME_PATH}>Settings</a>
        </nav>
        <TextField
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <icons.SEARCH />
              </InputAdornment>
            ),
          }}
        />
        <div className="header-user">
          <Avatar src={user.profile.imageUrl} />
          <h3 className="header-name">
            {user.profile.name}
          </h3>
          <LogoutHooks />
        </div>
      </div>
    </>
  );
};

export default Header;
