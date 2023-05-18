import React, {Fragment} from 'react';
import Header from './components/Layout/Header.js';
import './App.css';
import Meals from './Meals/Meals.js';

function App() {
  return (
    <Fragment>
     <Header />
     <main>
      <Meals />
     </main>
   </Fragment>
  );
}

export default App;
