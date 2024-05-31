import { RiRegisteredFill } from "react-icons/ri";
import { MdPassword } from "react-icons/md";

import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../../index.js";
import { Link, useNavigate, Navigate } from "react-router-dom";

function Login() {

  const baseurl = process.env.REACT_APP_BASEURL;
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${baseurl}/api/v1/user/login`,
          { email, password },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
          
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }


  
  return (
    <>
      <section className="breadcrumb-section set-bg breadcrumb_img">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Login Here</h2>
                <div className="breadcrumb-option">
                  <Link to="/">
                    <i className="fa fa-home"></i> Home
                  </Link>
                  <span> Login </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* - Register Section Begin  */}
      <section className="register-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="register-text">
                <div className="section-title">
                  <h2> Login </h2>
                  {/* <p>The First 7 Day Trial Is Completely Free With Our Trainer</p> */}
                </div>
                <form
                  action="#"
                  className="register-form"
                  
                >
                  <div className="row">
            
                    <div className="col-lg-6">
                      <label for="email">Your email address</label>

                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
            onChange={(e) => setEmail(e.target.value)}
                        
                      />
                    </div>
                
  
                    <div className="col-lg-6">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        
                      />
                      
                    </div>
                   
                  </div>
                  <div className="row">
                  <div className="col-lg-6">
             <button type="submit" className="register-btn">
              <RiRegisteredFill /> <a href="/register"> Register</a>
                  </button>
                  </div>
                  <div className="col-lg-6">
                  <button type="submit" className="register-btn">
                  <MdPassword /> Forget Password
                  </button>
                  </div>
              </div>
                  <button  onClick={handleLogin} className="register-btn">
                    Get Started
                  </button>
                </form>
              </div>
             
            </div>
            <div className="col-lg-4">
              <div className="register-pics"> 
             
                <img src="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Register Section End --> */}
    </>
  );
}

export default Login;
