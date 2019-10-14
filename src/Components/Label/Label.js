import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import Aux from '../../hoc/Aux1.js';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Label.css';
import BurgerBuilder from '../../Container/BurgerBuilder/BurgerBuilder';
import Checkout from '../../Container/Checkout/Checkout';
import Orders from '../../Container/Checkout/Orders/Orders';
import Auth from '../../Container/Auth/Auth';
class Label extends Component{
  state={
       showSideDrawer:true
  }
  closeSideDrawer=()=>{
    this.setState({showSideDrawer:false});
  }
  sideDrawerToggleHandler=()=>{
    this.setState((prevState)=>{
     return {showSideDrawer:!prevState.showSideDrawer};
   });
 }
   render()
   {
     return(
       <Aux>
         <Toolbar drawerToggle={this.sideDrawerToggleHandler}/>
         <SideDrawer open={this.state.showSideDrawer} closed={this.closeSideDrawer}/>
         <main className="Content">
           <Route path='/' exact component={BurgerBuilder}/>
           <Route path='/Checkout'component={Checkout}/>
           <Route path='/auth'component={Auth}/>
           <Route path='/orders' component={Orders}/>
         </main>
       </Aux>

     )

   }

}

export default Label;
