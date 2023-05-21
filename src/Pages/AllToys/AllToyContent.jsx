import React from 'react';
import { Link } from 'react-router-dom';

const AllToyContent = ({allToy}) => {
   const{_id, sellerName,toy,category,price,quantity} =allToy
    return (
        <tr>
         <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>{sellerName}</td>
        <td>{toy}</td>
        <td>{category}</td>
        <td>${price}</td>
        <td>{quantity} Nos</td>
        <td><button className='btn btn-primary'><Link to={`/singleDetailsToy/${_id}`}>View Details</Link></button></td>
      </tr>
    );
};

export default AllToyContent;