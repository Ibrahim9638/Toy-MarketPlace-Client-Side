import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleDetailsToy = () => {
  const singleDetails = useLoaderData();
  const {toy,image1,image2, sellerName, sellerEmail,category,rating, quantity, price,details} = singleDetails
  return (
    <div>
      <div className="card w-1/2 mx-auto p-4 my-10 bg-base-100 shadow-xl " style={{border:'2px solid #00ff00'}} >
        <figure>
          <img
            src={image1} className="w-60 h-60 rounded"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title" style={{textShadow: '1px 1px 15px #000000'}}>
            Toy Name: {toy}
            
          </h2>
          <p className="text-md" style={{textShadow: '1px 1px 15px #000000'}}>Seller Name: {sellerName}</p>
          <p className="text-md" style={{textShadow: '1px 1px 15px #000000'}}> Seller Email: {sellerEmail}</p>
          <p className="text-md" style={{textShadow: '1px 1px 15px #000000'}}>Price: {price}</p>
          <p className="text-md" style={{textShadow: '1px 1px 15px #000000'}}>Rating: {rating} Star</p>
          <p className="text-md" style={{textShadow: '1px 1px 15px #000000'}}>Quantity: {quantity}</p>
          <p className="text-md" style={{textShadow: '1px 1px 15px #000000'}}>Description: {details}</p>
          <div className="card-actions justify-end">
            <Link to='/'><div className="badge badge-outline bg-warning cursor-pointer hover:bg-red-500">Buy Products</div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDetailsToy;
