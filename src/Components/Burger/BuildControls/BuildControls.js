import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls=[
{label:"Salad",type:"salad"},
{label:"Meat",type:"meat"},
{label:"Cheese",type:"cheese"},
{label:"Bacon",type:"bacon"}];
const buildControls =(props)=>{
  return(
    <div className="BuildControls">

      <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctr=>
      (
        <BuildControl
         key={ctr.label}
        label={ctr.label}
        added={()=>props.ingredientAdded(ctr.type)}
        removed={()=>props.ingredientRemove(ctr.type)}
        disabled={props.disabled[ctr.type]}
        />)
    )
  }
  <button className="OrderButton" disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
  );

}
export default buildControls;
