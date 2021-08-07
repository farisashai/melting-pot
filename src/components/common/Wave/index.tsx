import React from 'react';
import './style.scss';

interface WaveProps {
  flip?: boolean,
}

const Wave: React.FC<WaveProps> = ({ flip }: WaveProps): JSX.Element => (
  <svg className={`wave ${flip ? 'flip' : ''}`} viewBox="0 0 500 150">
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(105)">
        <stop offset="5%" stopColor="#F96A8E" />
        <stop offset="75%" stopColor="#F3B380" />
        <stop offset="100%" stopColor="#FFF6EE" />
      </linearGradient>
    </defs>
    <path fill="url(#gradient)" d="M0.00,49.98 C213.60,200.81 272.29,-25.16 504.22,90.28 L500.00,0.00 L0.00,0.00 Z" />
  </svg>
);

Wave.defaultProps = {
  flip: false,
};
export default Wave;
