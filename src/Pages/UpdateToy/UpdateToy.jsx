import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateToy = () => {
    const updateToy = useLoaderData();
    const {_id, quantity, price,details} = updateToy

    const updatedToy = (event) => {
        event.preventDefault();
        const quantity= event.target.quantity.value;
        const price= event.target.price.value;
        const details= event.target.area.value;
        const updated = {quantity,price,details}

        fetch(`http://localhost:3000/my-toys/${_id}`, {
            method: "PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Data Update Successfully',
                    'Welcome data world',
                    'success'
                  )
            }
        })
    
      
      };

    return (
        <div className="bg-[#ecf4fb]">
      <div className="card-body max-w-6xl mx-auto">
        <h2
          className="text-center text-4xl font-extrabold pb-12 text-[#dc2626]"
          style={{ textShadow: "2px 2px 4px #000000" }}
        >
          Update <span className="text-[#fcd34d]">Toy</span>{" "}
        </h2>
        <form onSubmit={updatedToy}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    
          <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                defaultValue={price}
                name="price"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                defaultValue={quantity}
                name="quantity"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea name="area" id="" cols="4" rows="4" defaultValue={details} placeholder="Description" className="p-2"></textarea>
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary w-28" type="submit" value="Update Toy" />
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdateToy;