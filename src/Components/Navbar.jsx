import image from '../assets/shop.png'
import {Link} from 'react-router-dom'
import '../style/style.css'
import { FiShoppingBag } from "react-icons/fi";

const Navbar = ({numberOfProd}) => {
    console.log(typeof numberOfProd)
    return ( 
        <div>
            <section className='headern flex  items-center '>
                <Link to='/'><img className='w-[60px] h-[60px]' src={image}/></Link>
                <div className='flex py-2'>
                    <ul className='navbar flex items-center'>
                        <li className='px-4'><Link className='active' to='/'>Home</Link></li>
                        <li className='px-4'><Link to='/'>Shop</Link></li>
                        <li className='px-4'><Link to='/'>About</Link></li>
                        <li className='px-4'><Link to='/'>Contact</Link></li>
                        <li className='px-4'><Link to='/cart'>< FiShoppingBag size={'1.5rem'}/></Link></li>
                    </ul>
                    <div className='rounded-2xl bg-red-500 w-[18px] h-[18px] flex items-center justify-center text-white font-semibold absolute ml-[340px] mb-2 text-md top-10 transform duration-300 hover:scale-110'>
                        {numberOfProd}
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Navbar;