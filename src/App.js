import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Favorites from './Pages/Favorites';
import Order from './Pages/Order';
import { CartProvider } from './Components/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
