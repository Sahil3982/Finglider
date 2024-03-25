import './App.css'
import ShoppingCart from './Components/ShoppingCart'
import cart from './assets/cart-img.png'
function App() {

  return (


    <>
        <div className='text-4xl font-bold '>
          Shopping <span className='text-blue-700'>Cart</span> App
        </div>
        <div className='w-8 flex items-center justify-center bg-gray-100 '>
          <div className='text-2xl font-bold '>Cart</div>
          <img src={cart} alt="Cart Icon" />
        </div>

      <ShoppingCart />
    </>
  )
}

export default App
