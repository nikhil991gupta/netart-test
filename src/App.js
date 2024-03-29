import React from 'react';
import './App.css';

import Header from './components/header';
import Hero from './components/hero';
import Statement from './components/statement';
import Body from './components/body';
import Service from './components/services';
import Footer from './components/footer';

function App() {
   return (
      <div>
         <Header />
         <Hero />
         <Statement />
         <Body />
         <Service />
         <Footer />
      </div>
   );
}

export default App;
