import React, {useContext} from 'react';
import {appSetStateContext} from '../AppState';
import { RobotProps} from './Robot';

/* React中以 with***开头的函数都是HOC，HOC是可以用自定义hook表达出来的. 比如下面的 withAddToCart 就能写成 -> useAddToCart */

export const withAddToCart = (ChildComponent : React.ComponentType<RobotProps>) => {

  return (props) => {

    /* below 10-24 are extacting the REPEAT LOGIC: */
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

    // return a new enhanced component here:
    return <ChildComponent {...props}  addToCart={addToCart}/>
  }

}
