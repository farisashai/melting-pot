import React from 'react';
import './style.scss';
import { cultures } from 'constants/constants';
import CultureCard from './CultureCard';

const CulturePanel = () => (
  <div className="culture-container">
    { cultures.map((item) => (
      <CultureCard Icon={item.icon} title={item.title} key={item.title} />
    ))}
  </div>
);

export default CulturePanel;
