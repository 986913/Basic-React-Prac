import React from 'react';
import styles from './ShoppingCart.module.css'
import { FiShoppingCart } from  "react-icons/fi";
import { appContext } from '../AppState'
interface Props {

}
interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state={
      isOpen: false
    }
  }

  handleOnClick = (e) => {
    console.log(e.target); //事件发生的元素
    console.log(e.currentTarget); //事件绑定的元素

    if(e.target.nodeName === 'SPAN'){
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }

  render(){
    return (
      <appContext.Consumer>
        {
          (value) => {
            return (
              <div className={styles.cartContainer}>
              <button className={styles.button} onClick={this.handleOnClick}> 
                <FiShoppingCart/>
                <span>shopping cart {value.shoppingCart.items.length} items </span>
              </button>
              <div className={styles.cartDropDown} style={{
                display: this.state.isOpen ? 'block' : 'none'
              }}>
                <ul>
                  {value.shoppingCart.items.map(item=>{
                    return <li> {`robot name: ${item.name} --- ${item.id}` }</li>
                  })}
                </ul>
              </div>
            </div>
            )
          }
        }
      </appContext.Consumer>
      
    )
  }
}

export default ShoppingCart;