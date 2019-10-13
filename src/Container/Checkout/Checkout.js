import React,{ Component } from 'react';
import { Route,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/index';
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
      let summary=<Redirect to="/"/>
      if(this.props.ings)
      {
        const purchasedRedirect= this.props.purchased ? <Redirect to='/'/> : null;
        summary=(<div>
                   {purchasedRedirect}
                   <CheckoutSummary
                     ingredient={this.props.ings}
                     checkoutCancelled={this.checkoutCancelled}
                     checoutContinue={this.checoutContinued}  />
                     <Route path={this.props.match.path+'/contact-data/'} component={ContactData}/>
                     </div>
                )
      }
     return summary;
    }
}
const mapStateToProps=state=>{
   return {
     ings:state.burgerBuilder.ingredients,
     purchased:state.order.purchased
   }
}
 


export default connect(mapStateToProps)(Checkout);
