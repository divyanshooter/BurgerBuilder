import React,{Component} from 'react';
import Axios from '../../AxiosInstance';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import Aux from '../../hoc/Aux1';
import Burger from '../../Components/Burger/Burger';
import BuildControl from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';


class BurgerBuilder extends Component
{

  state={
        purchasing:false,
        loading:false
  }
  componentDidMount()
  {
    // Axios.get('https://burger-db8a8.firebaseio.com/ingredients.json').
    // then(response=>{
    //   this.setState({ingredients:response.data});
    // });
  }

 updatePurchaseState (ingredients)
   {
    const sum=Object.keys(ingredients).
    map(igkey=>{
      return ingredients[igkey];
    }
    )
    .reduce((sum,el)=>{
      return sum+el;
    },0);
    return sum>0;
  }

purchaseHandler=()=>{
   this.setState({purchasing:true});
}
purchaseCancelHandler=()=>{
  this.setState({purchasing:false});
}
purchaseContinueHandler=()=>{
  this.props.history.push('./checkout');
}
  render()
  {
    let disabledInfo={...this.props.ings};
    for(let j in disabledInfo)
    {
      disabledInfo[j]=disabledInfo[j]<=0;
    }
    let burger=<Spinner/>
    let orderSummary=null;
    if(this.props.ings)
    {
      burger=(  <Aux>
        <Burger ingredients={this.props.ings}/>
        <BuildControl
        ingredientAdded={this.props.onIngredientAdded}
        ingredientRemove={this.props.onIngredientRemoved}
        disabled={disabledInfo}
        price={this.props.totalPrice}
        ordered={this.purchaseHandler}
        purchasable={this.updatePurchaseState(this.props.ings)}/>
        </Aux>
);
orderSummary=( <OrderSummary
        ingredients={this.props.ings}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.props.totalPrice}/>);

}

       if(this.state.loading)
       {
         orderSummary=<Spinner/>
       }

       return(
         <Aux>
         <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
              {orderSummary}
         </Modal>
            {burger}
           </Aux>
       )
     }
}

const mapStateToProps=state=>{
      return {
        ings:state.ingredients,
        totalPrice:state.totalPrice
      };
}
const mapDispatchToProps=dispatch=>{
   return {
     onIngredientAdded:(ingName)=>dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingName}),
     onIngredientRemoved:(ingName)=>dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingName})
   };

}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
