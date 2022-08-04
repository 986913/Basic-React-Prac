import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Robot from './components/Robot';
import RobotDiscount from './components/RobotDiscount';
import ShoppingCart from './components/ShoppingCart';
interface Props {

}
interface State{
  robots: any[],
  count: number
}

const App : React.FC =(props)=> {
  const [count, setCount]= useState<number>(0);
  const [robots, setRobots] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>();
  
  useEffect(()=>{
    console.log('xxx')
    document.title = `you clicked ${count} times`
  }, [count])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    setLoading(true);

    try{
      const response  = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setRobots(data);
    }catch(e){
      if(e instanceof Error){
        alert(e.message)
        setErr(e.message)
      }
    };
    setLoading(false)
  }

  const handleOnClick = () => {
    setCount(count+1);
    setCount(count+1); 
  }
    return (
      <div className={styles.app}>

        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt={'logo'} />   
          <h1>Robots List</h1>
        </div>

        <button onClick={handleOnClick}> Click</button>
        <span>{count}</span>
        <ShoppingCart/>
        {
          err && <div>网站出错: {err}</div>
        }
        {
          loading ? 'loading now...' : (
          <div className={styles.robotList}>   
            {robots.map((item, i) => i%2===0 ? 
              <RobotDiscount id={item.id} name={item.name} email={item.email}/> : 
              <Robot id={item.id} name={item.name} email={item.email}/> 
            )}
          </div> )
        }
    </div>
  )
}

export default App;
