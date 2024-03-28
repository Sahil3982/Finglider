import './App.css';
import Addcart from './Components/Addcart';
import ShoppingCart from './Components/ShoppingCart';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import cart from './assets/cart-img.png';

function App() {
  return (
    <Router>
      <>
        <div className='flex gap-96 py-4 px-20 justify-center align-center '>
          <Link to="/" ><div className='text-4xl font-bold '>
            Shopping <span className='text-blue-700'>Cart</span> App
            <hr className='h-4'></hr>
          </div></Link>
          <Link to="/addcart"><div className='px-32 '> <div className='w-8 flex items-center justify-center'>
            <div className='text-2xl font-bold'>hhjhj</div>
            <img src={cart} alt="Cart" />
          </div></div></Link>
        </div>

        <Routes>
          <Route exact path='/' element={<ShoppingCart />} />
          <Route path="/addcart" element={<Addcart />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
