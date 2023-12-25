import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
      <span className='logo'>REDUX TOLKIT</span>
      <div>
        <Link className='navlink' to='/' >Home</Link>
        <Link className='navlink' to='/cart' >Cart</Link>
        <span className='cartCount'>
            Cart Items: 0
        </span>
      </div>
    </div>
  )
}

export default Navbar
