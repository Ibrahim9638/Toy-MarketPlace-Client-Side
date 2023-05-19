import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import PopularProducts from '../PopularProducts/PopularProducts';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <PopularProducts></PopularProducts>
           
        </div>
    );
};

export default Home;