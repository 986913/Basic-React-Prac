import React, { useContext } from 'react';
import styles from './Robot.module.css';
import { appContext} from '../AppState';
import { withAddToCart } from './addToCartHOC';
// import { useAddToCart } from './useAddToCart';


export interface RobotProps {
  id: number,
  name: string,
  email: string,
  addToCart: (id, name) => void
}

const Robot : React.FC <RobotProps> = ({id, name, email, addToCart}) => {
  const value = useContext(appContext);
  return (
    <div className={styles.cardContainer}>
      <img alt='robot' src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <br/>

      <p>auth from context: {value.username}</p>
      <button onClick={() => addToCart(id, name)}>add to cart</button>
    </div>
  )
}
export default withAddToCart(Robot);


/*
  使用了custom Hook: useAddToCart的版本:-----


  const Robot : React.FC <RobotProps> = ({id, name, email}) => {
    const value = useContext(appContext);
    const addToCart = useAddToCart();
    return (
      <div className={styles.cardContainer}>
      <img alt='robot' src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <br/>

      <p>auth from context: {value.username}</p>
      <button onClick={() => addToCart(id, name)}>add to cart</button>
    </div>
    )
  }
  export default withAddToCart(Robot);

 */
