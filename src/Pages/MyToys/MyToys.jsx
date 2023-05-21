import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ToyContent from "./ToyContent";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortValue, setSortValue] = useState("")

  useEffect(() => {
    fetch(`https://assignment-11-server-navy-alpha.vercel.app/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

 const  handleSort =(e)=>{
  setSortValue(e.target.value)

 }
 useEffect(()=>{fetch(`https://assignment-11-server-navy-alpha.vercel.app/my-toys/${user?.email}?sortBy=${sortValue}`)
 .then(res=>res.json())
 .then(data=>setMyToys(data))},[sortValue])
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-navy-alpha.vercel.app/my-toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Data has been deleted.", "success");
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <select onChange={handleSort}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name & Seller</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((singleToys) => (
              <ToyContent
                key={singleToys._id}
                singleToys={singleToys}
                handleDelete={handleDelete}
              ></ToyContent>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
