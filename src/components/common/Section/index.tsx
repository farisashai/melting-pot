import { Button } from '@material-ui/core';
import { HOME_PATH } from 'constants/route-constants';
import React from 'react';
import './style.scss';

const Section = () => (
  <div className="section-container">
    <div className="section-header">
      <h3 className="section-title">
        Cultures near&nbsp;
        <span className="red">Los Angeles, California</span>
      </h3>
      <a className="section-link" href={HOME_PATH}>Change Location</a>
      <Button className="section-button" />
    </div>
    <hr />

  </div>
);

export default Section;
