import React from 'react';
import { Link } from 'react-router-dom';

const AllToyContent = ({allToy}) => {
   
    return (
        <tr>
         <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>{allToy.sellerName}</td>
        <td>{allToy.toy}</td>
        <td>{allToy.category}</td>
        <td>${allToy.price}</td>
        <td>{allToy.quantity} Nos</td>
        <td><button className='btn btn-primary'><Link to='/login'>View Details</Link></button></td>
      </tr>
    );
};

export default AllToyContent;