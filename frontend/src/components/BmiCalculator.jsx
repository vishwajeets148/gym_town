import React, { useState } from "react";
import { Link } from "react-router-dom";

function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault()
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!isNaN(h) && !isNaN(w) && h > 0 && w > 0) {
      const bmi = w / ((h / 100) * (h / 100));
      const total = bmi.toFixed(2);
      setResult(`Your BMI is: ${total}`);
    } else {
      setResult("Please enter valid height [cm] and weight [kg]");
    }
  };

  return (
    <>
      <section className="breadcrumb-section set-bg breadcrumb_img">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>BMI Calculator</h2>
                <div className="breadcrumb-option">
                  <Link to="/">
                    <i className="fa fa-home"></i> Home
                  </Link>
                  <span>BMI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        {/* <h4>BMI Calculator</h4> */}
        <div className="col-lg-12">
          <div className="contact-form">
            <h4>Body Mass Index</h4>
            <form action="#">
              <div className="row">
                <div className="col-lg-4">
                  <p className="text">Height</p>
                  <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter height in cm"
                  />
                </div>
                <div className="col-lg-4">
                  <p className="text">Weight</p>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight in kg"
                  />
                </div>
                <div className="col-lg-4">
                  <p className="text">Result</p>
                  <button className="btn"   id="result"> { result}  </button>
                </div>
                <div className="col-lg-12">
                  
                  <button className="btn" onClick={calculateBMI}>
                    Calculate
                  </button>
               
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BmiCalculator;
