
import axios from "axios";
import { toast } from "react-toastify";
import React, { useContext, useState } from "react";
import { Context } from "../../index.js";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Register() {

  const baseurl = process.env.REACT_APP_BASEURL;
  const { isAuthenticated, setIsAuthenticated, setLoading } = useContext(Context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    if (avatar) {
      formData.append("avatar", avatar);
    }
    try {
      await axios
        .post(
          `${baseurl}/api/v1/user/users/register`,
          formData,
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data"},
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setName("");
          setEmail("");
          setPhone("");
          setAvatar(null);
          setPassword("");
          setIsAuthenticated(true);
          setLoading(false);
          navigateTo("/");
        
        });
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setLoading(false);
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
                <h2>Register Here</h2>
                <div className="breadcrumb-option">
                  <Link to="/">
                    <i className="fa fa-home"></i> Home
                  </Link>
                  <span> Register</span>
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
                  <h2>Registration </h2>
                  {/* <p>The First 7 Day Trial Is Completely Free With Our Trainer</p> */}
                </div>
                <form onSubmit={handleRegistration}
                  action="#"
                  className="register-form"
                  
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <label for="name">Name</label>
                      <input
                        type="text" 
                        id="name"
                        placeholder="Name"
                        value={name}
              onChange={(e) => setName(e.target.value)}
                       
                      />
                    </div>
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
                      <label for="last-name">Profile Pic</label>

                      <input
                        type="file"
                        id="avatar"
                        placeholder="Profile Pic"
                         onChange={handleAvatarChange}
                      />
                    </div>
                    <div className="col-lg-6">
                      <label for="mobile">Mobile No*</label>
                      <input
                        type="number"
                        placeholder="Mobile Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                       
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
                    <div className="col-lg-6">
                      
                      <button type="submit" className="register-btn"><a href="/otp">
                    Register with Mobile No</a>
                  </button>
                      
                    </div>
                   
                  </div>
                  <button type="submit" className="register-btn">
                    Register
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="register-pic">
                <img src="img/register-pic.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Register Section End --> */}
    </>
  );
}

export default Register;
