import React from "react";
import { Link } from "react-router-dom";

const SearchContent = ({ toy }) => {
  return (
    <div className="flex gap-4">

      <div className="card w-48 bg-base-100 shadow-xl">
        <figure>
          <img className="h-28 w-28"
            src={toy.image1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy.toy}</h2>
          <p>Price: {toy.price}</p>
          <p>Rating: {toy.rating}</p>
          <div className="card-actions justify-end">
          <Link to='/login'><button className='btn btn-primary'>View Details</button></Link>
          </div>
        </div>
      </div>
      <div className="card w-48 bg-base-100 shadow-xl">
        <figure>
          <img className="h-28 w-28"
            src={toy.image2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy.toy}</h2>
          <p>Price: {toy.price}</p>
          <p>Rating: {toy.rating}</p>
          <div className="card-actions justify-end">
          <Link to='/login'><button className='btn btn-primary'>View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
