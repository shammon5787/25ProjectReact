import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../Store/cartSlice';

const Products = () => {

    const dispetch = useDispatch()

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProduct = async ()=>{
            const res =  await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data)
            setProducts(data)
        }
        fetchProduct();
    },[]);

const handleAdd = (product) =>{
    dispetch(add(product))
}


  return (
    <div className='ProductsWrapper'>
      {
        products.map(product=>(
            <div className='cart' key={product.id}>
                <img className='images' src={product.image} alt="" />
                <h3>{product.title}</h3>
                <h2>{product.price}</h2>
                <button onClick={()=>handleAdd(product)} className='btn'>Add Card</button>
            </div>
        ))
      }
    </div>
  )
}

export default Products
