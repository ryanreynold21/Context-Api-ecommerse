import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/StateContext'
import Item from '../components/Item'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {state:{cart},dispatch} = useStateContext();
  const [item,setItem] = useState(cart)
  const total = item?.reduce((pv,cv) => pv+cv.price*cv.qty ,0)
console.log(cart)
  useEffect(() => {
    setItem(cart)
  },[cart])

  const increment = (id) => {
    setItem(
      item?.map((it) => {
        if(it.id === id){
          it.qty += 1
        }
        return it
      })
    )
  }
    const decrement = (id) => {
    setItem(
      item?.map((it) => {
        if(it.id === id && it.qty > 1){
          it.qty -= 1
        }
        return it
      })
    )
  }
  return (
    <div>
       {!cart?.length && (
             <div className=" flex flex-col items-center justify-center p-10">
             <span className=' text-xl text-cyan-800'>Your Cart is empty !</span>
             <Link to={'/'}>
              <button className='my-2 btn btn-primary text-white px-4 py-2 rounded shadow-md'>Go to shop</button>
             </Link>
           </div>
        )}
      {cart?.map(item => <Item key={item.id} item={item} increment={increment} decrement={decrement}/> )}
      <div className=" mt-5 flex items-center flex-col">
        <h1 className=' text-xl'>Total - £ {total.toFixed(0,2)} </h1>
        <button 
        onClick={() => dispatch({type:'CLEAR_CART'})}
        className=' mt-4 btn bg-rose-600'
        >Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart
