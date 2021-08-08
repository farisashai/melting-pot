import React from 'react';
import Header from 'components/common/Header';
import './style.scss';
import Section from 'components/common/Section';
import CulturePanel from './CulturePanel';

const HomePage = () => (
  <div>
    <Header />
    <div className="home-body">
      <Section Panel={CulturePanel} />
      <Section />
      <Section />
    </div>
  </div>
);

export default HomePage;
