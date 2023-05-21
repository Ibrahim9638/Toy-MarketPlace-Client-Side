import React from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { BsFacebook } from 'react-icons/Bs';
import { AiFillTwitterCircle,AiFillInstagram } from 'react-icons/Ai';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10  bg-neutral text-neutral-content ">
      <div>
        
      </div>
        <div>
          
        <div className="lg:w-10 lg:rounded-full flex ">
              <img src={logo} style={{width:'40px', height:'40px', borderRadius:'50%'}}/>
              <p 
              className="text-3xl ml-1 font-bold text-[#dc2626]"
              style={{ textShadow: "2px 2px 4px #000000" }}
            >
              Edu<span className="text-[#fcd34d]">Toys</span>
            </p>
        </div>
          
            <p>
              Los Angeles, CA 90034, <br />
              United States</p>
            <p>&copy; 2023 EduToys.com</p>
        </div>

        <div>
          <span className="footer-title">Services</span>
          <Link to='/'><a className="link link-hover">All Educational Toys</a></Link>
          <a className="link link-hover">Math Toys</a>
          <a className="link link-hover">Language Toys</a>
          <a className="link link-hover">Engineering Toys</a>
          
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to='/'><a className="link link-hover">Home</a></Link>
          <Link to='/alltoys'><a className="link link-hover">All Toys</a></Link>
          <Link to='/blog'><a className="link link-hover">Blog</a></Link>
          <Link to='/'><a className="link link-hover">EduToys</a></Link>
         
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">Phone: +15852826298</a>
          <a className="link link-hover text-xl text-warning hover:text-red-700"><BsFacebook/></a>
          <a className="link link-hover text-xl text-warning hover:text-red-700"><AiFillTwitterCircle/></a>
          <a className="link link-hover text-xl text-warning hover:text-red-700"><AiFillInstagram/></a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
