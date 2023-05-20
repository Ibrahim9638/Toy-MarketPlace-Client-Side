import React from "react";
import { Link } from "react-router-dom";

const SearchContent = ({ toy }) => {
  console.log(toy);
  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img src={toy.image1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2
            className="card-title font-bold"
            style={{ textShadow: "0px 0px 1px #f00000" }}
          >
            {toy.toy}
          </h2>
          <p className="font-extrabold">Price: ${toy.price}</p>
          <p className="font-extrabold">Rating: {toy.rating}</p>
          <div className="card-actions justify-end">
            <Link to="/login">
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
