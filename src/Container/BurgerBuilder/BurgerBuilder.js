import React,{Component} from 'react';
import Axios from '../../AxiosInstance';
import Aux from '../../hoc/Aux1';
import Burger from '../../Components/Burger/Burger';
import BuildControl from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';

const INGREDIENTS_PRICE={
  salad:0.9,
  meat:2,
  bacon:0.8,
  cheese:.5
}
class BurgerBuilder extends Component
{

  state={
        ingredients:null,
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        loading:false
  }
  componentDidMount()
  {
    Axios.get('https://burger-db8a8.firebaseio.com/ingredients.json').
    then(response=>{
      this.setState({ingredients:response.data});
    });
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
    this.setState({purchasable:sum>0});
  }
 addIngredient=(type)=>{
    const oldCount=this.state.ingredients[type];
    const updateCount=oldCount+1;
    const updateIngredients={...this.state.ingredients};
    updateIngredients[type]=updateCount;
    const ingredientPrice=INGREDIENTS_PRICE[type];
    const oldPrice=this.state.totalPrice;
    const newPrice=oldPrice+ingredientPrice;
    this.setState({ingredients:updateIngredients,totalPrice:newPrice});
    this.updatePurchaseState(updateIngredients);
}
removeIngredient=(type)=>{
  const oldCount=this.state.ingredients[type];

  const updateCount=oldCount-1;
  const updateIngredients={...this.state.ingredients};
  updateIngredients[type]=updateCount;
  const ingredientPrice=INGREDIENTS_PRICE[type];
  const oldPrice=this.state.totalPrice;
  const newPrice=oldPrice-ingredientPrice;
  this.setState({ingredients:updateIngredients,totalPrice:newPrice});
  this.updatePurchaseState(updateIngredients);

}
purchaseHandler=()=>{
   this.setState({purchasing:true});
}
purchaseCancelHandler=()=>{
  this.setState({purchasing:false});
}
purchaseContinueHandler=()=>{

  const queryParams=[];
  for(let i in this.state.ingredients)
  {
    queryParams.push(encodeURIComponent(i)+ '='+ encodeURIComponent(this.state.ingredients[i]));
  }
    queryParams.push('price='+this.state.totalPrice)
  const queryString=queryParams.join('&');

  this.props.history.push({
    pathname:'/checkout',
    search:'?'+queryString
  });
}
  render()
  {
    let disabledInfo={...this.state.ingredients};
    for(let j in disabledInfo)
    {
      disabledInfo[j]=disabledInfo[j]<=0;
    }
    let burger=<Spinner/>
    let orderSummary=null;
    if(this.state.ingredients)
    {
      burger=(  <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControl
        ingredientAdded={this.addIngredient}
        ingredientRemove={this.removeIngredient}
        disabled={disabledInfo}
        price={this.state.totalPrice}
        ordered={this.purchaseHandler}
        purchasable={this.state.purchasable}/>
        </Aux>
);
orderSummary=( <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.totalPrice}/>);

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
export default BurgerBuilder;
