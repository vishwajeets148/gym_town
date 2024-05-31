import axios from "axios";
import "../Assets/Style/otp.css"
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../index.js";
import { Link , useNavigate, Navigate } from "react-router-dom";



function OTP() {

    const baseurl = process.env.REACT_APP_BASEURL;

    const navigateTo = useNavigate();

        const [phoneNumber, setPhoneNumber] = useState("");
        const [loading, setLoading] = useState(false);
        const [otp, setOtp] = useState(["", "", "", ""]);
    
      
        const handleSendOtp = async (e) => {
          e.preventDefault();
          setLoading(true);
          try {
            const res = await axios.post(
              `${baseurl}/api/v1/otp/sendotp`,
              { phoneNumber },
              {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
              }
            )
            .then((res) => {
            toast.success(res.data.message);
            
            setLoading(false);
            
        });
          } catch (error) {
            toast.error(error.response.data.message || "Error sending OTP");
            setLoading(false);
          }
        };


        const handleVerifyOtp = async () => {
            const otpCode = otp.join("");
            setLoading(true);
            try {
              const res = await axios.post(
                `${baseurl}/api/v1/otp/verifyotp`,
                { phoneNumber, otp: otpCode },
                {
                  headers: { "Content-Type": "application/json" },
                }
              );
              toast.success(res.data.message);
              setLoading(false);
              navigateTo("/");
            } catch (error) {
              toast.error(error.response.data.message || "Error verifying OTP");
              setLoading(false);
            }
          };

          const handleOtpChange = (index, value) => {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
          };




  return (
    <>

<section className="breadcrumb-section set-bg breadcrumb_img">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Mobile number Registration</h2>
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



     <div className="container p-5">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-5 mt-5">
                <div className="bg-white p-5 rounded-3 shadow-sm border">
                    <div>
                        <p className="text-center text-success" style={{fontSize: '5.5rem'}}><i className="fa-solid fa-envelope-circle-check"></i></p>
                        <p className="text-center text-center h5 ">Please check your email</p>
                        <p className="text-muted text-center">We've sent a code to contact@curfcode.com</p>
                        <div className="row pt-4 pb-2">
                        {/* <div className="col-12">
                                <input className="otp-letter-input" type="number" />
                            </div> */}
                            <div className="col-lg-8" >
                            <label for="mobile">Mobile No*</label>
                      <input
                        type="number"
                        placeholder="Mobile Number"
                        style={{width:'330px', height:'50px', fontSize:'25px'}}
                        value={phoneNumber}
                       onChange={(e) => setPhoneNumber(e.target.value)}
                       
                      />
                      </div>

                        </div>
                        <div className="row pt-5">
                            <div className="col-12">
                                <button className="btn btn-success w-100" onClick={handleSendOtp}  >Send OTP</button>
                            </div>
                            
                            
                        </div>
                        <div className="row pt-4 pb-2">
                        {
                        otp.map((digit, index) => (
                    
                            <div className="col-3" key={index}>
                                <input className="otp-letter-input" type="text"   value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)} />
                            </div>
                    //         <div className="col-3">
                    //             <input className="otp-letter-input"  value={digit}
                    //   onChange={(e) => handleOtpChange(index, e.target.value)} type="text" />
                    //         </div>
                    //         <div className="col-3">
                    //             <input className="otp-letter-input"  value={digit}
                    //   onChange={(e) => handleOtpChange(index, e.target.value)} type="text" />
                    //         </div>
                    //         <div className="col-3">
                    //             <input className="otp-letter-input"  value={digit}
                    //   onChange={(e) => handleOtpChange(index, e.target.value)}type="text" />
                    //         </div>
                            
                            ))}
                        </div>
                        
                        <p className="text-muted text-center">Didn't get the code? <a href="#" className="text-success">Click to resend.</a></p>

                        <div className="row pt-5">
                            <div className="col-6">
                                <button className="btn btn-outline-secondary w-100">Cancel</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-success w-100" onClick={handleVerifyOtp} disabled={loading}>Verify</button>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default OTP