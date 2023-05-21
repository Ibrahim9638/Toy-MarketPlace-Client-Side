import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PopularProducts from "../PopularProducts/PopularProducts";
import Customers from "../Customers/Customers";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import useTitle from "../../Hooks/useTitle";


const Home = () => {
 useTitle('Home')
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <PopularProducts></PopularProducts>
      <Customers></Customers>
    </div>
  );
};

export default Home;
