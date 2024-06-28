import { useContext } from "react";
import { CartContext } from "../Components/CartContext";
const Favorites = () => {
    const { shopCart } = useContext(CartContext);
    console.log(shopCart)
    return ( 

        <div>Favorites</div>
     );
}
 
export default Favorites;