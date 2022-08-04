import React, { useContext } from 'react';
import styles from './Robot.module.css';
import { appContext } from '../AppState'
// import { withAddToCart } from './addToCartHOC';
import{ useAddToCart} from './useAddToCart';

interface RobotDisCountProps {
  id: number,
  name: string,
  email: string,
  // addToCart: (id,name)=>void
}

/*使用了HOC withAddToCart的版本----------：

  const RobotDiscount : React.FC <RobotDisCountProps> = ({id, name, email, addToCart}) => {
    const value = useContext(appContext);
    return (
      <div className={styles.cardContainer}>
        <img alt='robot' src={`https://robohash.org/${id}`} />
        <h2>打折商品</h2>
        <h2>{name}</h2>
        <p>{email}</p>
        <br/>
      
        <p>auth from context: {value.username}</p>
        <button onClick={() => addToCart(id, name)}>add to cart</button>
      </div>
    )
  }
  export default withAddToCart(RobotDiscount);

*/


/* 使用了custom Hook: useAddToCart的版本: */
const RobotDiscount : React.FC <RobotDisCountProps> = ({id, name, email}) => {
  const value = useContext(appContext);
  const addToCart = useAddToCart(); // use custome hook(useAddToCart) here!!!
  return (
    <div className={styles.cardContainer}>
      <img alt='robot' src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <br/>
      
      <p>auth from context: {value.username}</p>
      <button onClick={() => addToCart(id, name)}>add to cart</button>
    </div>
  )
}
export default RobotDiscount;