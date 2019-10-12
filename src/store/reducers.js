import * as actionTypes from './actions';

const inititalState={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice:4,
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
          return  {
                ...state,
                   ingredients:{
                      ...state.ingredients,
                      [action.ingredientName]:state.ingredients[action.ingredientName]+1
                              },
                    totalPrice:state.totalPrice+INGREDIENTS_PRICE[action.ingredientName]
                    };
         case actionTypes.REMOVE_INGREDIENT:
         return  {
               ...state,
               ingredients:{
                   ...state.ingredients,
                   [action.ingredientName]:state.ingredients[action.ingredientName]-1
                    },
                totalPrice:state.totalPrice-INGREDIENTS_PRICE[action.ingredientName]
              };
    
        default:
            return state;
    }

};

export default reducer;