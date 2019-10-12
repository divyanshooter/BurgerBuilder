import React,{Component} from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux1';
import Burger from '../../Components/Burger/Burger';
import BuildControl from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';
import * as burgerBuilderActions from '../../store/actions/index';



class BurgerBuilder extends Component
{

  state={
        purchasing:false,
  }
  componentDidMount()
  {
     this.props.onInitIngredients();
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
    let burger= this.props.error ? <p>Ingredients Can't be loaded</p> :<Spinner/>
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
        totalPrice:state.totalPrice,
        error:state.error
      };
}
const mapDispatchToProps=dispatch=>{
   return {
     onIngredientAdded:(ingName)=>dispatch(burgerBuilderActions.addIngredient(ingName)),
     onIngredientRemoved:(ingName)=>dispatch(burgerBuilderActions.removeIngredient(ingName)),
     onInitIngredients:()=>dispatch(burgerBuilderActions.initIngredients())
   };

}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
