import React from 'react';
import classes from './Order.module.css';
const order=(props)=>{
  return(
    <div className={classes.Order}>
    <p>Ingredient :Salad:({props.ingredients.salad}) Beacon:({props.ingredients.beacon}) </p>
    <p>Price<strong>Rs {props.price}</strong></p>
    </div>

  );
}

export default order;
