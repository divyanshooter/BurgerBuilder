import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const ToolBar=(props)=>(
  <header className="Toolbar">
  <DrawerToggle clicked={props.drawerToggle}/>

  <Logo height="100%"/>

  <nav className="DesktopOnly">
  <NavigationItems/>
  </nav>
  </header>
);
export default ToolBar;
