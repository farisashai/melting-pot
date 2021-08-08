import React from 'react';
import './style.scss';

interface FoodProps {
  src: string
  name: string,
  price: string,
}
const FoodCard = ({ src, name, price }: FoodProps) => (
  <div className="food-card">
    <div className="box">
      <img className="pic" src={src} alt="" />
      <div className="text">
        <h4 className="title">{name}</h4>
        <h4 className="price">{price}</h4>
      </div>
    </div>
  </div>
);

export default FoodCard;
