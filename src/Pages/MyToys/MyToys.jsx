import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ToyContent from "./ToyContent";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:3000/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  return (
    <div>
      <h2>My Toys: {myToys.length}</h2>
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
            
            {
                myToys.map(singleToys=> <ToyContent
                 key={singleToys._id}
                 singleToys = {singleToys}
                 >

                </ToyContent>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
