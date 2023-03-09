import React from 'react';
import { motion } from 'framer-motion';
import { useStateContext } from '../context/StateContext'

const Card = ({product}) => {
    const {image,title,price,id} = product;
    const {dispatch,state:{cart}} =  useStateContext();
  return (
        <motion.div
        layout
        animate={{opacity : 1}} 
        initial={{opacity : 0}} 
        exit={{opacity : 1}} 
        transition={{duration:0.5}}
        className="card w-96 bg-base-300 shadow-2xl mx-auto mt-5">
        <img className=' h-[200px] w-[200px] mx-auto' src={image} alt="Shoes" />
        <div className="card-body">
            <h2 className="card-title">{title.substring(0,20)}...</h2>
            <p>£ {price}</p>
            <div className="card-actions justify-end">
              {cart?.find(item => item.id === id) ? (
                <button
                onClick={() => dispatch({type:'REMOVE_FROM_CART',payload:product})}
                className="btn bg-rose-800"
               >Remove to Cart</button>
                ) : (
                <button
                onClick={() => dispatch({type:'ADD_TO_CART',payload:{...product,qty:1}})}
                className="btn btn-secondary"
                >Add to Cart</button>
              )}
            </div>
        </div>
    </motion.div>
  )
}

export default Card
