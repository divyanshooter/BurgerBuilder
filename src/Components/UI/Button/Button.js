import React from 'react';
import classes from './Button.css';
const Button=(props)=>(
  <button className={["Button",props.btType].join(' ')}
  onClick={props.clicked}>{props.children} </button>
);


export default Button;
