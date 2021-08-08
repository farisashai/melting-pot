import { Button } from '@material-ui/core';
import { HOME_PATH } from 'constants/route-constants';
import React from 'react';
import './style.scss';

interface SectionProps {
  Panel?: React.ElementType,
}

const Section = ({ Panel }: SectionProps) => (
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
    {Panel && <Panel />}
  </div>
);

Section.defaultProps = {
  Panel: null,
};

export default Section;
