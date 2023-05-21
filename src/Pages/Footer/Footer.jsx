import React from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { BsFacebook } from 'react-icons/Bs';
import { AiFillTwitterCircle,AiFillInstagram } from 'react-icons/Ai';
import { MdContacts } from 'react-icons/Md';

const Footer = () => {
  return (
    <div>
      <footer className="footer px-10 py-8  bg-neutral text-neutral-content ">
     
        <div className="">
          
        <div className="lg:w-10 lg:rounded-full flex lg:ml-14">
              <img src={logo} style={{width:'40px', height:'40px', borderRadius:'50%'}}/>
              <p 
              className="text-3xl ml-1 font-bold text-[#dc2626]"
              style={{ textShadow: "2px 2px 4px #000000" }}
            >
              Edu<span className="text-[#fcd34d]">Toys</span>
            </p>
        </div>
          
            <p className=" lg:ml-14">
              Los Angeles, CA 90034, <br />
              United States</p>
              <p className=" lg:ml-14">Phone: +15852826298</p>
            <p className=" lg:ml-14">&copy; Copyright 2023 EduToys.com</p>
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
        <div >
          <span className="footer-title">Social Link</span>
          <div className="flex">
          <a className="link link-hover text-xl text-warning hover:text-red-700 mr-4"> <MdContacts/></a>
          <a className="link link-hover text-xl text-warning hover:text-red-700 mr-4"><BsFacebook/></a>
          <a className="link link-hover text-xl text-warning hover:text-red-700 mr-4"><AiFillTwitterCircle/></a>
          <a className="link link-hover text-xl text-warning hover:text-red-700 mr-4"><AiFillInstagram/></a>
          </div>
      
        </div>
      </footer>
    </div>
  );
};

export default Footer;
