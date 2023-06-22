import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Provider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
console.log(user)
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navItems = (
    <>
      <li>
        <Link className="text-lg font-semibold hover:text-[#fcd34d]" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-lg font-semibold hover:text-[#fcd34d]"
          to="/alltoys"
        >
          All Toys
        </Link>
      </li>
      <li>
        <Link className="text-lg font-semibold hover:text-[#fcd34d]" to="/blog">
          Blog
        </Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link
              className="text-lg font-semibold hover:text-[#fcd34d]"
              to="/addtoys"
            >
              Add Toys
            </Link>
          </li>
          <li>
            <Link
              className="text-lg font-semibold hover:text-[#fcd34d]"
              to="/my-toys"
            >
              My Toys
            </Link>
          </li>
          <li>
            <Link>
              <img
                src={user?.photoURL}
                title={user?.displayName}
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  border: "1px solid",
                }}
              />
            </Link>
            <button
              onClick={handleLogout}
              className="text-lg font-semibold hover:text-[#fcd34d]"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link
            className="text-lg font-semibold hover:text-[#fcd34d]"
            to="/login"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#ecf4fb] " data-aos="fade-down-left">
      <div className="navbar  max-w-6xl mx-auto" >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex items-center">
            <div className="w-10 rounded-full">
              <img src={logo} style={{width:'40px', height:'40px', borderRadius:'50%'}}/>
            </div>
            <p
              className="text-3xl font-bold text-[#dc2626]"
              style={{ textShadow: "2px 2px 4px #000000" }}
            >
              Edu<span className="text-[#fcd34d]">Toys</span>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
