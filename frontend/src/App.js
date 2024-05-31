
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import BmiCalculator from "./components/BmiCalculator";
import BlogDetails from "./components/BlogDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ContactData from "./components/ContactData.jsx";
import FreeTrialData from "./components/FreeTrialData.jsx";

import { useContext, useEffect } from "react";
import axios from "axios";
import { Context} from "./index.js";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTP from "./components/OTP.jsx";


function App() {

  const baseurl = process.env.REACT_APP_BASEURL;

  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseurl}/api/v1/user/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);
 

  return (
    <>
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetail" element={<BlogDetails />} />
          <Route path="/bmi" element={<BmiCalculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactdata" element={<ContactData />} />
          <Route path="/trialdata" element={<FreeTrialData />} />
          <Route path="/otp" element={<OTP />} />
        </Routes>
        <ToastContainer position="top-center" />
     
      </Router>



    </>
  )
}

export default App