import { Button } from '@material-ui/core';
import { HOME_PATH } from 'constants/route-constants';
import React from 'react';
import './style.scss';

interface SectionProps {
  Panel?: React.ElementType,
  red: string,
  title: string,
  link: string,
  redFirst: boolean,
}

const Section = ({
  Panel, red, title, link, redFirst,
}: SectionProps) => (
  <div className="section-container">
    <div className="section-header">
      <h3 className="section-title">
        { !redFirst && title}
        <span className="red">{red}</span>
        {redFirst && title}
      </h3>
      <a className="section-link" href={HOME_PATH}>{link}</a>
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
