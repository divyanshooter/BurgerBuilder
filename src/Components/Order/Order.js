import React from 'react';
import classes from './Order.module.css';
const order=(props)=>{
  return(
    <div className={classes.Order}>
    <p>Ingredient :Salad(1)</p>
    <p>Price<strong>Rs 100</strong></p>
    </div>

  );
}

export default order;
