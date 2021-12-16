import {  useState} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from'./components/Card/Card'
import CartProvider from './components/store/CartProvider';
function App() {
  const [show, setShow]=useState(false)
  function showCartHandler(){
    setShow(true)
  }
  function hideCartHandler(){
   setShow(false) 
  }
  return (
   <CartProvider>
    
    {show&&<Cart onClose={hideCartHandler}/>} 
     <Header onShowCart={showCartHandler}/>
     <main>
       <Meals/>
     </main>
   </CartProvider>
   
  );
}

export default App;
