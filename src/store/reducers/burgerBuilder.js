import * as actionTypes from '../actions/actionTypes';

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

        case actionTypes.SET_INGREDIENT:
             return {
                 ...state,
                   ingredients:action.ingredients,
                   error:false
             };
        case actionTypes.FETCH_INGREDIENT_FAILED:
             return {
                 ...state,
                  error:true
                 };

        default:
            return state;
    }

};

export default reducer;