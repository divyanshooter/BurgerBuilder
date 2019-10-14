import React from 'react';
import classes from './Button.module.css';
const Button=(props)=>(
  <button 
    className={[classes.Button,classes[props.btType]].join(' ')}
    disabled={props.disabled}
    onClick={props.clicked}>{props.children} 
  </button>
);


export default Button;
