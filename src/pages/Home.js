import React from 'react';
import Banner from '../components/Banner.js';
import Feature from '../Feature';
import { homeFeature } from '../Feature/data';
import UnderBanner from '../components/UnderBanner';
import ProductSlider from '../components/ProductSlider';
import { homeSlider } from '../components/ProductSlider/data';
import Title from '../components/title';
import { sliderTitle } from '../components/title/data';

const Home = () => {
    return (
        <div>
     <Banner/>
     <UnderBanner/>
    <Feature {...homeFeature}/>
    <Title {...sliderTitle}/>
    <ProductSlider {...homeSlider}/>
        </div>
    )
}

export default Home
