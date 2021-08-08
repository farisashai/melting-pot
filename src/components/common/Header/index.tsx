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
        <Logo setBlack={false} />
        <h1 className="header-title">Melting Pot</h1>
        <a href={HOME_PATH}>Explore</a>
        <a href={HOME_PATH}>Blog</a>
        <a href={HOME_PATH}>Settings</a>
        {/* <div className="header-logo">
        </div> */}
        {/* <nav className="nav-items">
        </nav> */}
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
        <Avatar src={user.profile.imageUrl} />
        <h3 className="header-name">
          {user.profile.name}
        </h3>
        <LogoutHooks />
        {/* <div className="header-user">

        </div> */}
      </div>
    </>
  );
};

export default Header;
