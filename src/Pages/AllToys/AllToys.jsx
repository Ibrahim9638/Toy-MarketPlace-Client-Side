import React, { useEffect, useState } from "react";
import AllToyContent from "./AllToyContent";
import useTitle from "../../Hooks/useTitle";


const AllToys = () => {
const [allToys, setAllToys] = useState([]);
const [searchValue, setSearchValue] = useState("")
 useTitle('AllToys')
 const handleSearch=(e)=>{
  setSearchValue(e.target.value)
  fetch(`http://localhost:3000/all-toys/${searchValue}`)
  .then(res=> res.json())
  .then(data=> setAllToys(data))
 }

  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, []);

  return (
    <div className="bg-[#ecf4fb]">
      <input onChange={handleSearch} type="text" placeholder="Type here" className="input input-bordered input-warning  mx-auto w-full max-w-xs" />
      <div className="overflow-x-auto py-4">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((allToy) => (
              <AllToyContent key={allToy._id} allToy={allToy}></AllToyContent>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
