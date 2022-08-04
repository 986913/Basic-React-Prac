import {useContext} from 'react';
import {appSetStateContext} from '../AppState';

export const useAddToCart = () => {
  const setState = useContext(appSetStateContext);
  const addToCart = (id, name) => {
    if(setState){ 
      setState(state=>{
        return {  
          ...state,
          shoppingCart:{
            items: [...state.shoppingCart.items, {
              id, name
            }]
          }
        }
      })
    }
  }

  return addToCart; //与withAddToCart HOC不同的是 useAddToCart返回的不再是组件，而是业务逻辑本身addToCart
}


