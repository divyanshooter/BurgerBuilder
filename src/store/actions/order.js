import * as actionTypes from './actionTypes';
import Axios from '../../AxiosInstance';

export const purchaseBurgerSuccess=(id,order)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:order
    }
};

export const purchaseBurgerFail=error=>{
    return {
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}
export const purchaseBurgerStart=(orderData)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger=(orderData)=>{
    return dispatch=>{
        dispatch(purchaseBurgerStart());
        Axios.post('/order.json',orderData)
        .then(response=>{
            dispatch(purchaseBurgerSuccess(response.data.name,orderData));
          
        })
        .catch(error=>{
            dispatch(purchaseBurgerFail(error));
        });
    }
}

export const purchaseInit=()=>{
    return {
        type:actionTypes.PURCHASE_INIT
    };
}

export const fetchOrderSuccess=(orders)=>{
    return {
     type:actionTypes.FETCH_ORDER_SUCCESS,
     orders:orders
    };
}
export const fetchOrderfail=(error)=>{
    return {
       type:actionTypes.FETCH_ORDER_FAIL,
       error:error
    };
}

export const fetchOrderStart=()=>{
    return {
        type:actionTypes.FETCH_ORDER_START
    }
}

export const fetchOrders=()=>{
    return dispatch=>{
        dispatch(fetchOrderStart());
        Axios.get('/order.json')
          .then(res=>{
              const fetchedOrders=[];
              console.log(res.data);
              for (let key in res.data)
               {
                   fetchedOrders.push({
                       ...res.data[key],
                       id:key
                   });
               }
               dispatch(fetchOrderSuccess(fetchedOrders));
          })
          .catch(error=>{
              dispatch(fetchOrderfail(error));
          })
    }
}

