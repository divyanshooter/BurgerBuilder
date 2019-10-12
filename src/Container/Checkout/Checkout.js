import React,{ Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class Checkout extends Component
{
  
  checoutContinued=()=>
  {
    this.props.history.push('/checkout/contact-data');
  }
  checkoutCancelled=()=>
  {
    this.props.history.goBack();
  }
  render()
    {
     return (
     <div>
     <CheckoutSummary
     ingredient={this.props.ings}
     checkoutCancelled={this.checkoutCancelled}
     checoutContinue={this.checoutContinued}  />
     <Route path={this.props.match.path+'/contact-data/'} component={ContactData}/>
     </div>
   );
    }
}
const mapStateToProps=state=>{
   return {
     ings:state.ingredients
   }
}

export default connect(mapStateToProps)(Checkout);
