import React from 'react';



import './App.css';
import Banner from './components/Banner.js';
import MyNavbar from './components/Navbar/MyNavbar';

import UpperNav from './UpperNav';

import Feature from './Feature';
import { homeFeature } from './Feature/data';
import UnderBanner from './components/UnderBanner';
import ProductSlider from './components/ProductSlider';
import { homeSlider } from './components/ProductSlider/data';



function App() {
  return (
    <div className="App">
      <UpperNav/>
     <MyNavbar/>
     <Banner/>
     <UnderBanner/>
    <Feature {...homeFeature}/>
    <ProductSlider {...homeSlider}/>

    </div>
  );
}

export default App;
