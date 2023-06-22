import React from "react";
import "./Gallery.css";
import img1 from "../../assets/gallery/1.jpg";
import img2 from "../../assets/gallery/2.jpg";
import img3 from "../../assets/gallery/3.jpg";
import img4 from "../../assets/gallery/4.jpeg";
import img5 from "../../assets/gallery/5.jpg";
import img6 from "../../assets/gallery/6.png";

const Gallery = () => {
  return (
    <div className="bg-[#ecf4fb]" data-aos="zoom-in">
      <div className="pt-16 pb-6">
        <h2
          className="text-center text-4xl font-extrabold pb-12 text-[#dc2626]"
          style={{ textShadow: "2px 2px 4px #000000" }}
        >
          Photo <span className="text-[#fcd34d]">Gallery</span>{" "}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-2" data-aos="zoom-in-down">
          <img src={img1} alt="" className="w-full h-full rounded" />
          <img src={img2} alt="" className="w-full h-full rounded" />
          <img src={img3} alt="" className="w-full h-full rounded" />
          <img src={img4} alt="" className="w-full h-full rounded" />
          <img src={img5} alt="" className="w-full h-full rounded" />
          <img src={img6} alt="" className="w-full h-full rounded" />
        </div>
       
      </div>
    </div>
  );
};

export default Gallery;
