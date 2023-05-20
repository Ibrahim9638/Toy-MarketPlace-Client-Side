import React from "react";
import lang1 from '../../assets/popular/1.jpg'
import lang2 from '../../assets/popular/2.png'
import lang3 from '../../assets/popular/3.jpg'
import lang4 from '../../assets/popular/4.jpg'
import { FaStar,FaRegStarHalf } from "react-icons/fa";

const PopularProducts = () => {
  return (
    <div className="pt-6 pb-6 bg-[#ecf4fb]">
      <h2
        className="text-center text-4xl font-extrabold pb-16 text-[#dc2626]"
        style={{ textShadow: "2px 2px 4px #000000" }}
      >
        Popular <span className="text-[#fcd34d]">Products</span>{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-1 max-w-6xl mx-auto">
        <div className="card w-full glass">
          <figure>
            <img style={{height:'300px'}}
              src={lang1}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-start font-extrabold">Wooden Puzzles Math Toys </h2>
            <div className="text-[#fcd34d]">
            <button><FaStar/></button>
            <button><FaStar/></button>
            <button><FaStar/></button>
            <button><FaStar/></button>
            <button><FaStar/></button>
            </div>
            <p className="font-bold text-lg">Price: $8</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-warning">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-full glass">
          <figure>
            <img style={{height:'300px'}}
              src={lang2}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-start font-extrabold">Language Toys </h2>
            <div className="text-[#fcd34d]">
            <button><FaStar/></button>
            <button><FaStar/></button>
            <button><FaStar/></button>
            <button><FaStar/></button>
            <button><FaRegStarHalf/></button>
            </div>
            <p className="font-bold text-lg">Price: $5.5</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-warning">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-full glass">
          <figure>
            <img style={{height:'300px'}}
              src={lang3}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-start font-extrabold">Engineering Toy </h2>
            <div className="text-[#fcd34d]">
            <button><FaStar/></button>
            <button><FaStar/></button>
            <button><FaStar/></button>
            <button><FaStar/></button>
            <button><FaStar/></button>
            </div>
            <p className="font-bold text-lg">Price: $12.5</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-warning">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-full glass">
          <figure>
            <img style={{height:'300px', width:"400px"}}
              src={lang4}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-start font-extrabold"> Educational Toy</h2>
            <div className="text-[#fcd34d]">
            <button><FaStar/></button>
            <button><FaStar/></button>
            <button><FaStar/></button>
            <button><FaRegStarHalf/></button>
            <button><FaRegStarHalf/></button>
            </div>
            <p className="font-bold text-lg">Price: $10</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-warning">Buy Now</button>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default PopularProducts;
