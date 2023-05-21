import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logImg from "../../assets/login/login.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import googleIcon from '../../assets/google.png'
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";


const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  useTitle('login')
  
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = { email, password };
    console.log(user);

    signIn(email, password)
      .then((result) => {
        const user = result.user;

            Swal.fire(
                'User Login Successfully',
                'Welcome to our login page',
                'success'
              )
        
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSignIn = ()=>{
    googleSignIn()
  }
  return (
    <div>
      <div className="hero min-h-screen bg-[#ecf4fb]">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="lg:w-full mr-14">
            <img className="rounded" src={logImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <form onSubmit={handleLogin}>
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
                    value="Login"
                  />
                </div>
              </form>
              <div className="divider">OR</div>
                <div className="text-center" onClick={ handleGoogleSignIn}>
                    <img className="h-10 w-10 mx-auto cursor" src={googleIcon} alt="" />
                </div>
              <p className="text-center">
                You do not have an account? 
                <Link to="/register" className="text-[#c22373] font-bold">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
