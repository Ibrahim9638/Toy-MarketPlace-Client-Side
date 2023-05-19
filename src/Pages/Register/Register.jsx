import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import regImg from '../../assets/login/login.jpg'
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext)

  const handleRegisterForm =event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = {name, photo, email, password}
    console.log(user);

    createUser(email, password)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.log(error.message);
    })

  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="w-full mr-14">
            <img className='rounded' src={regImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Register</h1>
              <form onSubmit={handleRegisterForm}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="link"
                    placeholder="Photo URL"
                    name="photo"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <p className="text-center">Have you already an account? <Link to='/login' className='text-[#c22373] font-bold' >Login</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;