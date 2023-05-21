import React from 'react';
import { AiFillDelete } from "react-icons/Ai";
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';



const ToyContent = ({singleToys, handleDelete}) => {

    const  { _id,toy,image1, sellerName, sellerEmail,category,rating, price} = singleToys;
    
    

    return (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={image1}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div className='space-y-1'>
                    <div className="font-bold">{toy}</div>
                    <div className="text-sm"> 
                    <p>SellerName: {sellerName}</p>
                    </div>
                    <div className="text-sm"> 
                    <p>Email: {sellerEmail}</p>
                    </div>

                  </div>
                </div>
              </td>
              <td>
                {category}
                
              </td>
              <td>${price}</td>
              <th>
               <p className='text-orange-300'>{rating} Star</p>
              </th>
              <th>
              <Link to={`/updateToy/${_id}`}><p className='text-green-500 text-2xl  mb-2'><FiEdit/></p></Link>
              <p className='text-red-700 text-2xl' onClick={()=> handleDelete(_id)} ><AiFillDelete/></p>
              </th>
            </tr>
        
    );
};

export default ToyContent;