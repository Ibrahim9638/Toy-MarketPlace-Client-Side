import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2';


const ToyContent = ({singleToys}) => {
    console.log(singleToys);
    const  {_id,toy,image1,image2, sellerName, sellerEmail,category,rating, quantity, price,details} = singleToys

    const handleDelete = id=> {
       const proceed =  Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

      if(proceed){
        fetch(`http://localhost:3000/my-toys/${id}`,{
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })
      }


    }
    
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
              <p className='text-green-500 text-2xl  mb-2'><FiEdit/></p>
              <p className='text-red-700 text-2xl' onClick={(_id)=> handleDelete()}><AiFillDelete/></p>
              </th>
            </tr>
        
    );
};

export default ToyContent;