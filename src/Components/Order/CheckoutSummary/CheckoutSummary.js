import React from 'react';
import Burger from '../../Burger/Burger';
//import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';
const checkoutSummary=(props)=>{
  return(
      <div className={classes.CheckoutSummary}>
      <h1>Too Delicious And Tasty</h1>
      <div style={{width:"100%",margin:"auto"}}>
      <Burger ingredients={props.ingredient}/>
      </div>
      <button onClick={props.checkoutCancelled}>CANCEL</button>
      <button onClick ={props.checoutContinue}>CONTINUE</button>
      </div>
  );

}

export default checkoutSummary;
