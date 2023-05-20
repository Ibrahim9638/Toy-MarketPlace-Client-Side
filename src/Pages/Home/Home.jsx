import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import PopularProducts from '../PopularProducts/PopularProducts';
import Customers from '../Customers/Customers';
import SearchByCategory from '../SearchByCategory/SearchByCategory';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <SearchByCategory></SearchByCategory>
           <PopularProducts></PopularProducts>
           <Customers></Customers>
           
        </div>
    );
};

export default Home;