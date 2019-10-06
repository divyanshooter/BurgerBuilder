import React,{ Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class Checkout extends Component
{
  state={ingredient:null,price:0}
  componentWillMount()
    {
      const query=new URLSearchParams(this.props.location.search);
      const ingredient={};
      for(let params of query.entries())
      {
        if(params[0]==='price')
           {
             this.setState({price:params[1]});
           }
          else {
            ingredient[params[0]]=+params[1];
          }

      }
      this.setState({ingredient:ingredient});
    }
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
     ingredient={this.state.ingredient}
     checkoutCancelled={this.checkoutCancelled}
     checoutContinue={this.checoutContinued}  />
     <Route path={this.props.match.path+'/contact-data/'} render={(props)=>(<ContactData ingredients={this.state.ingredient}
       price={this.state.price}
       {...props}/>)}/>
     </div>
   );
    }
}

export default Checkout;
