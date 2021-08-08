import React from 'react';
import Header from 'components/common/Header';
import './style.scss';
import Section from 'components/common/Section';

const HomePage = () => (
  <div>
    <Header />
    <div className="home-body">
      <Section />
      <Section />
      <Section />
    </div>
  </div>
);

export default HomePage;
