import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useStateContext } from '../context/StateContext'

const Home = () => {
    const {state:{products}} = useStateContext();
    return (
        <>
            <Navbar /> 
            <div className=" flex flex-wrap gap-10">
            {products?.map(product => <Card key={product.id} product={product} /> )}
            </div>
        </>
    )
}

export default Home
