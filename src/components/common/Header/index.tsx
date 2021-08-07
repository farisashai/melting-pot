import React from 'react';
import Wave from 'components/common/Wave';
import './style.scss';
import { HOME } from 'constants/route-constants';
import Logo from 'components/common/Logo';

const Header = () => (
  <>
    <Wave />
    <div className="header">
      <div className="header-logo">
        <Logo setBlack={false} />
        <h1 className="header-title">Melting Pot</h1>
      </div>
      <nav className="nav-items">
        <a href={HOME}>Explore</a>
        <a href={HOME}>Blog</a>
        <a href={HOME}>Settings</a>
      </nav>
    </div>
  </>
);

export default Header;
