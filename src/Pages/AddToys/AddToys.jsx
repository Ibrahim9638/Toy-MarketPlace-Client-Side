import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddToys = () => {
  const {user} = useContext(AuthContext)

  const handleToys = (event) => {
    event.preventDefault();
    const toy= event.target.toy.value;
    const image1= event.target.image1.value;
    const image2= event.target.image2.value;
    const sellerName= event.target.sellerName.value;
    const sellerEmail= event.target.email.value;
    const category= event.target.category.value;
    const quantity= event.target.quantity.value;
    const price= event.target.price.value;
    const rating= event.target.rating.value;
    const details= event.target.area.value;

    const user = {toy,image1,image2, sellerName, sellerEmail,category,rating, quantity, price,details}
    console.log(user);

    fetch('https://assignment-11-server-navy-alpha.vercel.app/addToys',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)

    })
    .then(res=> res.json())
    .then(data=> {
      if(data.insertedId){
        Swal.fire(
          'Data Insert Successfully',
          'Welcome data world',
          'success'
        )
      }
    })

  };
  return (
    <div className="bg-[#ecf4fb]">
      <div className="card-body ">
        <h2
          className="text-center text-4xl font-extrabold pb-12 text-[#dc2626]"
          style={{ textShadow: "2px 2px 4px #000000" }}
        >
          Add a <span className="text-[#fcd34d]">New Toys</span>{" "}
        </h2>
        <form onSubmit={handleToys}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                placeholder="Toy Name"
                name="toy"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image-1</span>
              </label>
              <input
                type="link"
                placeholder="Image1"
                name="image1"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image-2</span>
              </label>
              <input
                type="link"
                placeholder="Image2"
                name="image2"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name: </span>
              </label>
              <input
                type="text"
                placeholder="Seller Name"
                defaultValue={user?.displayName}
                name="sellerName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select className="select select-bordered w-full" name="category">
                <option disabled selected>
                  Category
                </option>
                <option>Math Toys</option>
                <option>Language Toys</option>
                <option>Engineering toys</option>
              </select>
              
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea name="area" id="" cols="4" rows="4" placeholder="Description" className="p-2"></textarea>
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Add Toys" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
