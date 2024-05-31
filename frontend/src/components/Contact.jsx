import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { toast } from "react-toastify";
import axios from "axios";

function Contact() {


    const baseurl = process.env.REACT_APP_BASEURL;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")


    const contactForm = async (e) => {
        e.preventDefault();
        try {
          await axios
            .post(
              `${baseurl}/api/v1/message/contact`,
              { name, email, message },
              {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
              }
            )
            .then((res) => {
              toast.success(res.data.message);
              setName("");
              setMessage("");
              setEmail("");
             
            });
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };


  return (
    <>
     {/* <!-- Breadcrumb Section Begin --> */}
    <section className="breadcrumb-section set-bg breadcrumb_img" >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text">
                        <h2>Contact</h2>
                        <div className="breadcrumb-option">
                            <Link to="/"><i className="fa fa-home"></i> Home</Link>
                            <span> Contact</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End -->

    <!-- Map Section Begin --> */}
    <div className="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.208865522603!2d77.46606057457123!3d28.59351028585328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef66e62bbc05%3A0x7740a6761a63cb8e!2sGYMTown_Fitness!5e0!3m2!1sen!2sin!4v1716630519457!5m2!1sen!2sin"
            height="500" style={{border:'0'}} allowfullscreen=""></iframe>
        <img src="img/icon/location.png" alt="" />
    </div>
    
    {/* <!-- Map Section End -->

    <!-- Contact Section Begin --> */}
    <section className="contact-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact-info">
                        <h4>Contacts Us</h4>
                        <div className="contact-address">
                            <div className="ca-widget">
                                <div className="cw-icon">
                                    <img src="img/icon/icon-1.png" alt="" />
                                </div>
                                <div className="cw-text">
                                    <h5>Our Location</h5>
                                    <p>Main Market Laxmi Nagar</p>
                                </div>
                            </div>
                            <div className="ca-widget">
                                <div className="cw-icon">
                                    <img src="img/icon/icon-2.png" alt="" />
                                </div>
                                <div className="cw-text">
                                    <h5>Phone:</h5>
                                    <p>91 - 8800127922</p>
                                </div>
                            </div>
                            <div className="ca-widget">
                                <div className="cw-icon">
                                    <img src="img/icon/icon-3.png" alt="" />
                                </div>
                                <div className="cw-text">
                                    <h5>Mail</h5>
                                    <p>contact@gymtown.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="contact-form">
                        <h4>Leave A Comment</h4>
                        <form action="#" onSubmit={contactForm} >
                            <div className="row">
                                <div className="col-lg-6">
                                 
                                    <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="col-lg-6">
                                <input type="email" id="name" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="col-lg-12">
                                    <textarea placeholder="Your messages" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                    <button type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Contact Section End --> */}
    
    </>
  )
}

export default Contact