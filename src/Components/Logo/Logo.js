import React from 'react';
import burgerLogo from '../../assets/images/133 burger-logo.png';
import classes from './Logo.css';
const logo=(props)=>
(
  <div className="Logo" style={{height:props.height}}>
  <img src={burgerLogo} alt="MyBurger"/>
  </div>
);

export default logo;
