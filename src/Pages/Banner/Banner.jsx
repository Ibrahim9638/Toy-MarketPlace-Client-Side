import React from 'react';
import slide1 from '../../assets/banner/slider-1.jpg'
import slide2 from '../../assets/banner/slider-2.jpg'
import slide3 from '../../assets/banner/slider-3.jpg'
import slide4 from '../../assets/banner/slider-4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[550px]" data-aos="zoom-out-down">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1}className="w-full rounded-lg"/>

          <div className="absolute rounded-lg flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#2e2d2d] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-6 lg:pl-28 lg:w-1/2">
                <h1 className="text-4xl lg:text-6xl font-bold">Child building robot at robotic technology</h1>
                <p>Delivering smile with toys. Get your unbeatable fun <br /> and learning experience with our creative toys</p>
                <div>
                <button className="btn btn-active btn-lg hover:bg-red-600 bg-[#FDBE3E] text-black">Read More</button>
                </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-[#FDBE3E]">
              ❯
            </a>
          </div>

        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slide2}
            className="w-full rounded-lg"
          />
             <div className="absolute rounded-lg flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#2e2d2d] to-[rgba(21, 21, 21, 0)]">
             <div className="text-white space-y-7 pl-6 lg:pl-28 lg:w-1/2">
                <h1 className=" text-4xl lg:text-6xl font-bold">Extraordinary Learning for Toys</h1>
                <p>Premium toy for the genuine start. The best place to your buy dream toys. WE provide toys for all age kids</p>
                <div>
                <button className="btn btn-active btn-lg hover:bg-red-600 bg-[#FDBE3E] text-black">Read More</button>
                </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-[#FDBE3E]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slide3}
            className="w-full rounded-lg"
          />
             <div className="absolute rounded-lg flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
             <div className="text-white space-y-7 pl-6 lg:pl-28 lg:w-1/2">
                <h1 className="text-4xl lg:text-6xl font-bold">A Word Explore for Everything</h1>
                <p>Active toys for smart and active kids. Bring fun and not-stop learning for your little one</p>
                <div>
                <button className="btn btn-active btn-lg hover:bg-red-600 bg-[#FDBE3E] text-black">Read More</button>
                </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-[#FDBE3E]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={slide4}
            className="w-full rounded-lg"
          />
             <div className="absolute rounded-lg flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
             <div className="text-white space-y-7 pl-6 lg:pl-28 lg:w-1/2">
                <h1 className="text-4xl lg:text-6xl font-bold">Top Toys for Engineers of All Ages</h1>
                <p>Delivering smile with toys. Get your unbeatable fun <br /> and learning experience with our creative toys</p>
                <div>
                <button className="btn btn-active btn-lg hover:bg-red-600 bg-[#FDBE3E] text-black">Read More</button>
                </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-[#FDBE3E]">
              ❯
            </a>
          </div>
        </div>
        
      </div>
    );
};

export default Banner;