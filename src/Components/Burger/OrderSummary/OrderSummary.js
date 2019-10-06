import React from 'react';
import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';
const orderSummary=(props)=>
{
  const ingredientSummary=Object.keys(props.ingredients)
        .map(igkey=>{
          return <li key={igkey}><span style={{textTransform:'capitalize'}} >{igkey}</span>:{props.ingredients[igkey]}</li>

        });

  return(
    <Aux>
      <h3>Order Summary</h3>
      <p>Here Is Your Delicious Burger</p>
      <ul>
      {ingredientSummary}
      </ul>
      <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
      <p>Click To Checkout</p>
      <Button btType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );

};
export default orderSummary;
