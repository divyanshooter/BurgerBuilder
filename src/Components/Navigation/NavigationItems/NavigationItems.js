import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems=()=>(
  <ul className="NavigationItems">
     <NavigationItem link="/" >Burger Builder</NavigationItem>
     <NavigationItem link="/orders">Orders</NavigationItem>
     <NavigationItem link="/auth">Login IN</NavigationItem>
  </ul>

);

export default navigationItems;
