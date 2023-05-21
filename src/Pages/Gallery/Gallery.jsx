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

        <div className="img-gallery py-8 max-w-6xl mx-auto" data-aos="zoom-in-down">
          <img src={img1} alt="" className="rounded border-2" />
          <img src={img2} alt="" className="rounded border-2" />
          <img src={img3} alt="" className="rounded border-2" />
          <img src={img4} alt="" className="rounded border-2" />
          <img src={img5} alt="" className="rounded border-2" />
          <img src={img6} alt="" className="rounded border-2" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
