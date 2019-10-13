import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility/utility';

const inititalState={
    ingredients:null,
    totalPrice:4,
    error:false
}
const INGREDIENTS_PRICE={
    salad:0.9,
    meat:2,
    bacon:0.8,
    cheese:.5
  }

const reducer=(state=inititalState,action)=>{
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
          const updatedIngregient={[action.ingredientName]:state.ingredients[action.ingredientName]+1};
          const updatedIngregients=updateObject(state.ingredients,updatedIngregient);
          const updatedState={
              ingredients:updatedIngregients,
              totalPrice:state.totalPrice+INGREDIENTS_PRICE[action.ingredientName]

          }
          return updateObject(state,updatedState);

        case actionTypes.REMOVE_INGREDIENT:
           const updatedIng={[action.ingredientName]:state.ingredients[action.ingredientName]-1};
           const updatedIngs=updateObject(state.ingredients,updatedIng);
           const updatedSt={
             ingredients:updatedIngs,
             totalPrice:state.totalPrice-INGREDIENTS_PRICE[action.ingredientName]

           }
              return updateObject(state,updatedSt);

        case actionTypes.SET_INGREDIENT:
             return updateObject(state,{ingredients:action.ingredients,
              totalPrice:4,
              error:false});
        case actionTypes.FETCH_INGREDIENT_FAILED:
             return updateObject(state,{error:true})

        default:
            return state;
    }

};

export default reducer;