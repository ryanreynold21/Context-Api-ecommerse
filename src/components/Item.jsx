import React, { useEffect, useState } from 'react';
import {BsDashCircle,BsPlusCircle} from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'

const Item = ({item,increment,decrement}) => {
    const {title,image,price,qty,id} = item;
    const {state:{cart},dispatch} = useStateContext()
    const itemPrice = price * qty
    const removeFromCart = () => {
       dispatch({type:'REMOVE_FROM_CART',payload:item}) 
    }
    return (
    <>
    <div className=' w-[60rem] mx-auto flex items-center justify-evenly border border-b-cyan-700 shadow-md shadow-lime-500/50 my-2 py-6'>
      <div className="">
        <img src={image} className='h-32 w-32' alt="" />
        <h1 className='w-56'>{title}</h1>
      </div>
    <div className="">
      <p className=' text-white font-bold text-xl'>£ {itemPrice.toFixed(2)}</p>
        <div className=" flex items-center gap-3 my-3">
          <button onClick={() => decrement(id)} className=' text-xl px-4 text-black bg-zinc-300 rounded-md py-1'> <BsDashCircle /> </button>
          <span>{qty}</span>
          <button onClick={() => increment(id)} className=' text-xl px-4 text-black bg-zinc-300 rounded-md py-1'> <BsPlusCircle /> </button>
        </div>
      <button onClick={ removeFromCart} className=' btn text-red-500 mt-10'>Remove</button>
    </div>
</div>
    </>
  )
}

export default Item
