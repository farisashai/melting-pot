import React from 'react';
import Header from 'components/common/Header';
import './style.scss';
import Section from 'components/common/Section';
import CulturePanel from './CulturePanel';
import EventsPanel from './EventsPanel';
import FoodPanel from './FoodPanel';

const HomePage = () => (
  <>
    <Header />
    <div className="home-body">
      <Section Panel={CulturePanel} />
      <Section Panel={EventsPanel} />
      <Section Panel={FoodPanel} />
    </div>
  </>
);

export default HomePage;
