import React from 'react';
import FoodCard from './FoodCard';
import './style.scss';

const FoodPanel = () => (
  <div className="food-container">
    <FoodCard src="https://source.unsplash.com/random" name="Fried Rice" price="$14.99" />
    <FoodCard src="https://source.unsplash.com/random" name="Ramen" price="$18.99" />
    <FoodCard src="https://source.unsplash.com/random" name="Burritos" price="$7.99" />
    <FoodCard src="https://source.unsplash.com/random" name="Chicken Katsu" price="$16.99" />
  </div>
);

export default FoodPanel;
