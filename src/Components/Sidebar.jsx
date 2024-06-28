import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart, CiDeliveryTruck } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from './CartContext';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const {shopCart} = useContext(CartContext);
    console.log(shopCart)

    return (
        <div className="fixed left-0 bg-gray-100 h-screen p-1 z-50">
            <ul className="p-5 space-y-8 ">
                <div>
                    <button className="bg-transparent border-none p-0 m-0">
                        <HiOutlineMenuAlt2 size={"1.5rem"} />
                    </button>
                </div>
                <li>
                <Link to={'/'}>
                    <button className="bg-transparent border-none ">
                        <HiOutlineHome size={"1.5rem"} />
                    </button>
                </Link>

                    
                </li>
                <li>
                    <Link to={'/cart'}>
                        <button className="bg-transparent border-none ">
                            <CiShoppingCart size={"1.5rem"} />
                        </button>
                    </Link>
                    
                </li>
                <li>
                    <button className="bg-transparent border-none ">
                        <IoHeartOutline size={"1.5rem"} />
                    </button>
                </li>
                <li>
                    <button className="bg-transparent border-none ">
                        <CiDeliveryTruck size={"1.5rem"} />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
