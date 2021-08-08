import React from 'react';
import './style.scss';

const FoodCard = () => (
  <div className="food-card">
    <div className="box">
      <img className="pic" src="https://source.unsplash.com/random" alt="" />
      <div className="text">
        <h4 className="title">Eggplant Sushi with fishy eggs</h4>
        <h4 className="price">$15.23</h4>
      </div>
    </div>
  </div>
);

export default FoodCard;
