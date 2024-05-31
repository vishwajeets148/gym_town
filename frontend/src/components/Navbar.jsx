import axios from "axios";
import React, { useContext, useState } from "react";
import { Link,useNavigate } from 'react-router-dom'
import { Context } from "../index.js";
import { toast } from "react-toastify";


function Navbar() {
  const baseurl = process.env.REACT_APP_BASEURL;

  const { isAuthenticated, setIsAuthenticated, loading, setLoading, user } =
    useContext(Context);

    const [refresh, setRefresh] = useState(false);

    const logoutHandler = async () => {
      setLoading(true);
      try {
        await axios
          .post(
            `${baseurl}/api/v1/user/users/logout`,{
              withCredentials: true,
              })
          .then((res) => {
            toast.success(res.data.message);
            setIsAuthenticated(false);
            setLoading(false);
            setRefresh((prev) => !prev);
           
          });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };


    
  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };



  return (
    <>

   {/* <!-- Header Section Begin --> */}
   <header className="header-section">
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src="img/logo.png" alt="" />
              </Link>
            </div>
            {isAuthenticated ? (
            <div className="nav-menu">
        
              <nav className="mainmenu mobile-menu">
                <ul>
                  <li className="active"><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/classes">Classes</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/trialdata">FreeTrial Data</Link></li>
                  <li><Link to="/contactdata">ContactData</Link></li>
                </ul>
              </nav>
             
                <button  className="btn btn-primary signup-btn" onClick={logoutHandler}>Logout | Welcome {user.name}</button>
                </div> 
              ) :  (
                <div className="nav-menu">
                <nav className="mainmenu mobile-menu">
                <ul>
                  <li className="active"><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/classes">Classes</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/contact">Contacts</Link></li>
                </ul>
              </nav>



                <button className="btn btn-primary signup-btn" onClick={goToLogin}>Login</button>
             
            </div>
             )
            }

            <div id="mobile-menu-wrap"></div>
          </div>
        </header>
        {/* <!-- Header End --> */}
    
    </>
  )
}

export default Navbar