import React from 'react'
import { useContext, useEffect, useState } from 'react'
import CartIcon from '../Card/CardIcon'
import CartConetxt from '../store/cart-context'
import classes from '../Layout/HeaderCartButton.module.css'
function HeaderCartButton(props) {
   const [btnIsHighLighted,setBtnIsHighLighted]= useState(false)
   const cartCtx= useContext(CartConetxt)
   const {items}=cartCtx;
   const numberOfCartItems=items.reduce((curNumber,item)=>{
       return curNumber+item.amount
   },0);
   const btnClasses=`${classes.button} ${btnIsHighLighted ?classes.bump:''}`;
   useEffect(()=>{
       if(items.length===0){
           return;
       }
       setBtnIsHighLighted(true)
      const timer= setTimeout(()=>{
           setBtnIsHighLighted(false);
       }, 300)
       return()=>{
           clearTimeout(timer);
       }
   },[items])

    return <button onClick={props.onClick} className={btnClasses}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      
    </button>
}

export default HeaderCartButton
