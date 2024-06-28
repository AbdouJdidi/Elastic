import React, { useContext } from "react";
import { CartContext } from '../Components/CartContext';
import CartItem from './../Components/CartItem';
import { BsArrowLeft } from "react-icons/bs";
import Checkout from "../Components/Checkout";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";

const Cart = () => {
    const { shopCart , getTotal } = useContext(CartContext);
    console.log(shopCart)
    return (
       <>
        <Sidebar /> 
        <div className='ml-[80px] w-[90%] sm:ml-[60px]'>
            <div className='w-11/12 m-auto py-10'>
                <h1 className='text-3xl font-bold'>Shopping Cart</h1>
                <p className='text-sm text-gray-400'>There are {shopCart.length} Items in your cart</p>
                <section className='space-x-10 flex lg:flex-row items-center justify-between sm:flex-start flex-col'>
                    <div className='lg:w-[80%] sm:w-[90%] space-y-3'>
                        <table className='w-full'>
                            <thead className='border-b'>
                                <tr>
                                    <td className='text-gray-40 py-2'>Product</td>
                                    <td className='text-gray-40 py-2 px-4'>Price</td>
                                    <td className='text-gray-40 py-2 px-2'>Quantity</td>
                                    <td className='text-gray-40 py-2 px-2'>Total</td>
                                    <td className='text-gray-40 py-2'>Delete</td>
                                </tr>
                            </thead>
                            <tbody className='space-y-10 w-full'>
                                {shopCart.map((product, index) => (
                                    <CartItem key={index} id={product._id} image={product.img} title={product._source.description} price={product._source.price} quantity={product.quantity}  />
                                ))}
                            </tbody>

                        </table>
                        <Link to={'/'}>
                            <div className="py-5 flex flex-begin" >
                                <button className="flex items-center space-x-2 bg-white border border-black p-2 rounded-xl" >
                                    <BsArrowLeft/>
                                    <span className="font-medium" style={{ color: 'black' }}>Continue Shopping</span>
                                </button>
                            </div>
                        </Link>
                        
                    </div>
                    <Checkout total={getTotal()}/>
                    

                </section>
            </div>
        </div>
       </>                         
    );
}

export default Cart;
