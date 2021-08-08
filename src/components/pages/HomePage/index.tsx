import React from 'react';
import Header from 'components/common/Header';
import './style.scss';
import Section from 'components/common/Section';
import Footer from 'components/common/Footer';
import CulturePanel from './CulturePanel';
import EventsPanel from './EventsPanel';
import FoodPanel from './FoodPanel';

const HomePage = () => (
  <>
    <Header />
    <div className="home-body">
      <Section Panel={CulturePanel} red="Los Angeles, California" title="Cultural Events in " link="Change location" redFirst={false} />
      <Section Panel={EventsPanel} red="Japanese, Spanish" title=" Cultural Events Happening Soon in Los Angeles" link="Select Date Range" redFirst />
      <Section Panel={FoodPanel} red="Japanese, Spanish" title=" Food near Los Angeles" link="" redFirst />
    </div>
    <Footer />
  </>
);

export default HomePage;
