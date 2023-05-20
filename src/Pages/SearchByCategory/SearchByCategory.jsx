import React, { useEffect, useState } from "react";
import "./SearchByCategory.css";
import SearchContent from "../SearchContent/SearchContent";

const SearchByCategory = () => {
  const [toggleState, setToggleState] = useState(1);
  const [category, setCategory] = useState("Math Toys");
  const [dataByCat, setDataByCat] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:3000/categories/${category}`)
      .then((res) => res.json())
      .then((data) => setDataByCat(data));
  }, [category]);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="bg-[#ecf4fb] pt-4 pb-10">
      <h2
        className="text-center text-4xl font-extrabold pb-16 text-[#dc2626]"
        style={{ textShadow: "2px 2px 4px #000000" }}
      >
        Shop by <span className="text-[#fcd34d]">Category</span>{" "}
      </h2>

      <div className="container max-w-6xl mx-auto">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => {
              toggleTab(1);
              setCategory("Math Toys");
            }}
          >
            Math Toys
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => {
              toggleTab(2);
              setCategory("Language Toys");
            }}
          >
            Language Toys
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => {
              toggleTab(3);
              setCategory("Engineering toys");
            }}
          >
            Engineering toys
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            {dataByCat.map((toy) => (
              <SearchContent
              key={toy._id}
              toy={toy}
              ></SearchContent>
              
            ))}
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>Content 2</h2>
            {dataByCat.map((toy) => (
              <p key={toy._id}>{toy.category}</p>
            ))}
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Content 3</h2>
            {dataByCat.map((toy) => (
              <p key={toy._id}>{toy.category}</p>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchByCategory;
