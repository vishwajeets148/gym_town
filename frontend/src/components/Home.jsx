import React, { useState } from "react";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Home() {
  const baseurl = process.env.REACT_APP_BASEURL;

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const getAppointement = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${baseurl}/api/v1/appointment/post`,
          { first_name, last_name, email, phone, date },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirst_name("");
          setLast_name("");
          setEmail("");
          setPhone("");
          setDate("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {/* <!-- Hero Section Begin --> */}
      <section className="hero-section set-bg hero_img">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-text">
                <span>FITNESS ELEMENTS</span>
                <h1>BMI CALCULATOR</h1>
                <p>
                  Body mass index (BMI) is a measure of body fat based on height
                  and weight that applies to adult men and women.
                </p>
                <Link to="/bmi" className="primary-btn">
                  Calculate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Section End --> */}

      {/* <!-- About Section Begin --> */}
      <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-pic">
                <img src="img/about-pic.jpg" alt="" />
                <Link
                  to="https://youtu.be/EbN7NcrqOzU"
                  className="play-btn video-popup"
                >
                  <img src="img/play.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-text">
                <h2>Story About Us</h2>
                <p className="first-para">
                  At GYM TOWN, we believe that fitness is not just a routine but
                  a lifestyle.
                </p>
                <p className="second-para">
                  Founded in 2010, GYM TOWN started with a simple vision: to
                  make fitness accessible and enjoyable for everyone. Over the
                  years, we have grown into a community of fitness enthusiasts,
                  all striving to be the best versions of themselves. Our
                  state-of-the-art facility, combined with our dedicated team of
                  trainers.
                </p>
                <Link to="#" className="primary-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Section End --> */}

      {/* <!-- Services Section Begin --> */}
      <section className="services-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-pic">
                <img src="img/services/service-pic.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-items">
                <div className="row">
                  <div className="col-md-6">
                    <div className="services-item bg-gray">
                      <img src="img/services/service-icon-1.png" alt="" />
                      <h4>Strategies</h4>
                      <p>
                        By setting clear, achievable goals and creating a
                        personalized workout plan, you can ensure steady
                        progress.
                      </p>
                    </div>
                    <div className="services-item bg-gray pd-b">
                      <img src="img/services/service-icon-3.png" alt="" />
                      <h4>Workout</h4>
                      <p>
                        A well-rounded workout regimen is essential for
                        achieving your fitness goals.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="services-item">
                      <img src="img/services/service-icon-2.png" alt="" />
                      <h4>Yoga</h4>
                      <p>
                        Integrating yoga into your gym routine offers numerous
                        benefits, including increased flexibility, improved
                        balance, and reduced stress.
                      </p>
                    </div>
                    <div className="services-item pd-b">
                      <img src="img/services/service-icon-4.png" alt="" />
                      <h4>Weight Loss</h4>
                      <p>
                        Achieving weight loss through gym workouts involves a
                        combination of calorie-burning exercises and strength
                        training.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Section End -->

    <!-- classNamees Section Begin --> */}
      <section className="classes-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>UNLIMITED CLASSES</h2>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4">
              <div className="single-class-item set-bg classes_img_2">
                <div className="si-text">
                  <h4>Yoga</h4>
                  <span>
                    <i className="fa fa-user"></i> Ryan Knight
                  </span>
                </div>
              </div>
              <div className="single-class-item set-bg classes_img_3">
                <div className="si-text">
                  <h4>Karate</h4>
                  <span>
                    <i className="fa fa-user"></i> Kevin McCormick
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-class-item set-bg classes_img_4">
                <div className="si-text">
                  <h4>Running</h4>
                  <span>
                    <i className="fa fa-user"></i> Randy Rivera
                  </span>
                </div>
              </div>
              <div className="single-class-item set-bg classes_img_5">
                <div className="si-text">
                  <h4>Dance</h4>
                  <span>
                    <i className="fa fa-user"></i> Russell Lane
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-class-item set-bg classes_img_1">
                <div className="si-text">
                  <h4>Personal Training</h4>
                  <span>
                    <i className="fa fa-user"></i> Cole Robertson
                  </span>
                </div>
              </div>
              <div className="single-class-item set-bg classes_img_6">
                <div className="si-text">
                  <h4>Weight Loss</h4>
                  <span>
                    <i className="fa fa-user"></i> Ryan Scott
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- classNamees Section End -->

    <!-- Trainer Section Begin --> */}
      <section className="trainer-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>EXPERT TRAINERS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-trainer-item">
                <img src="img/trainer/trainer-1.jpg" alt="" />
                <div className="trainer-text">
                  <h5>Patrick Cortez</h5>
                  <span>Leader</span>
                  <p>
                    non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>
                  <div className="trainer-social">
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-pinterest"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-trainer-item">
                <img src="img/trainer/trainer-2.jpg" alt="" />
                <div className="trainer-text">
                  <h5>Gregory Powers</h5>
                  <span>Gym coach</span>
                  <p>
                    non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>
                  <div className="trainer-social">
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-pinterest"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-trainer-item">
                <img src="img/trainer/trainer-3.jpg" alt="" />
                <div className="trainer-text">
                  <h5>Walter Wagner</h5>
                  <span>Dance trainer</span>
                  <p>
                    non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>
                  <div className="trainer-social">
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-pinterest"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Trainer Section End -->

    <!-- Testimonial Section Begin --> */}
      {/* <section className="testimonial-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>success stories</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="testimonial-slider owl-carousel">
                        <div className="testimonial-item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className="ti-pic">
                                <img src="img/testimonial/testimonial-1.jpg" alt="" />
                                <div className="quote">
                                    <img src="img/testimonial/quote-left.png" alt="" />
                                </div>
                            </div>
                            <div className="ti-author">
                                <h4>Patrick Cortez</h4>
                                <span>Leader</span>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className="ti-pic">
                                <img src="img/testimonial/testimonial-1.jpg" alt="" />
                                <div className="quote">
                                    <img src="img/testimonial/quote-left.png" alt="" />
                                </div>
                            </div>
                            <div className="ti-author">
                                <h4>Patrick Cortez</h4>
                                <span>Leader</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
      {/* <!-- Testimonial Section End -->

    <!-- Banner Section Begin --> */}
      {/* <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="banner-text">
                        <h2>Get training today</h2>
                        <p>Gimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry’s standard.</p>
                        <Link to="#" className="primary-btn banner-btn">Contact Now</Link>
                    </div>
                </div>
                <div className="col-lg-5">
                    <img src="img/banner-person.png" alt="" />
                </div>
            </div>
        </div>
    </section> */}
      {/* <!-- Banner Section End -->

    <!-- Membership Section Begin --> */}
      <section className="membership-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>MEMBERSHIP PLANS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="membership-item">
                <div className="mi-title">
                  <h4>Basic</h4>
                  <div className="triangle"></div>
                </div>
                <h2 className="mi-price">
                  ₹1800<span>/01 mo</span>
                </h2>
                <ul>
                  <li>
                    <p>Duration</p>
                    <span>1 months</span>
                  </li>
                  <li>
                    <p>Personal trainer</p>
                    <span>1 person</span>
                  </li>
                  <li>
                    <p>Amount of people</p>
                    <span>01 person</span>
                  </li>
                  <li>
                    <p>Number of visits</p>
                    <span>Unlimited</span>
                  </li>
                </ul>
                <Link to="#" className="primary-btn membership-btn">
                  Start Now
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="membership-item">
                <div className="mi-title">
                  <h4>Standard</h4>
                  <div className="triangle"></div>
                </div>
                <h2 className="mi-price">
                  ₹1500<span>/01 mo</span>
                </h2>
                <ul>
                  <li>
                    <p>Duration</p>
                    <span>1 months</span>
                  </li>
                  <li>
                    <p>Personal trainer</p>
                    <span>01 person</span>
                  </li>
                  <li>
                    <p>Amount of people</p>
                    <span>02 person</span>
                  </li>
                  <li>
                    <p>Number of visits</p>
                    <span>Unlimited</span>
                  </li>
                </ul>
                <Link to="#" className="primary-btn membership-btn">
                  Start Now
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="membership-item">
                <div className="mi-title">
                  <h4>Premium</h4>
                  <div className="triangle"></div>
                </div>
                <h2 className="mi-price">
                  ₹3000<span>/03 mo</span>
                </h2>
                <ul>
                  <li>
                    <p>Duration</p>
                    <span>3 months</span>
                  </li>
                  <li>
                    <p>Personal trainer</p>
                    <span>01 person</span>
                  </li>
                  <li>
                    <p>Amount of people</p>
                    <span>02 person</span>
                  </li>
                  <li>
                    <p>Number of visits</p>
                    <span>Unlimited</span>
                  </li>
                </ul>
                <Link to="#" className="primary-btn membership-btn">
                  Start Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Membership Section End -->

      

    <!-- Register Section Begin --> */}
      <section className="register-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="register-text">
                <div className="section-title">
                  <h3> The First 7 Day Trial Is Completely Free</h3>
                  {/* <p>
                    The First 7 Day Trial Is Completely Free With Our Trainer
                  </p> */}
                </div>
                <form
                  action="#"
                  className="register-form"
                  onSubmit={getAppointement}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <label for="name">First Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="First Name"
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
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
                      <label for="last-name">Last Name</label>

                      <input
                        type="text"
                        id="last"
                        placeholder="Last Name"
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
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
                      <label for="date">Appointment Date</label>
                      <input
                        type="date"
                        placeholder="Appointment Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    
                  </div>

                  <button type="submit" className="register-btn">
                    Get Started
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
      {/* <!-- Register Section End -->

    <!-- Latest Blog Section Begin --> */}
      <section className="latest-blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Latest Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-item">
                <img src="img/blog/blog-1.jpg" alt="" />
                <div className="blog-widget">
                  <div className="bw-date">February 17, 2019</div>
                  <Link to="#" className="tag">
                    #Gym
                  </Link>
                </div>
                <h4>
                  <Link to="#">
                    10 States At Risk of Rural Hospital Closures
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-item">
                <img src="img/blog/blog-2.jpg" alt="" />
                <div className="blog-widget">
                  <div className="bw-date">February 17, 2019</div>
                  <Link to="#" className="tag">
                    #Sport
                  </Link>
                </div>
                <h4>
                  <Link to="#">Diver who helped save Thai soccer team</Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-item">
                <img src="img/blog/blog-3.jpg" alt="" />
                <div className="blog-widget">
                  <div className="bw-date">February 17, 2019</div>
                  <Link to="#" className="tag">
                    #Body
                  </Link>
                </div>
                <h4>
                  <Link to="#">Man gets life in prison for stabbing</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
