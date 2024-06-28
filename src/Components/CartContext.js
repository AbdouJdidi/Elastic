import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [shopCart, setShopCart] = useState(() => {
        const storedCart = localStorage.getItem('shopCart');
        return storedCart ? JSON.parse(storedCart) : [];
    });
    const getTotal = ()=>{
        const total = shopCart.reduce((accumulator,item)=>{
            const itemTotal = item._source.price * +item.quantity;
            return accumulator+itemTotal;
        },0)       
        return total
    }

    const handleQuantityadd = (id) => {
        console.log(id)
        const updatedShopCart = shopCart.map((item) => {
            if (item._id === id) {
                return { ...item, quantity: item.quantity+1 };
            } else {
                return item;
            }
        });
        setShopCart(updatedShopCart);
    };

    const handleQuantityreduce = (id) => {
        const updatedShopCart = shopCart.map((item) => {
            if (item._id === id) {
                if(item.quantity>1){
                    return { ...item, quantity: item.quantity -1 };

                }
                else{
                    return item;
                }
                
            } else {
                return item;
            }
        });
        setShopCart(updatedShopCart);
    };


    useEffect(() => {
        localStorage.setItem('shopCart', JSON.stringify(shopCart));
    }, [shopCart]);

    const addToCart = (product) => {
        const productIndex = shopCart.findIndex((item) => {console.log(item),product._id === +item._id});
        console.log(productIndex)
        if (productIndex !== -1) {
            const updatedShopCart = [...shopCart];
            updatedShopCart[productIndex].quantity += 1;
            setShopCart(updatedShopCart);
        } else {
    
            setShopCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setShopCart(shopCart.filter((item) => item._id !== id));
    };

    const clearCart = () => {
        setShopCart([]);
    };

    return (
        <CartContext.Provider value={{ shopCart, addToCart, removeFromCart, setShopCart, handleQuantityadd,handleQuantityreduce, clearCart ,getTotal}}>
            {children}
        </CartContext.Provider>
    );
};
