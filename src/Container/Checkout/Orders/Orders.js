import React ,{ Component } from 'react';
import {connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Order from '../../../Components/Order/Order';
import Spinner from '../../../Components/UI/Spinner/Spinner';
class Orders extends Component
{
  componentDidMount()
   {
     this.props.onFetchOrders();
   }
  render()
    {
      let orders=<Spinner/>
      if(!this.props.loading)
      {
        orders =this.props.orders.map(curr=>(
          <Order key={curr.id} ingredients={curr.ingredients} price={curr.price}/>))
      }
      return (
           <div>
               {orders}
            </div>
      );
    }
}

const mapStateToProps=state=>{
  return {
     orders:state.order.orders,
     loading:state.order.loading

  }
}
const mapDispatchToProps=dispatch=>{
  return {
     onFetchOrders:()=>dispatch(actions.fetchOrders())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders);
