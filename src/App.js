import React, {Fragment, useState} from 'react';
import Header from './components/Layout/Header.js';
import './App.css';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () =>{
    setCartIsShown(true);
  };
const hideCartHandler =() =>{
  setCartIsShown(false);
};

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
      <Meals />
     </main>
   </Fragment>
  );
}

export default App;
