import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer';
import CartSection from './Components/CartSection';
import MenuSection from './Components/MenuSection';
import SearchSection from './Components/SearchSection';
import RestInfo from './Components/RestInfo';
import CartBox from './Components/CartBox';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { CartProvider } from './CartContext';
import { SearchProvider } from './SearchContext';


function App() {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pageVisible, setPageVisible] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
  });
  console.log('visible',pageVisible);
console.log(phoneNumber);
  const handleClick = (menuItem) => {
    const isDuplicate = cart.some((item) =>
      item.MenuId === menuItem.MenuId && item.Item === menuItem.Item && item.isRecommendedItem
    );
    if (!isDuplicate) {
      setCart([...cart, menuItem]);
      //setCartVisible(true);
    } else {
      enqueueSnackbar('Item already Added', { variant: 'error' });
    }
  };

  const handleCartClick = () => {
    setCartVisible(!cartVisible);
  };


  return (
    <CartProvider>
      <SearchProvider>
        <>
        
          <CartSection size={cart.length} handleCartClick={handleCartClick} 
             phoneNumber={phoneNumber}  setPhoneNumber={setPhoneNumber} pageVisible={pageVisible}
             setCartVisible={setCartVisible} setPageVisible={setPageVisible} form={form}
             setForm={setForm}
          />
          <CartBox
            cart={cart}
            setCart={setCart}
            size={cart.length}
            cartVisible={cartVisible}
            setCartVisible={setCartVisible}
            handleCartClick={handleCartClick}
            phoneNumber={phoneNumber} 
            setPageVisible={setPageVisible}
            pageVisible= {pageVisible}
            form={form}
            setForm={setForm}
          />
          
          <RestInfo setPageVisible={setPageVisible}/>
          
          <SearchSection handleClick={handleClick} />
          
          <MenuSection handleClick={handleClick} handleCartClick={handleCartClick} cart={cart} 
           
          />
          <Footer size={cart.length}  setCartVisible={setCartVisible}/>
          <SnackbarProvider />
        </>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
