import React, { useContext, useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {BsArrowLeft} from 'react-icons/bs'
import { CartContext } from './CartContext'
const CartItem = ({id,image,title,price,quantity}) => {
  const {removeFromCart,handleQuantityadd,handleQuantityreduce} = useContext(CartContext);
  

    return ( 
        
        <tr className='border-dashed border-b'>
          <td className='py-5'>
            <div className='flex items-center space-x-3 py-2'>
              <img src={"https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"} alt="" className='object-cover w-[100px] h-[100px] border rounded p-2 sm:w-[120px]'/>
              <div>
              <h1 className='text-xl font-bold'>{title}</h1>
              <p>Lorem, ipsum.</p>
            </div>
            </div>
            
          </td>
          <td className='px-2'>{price} TND</td>
          <td>
            <div className='border w-[95%] p-2 rounded flex items-center justify-center'>
              <div className='flex items-center justify-between'>
                <button className='bg-red-800 py-1 px-3 text-white font-bold rounded'onClick={()=>handleQuantityreduce(id)}>-</button>
                <p className='m-2'>{quantity}</p>
                <button onClick={()=>handleQuantityadd(id)} className='bg-customGreen py-1 px-3 text-white font-bold rounded'>+</button>
              </div>

            </div>
          </td>
          <td>{price*quantity} TND</td>
          <td>
            <button onClick={()=>removeFromCart(id)}className='px-4'>
              <AiFillDelete size={"1.5rem"}/>
            </button>
          </td>
        </tr>
      
     );
}
 
export default CartItem;