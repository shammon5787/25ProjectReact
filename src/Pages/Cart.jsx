import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/cartSlice'

const Cart = () => {

  const proud = useSelector(state=>state.cart)
  const dispetch = useDispatch()

  const hnadleRemove = (productId)=>{
    dispetch(remove(productId))
  }

  return (
    <>
      <h1>Cart</h1>
      <div className='ProductsWrapper'>
        {
          proud.map(product => (
            <div className='cartCard' key={product.id}>
              <img className='images' src={product.image} alt="" />
              <h3>{product.title}</h3>
              <h2>{product.price}</h2>
              <button onClick={()=>hnadleRemove(product.id)} className='btn'>Remove Card</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Cart
