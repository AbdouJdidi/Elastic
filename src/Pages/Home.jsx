import Main from "../Components/Main";
import Sidebar from "../Components/Sidebar";
import { useContext } from "react";
import { CartContext } from "../Components/CartContext";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

const Home = () => {
    const { shopCart , addToCart} = useContext(CartContext);
    const numberOfProd = shopCart.length;
    console.log(numberOfProd)
    return ( 
        <div>
            <div className="py-5">
                <Navbar numberOfProd={numberOfProd}/>
                <Hero/>
            </div>
            
            <div>
                <Main shopCart={shopCart} addToCart={addToCart}/>
            </div>
        </div>
     );
}
 
export default Home;