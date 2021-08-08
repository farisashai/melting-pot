import React from 'react';
import './style.scss';

interface CultureProps {
  Icon: React.ElementType,
  title: string,
}

const CultureCard = ({ Icon, title }: CultureProps) => (
  <div className="culture-card">
    <Icon />
    <h3>{title}</h3>
  </div>
);

export default CultureCard;
