import { useContext } from "react";
import { CartContext } from "./CartContext";

const Checkout = ({total}) => {
    return (  
        <div className="w-[30%] h-fit rounded border p-5 space-y-5 sm:w-[50%]">
            <div className="flex justify-between items-center border-b border-dashed p-2">
                <h1>Sub Total</h1>
                <p>{parseFloat(total.toFixed(2))} TND</p>
            </div>
            <div className="flex justify-between items-center  border-b border-dashed p-2">
                <h1 className="font-bold">Discount</h1>
                <p>0%</p>
            </div>
            <div className="flex justify-between items-center border-b border-dashed p-2">
                <h1>Shipping</h1>
                <p>7 TND</p>
            </div>
            <div className="flex justify-between items-center border-b border-dashed p-2">
                <h1>Total</h1>
                <p>{total + 7} TND</p>
            </div>
            <button className="transform transition-transform duration-300 w-full h-[40px] bg-black text-center text-white rounded font-bold  bg-customGreen hover:bg-white hover:text-customGreen hover:border-customGreen hover:border-2 hover:scale-105">
                Checkout
            </button>
        </div>
    );
}
 
export default Checkout;