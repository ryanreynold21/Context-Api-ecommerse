import React from 'react';
import {BsCartPlus} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const {search,setSearch,state:{cart}} = useStateContext();
  return (
   <div className="navbar bg-base-300 p-3">
  <div className="flex-1">
    <Link to={'/'}>
    <a className="btn btn-ghost normal-case text-xl">AKW-shop</a>
    </Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
        <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search"
        className="input input-bordered" 
        />
    </div>
    <Link to={'/cart'}>
      <div className=" p-2 rounded-md cursor-pointer btn-ghost text-lg flex gap-2 items-center">
          <BsCartPlus />
          <span className=''> - {cart.length}</span>
      </div>
    </Link>
  </div>
</div>
  )
}

export default Navbar
