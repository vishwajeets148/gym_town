import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
   
      {/* <!-- Breadcrumb Section Begin --> */}
    <section className="breadcrumb-section set-bg breadcrumb_img" data-setbg="img/breadcrumb/classNamees-breadcrumb.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text">
                        <h2>About</h2>
                        <div className="breadcrumb-option">
                            <Link to="/"><i className="fa fa-home"></i> Home</Link>
                            <span> About</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End -->

    <!-- About Section Begin --> */}
    <section className="about-section about-page spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-pic">
                        <img src="img/about-pic.jpg" alt="" />
                        <Link to="https://youtu.be/EbN7NcrqOzU?si=BwiQ0X7q20uBUuKA" className="play-btn video-popup">
                            <img src="img/play.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-text">
                        <h2>Story About Us</h2>
                        <p className="first-para">At GYM TOWN, we believe that fitness is not just a routine but a lifestyle.</p>
                        <p className="second-para">Founded in 2010, GYM TOWN started with a simple vision: to make fitness accessible and enjoyable for everyone. Over the years, we have grown into a community of fitness enthusiasts, all striving to be the best versions of themselves. Our state-of-the-art facility, combined with our dedicated team of trainers.</p>
                        {/* <img src="img/about-signature.png" alt="" /> */}
                        <div className="at-author">
                            <h4>Rajesh Singh</h4>
                            <span>CEO - Founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- About Section End -->

    <!-- About Counter Section Begin --> */}
    <div className="about-counter">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="about-counter-text">
                        <div className="single-counter">
                            <h1 className="counter-num count">10</h1>
                            <p>Programs</p>
                        </div>
                        <div className="single-counter">
                            <h1 className="counter-num count">2</h1>
                            <p>Locations</p>
                        </div>
                        <div className="single-counter">
                            <h1 className="counter-num count">2</h1>
                            <span>k</span>
                            <p>Members</p>
                        </div>
                        <div className="single-counter">
                            <h1 className="counter-num count">20</h1>
                            <p>Coaches</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About Counter Section End -->

    <!-- Gym Award Section Begin --> */}
    <section className="gym-award spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="award-text">
                        <h2>Best gym award</h2>
                        <p>The "Best Gym Award" is a prestigious accolade presented to fitness centers that demonstrate exceptional quality, service, and innovation in the health and fitness industry. This award recognizes gyms that excel in providing top-notch facilities, diverse and effective workout programs, highly qualified staff, and a welcoming environment for members.</p>
                        <p>Criteria for this award typically include customer satisfaction, community engagement, cleanliness, and the implementation of cutting-edge fitness technology. </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img src="img/award.jpg" alt=""/>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Gym Award Section End -->

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

    <!-- Trainer Section Begin --> */}
    <section className="trainer-section about-trainer spad">
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
                        <img src="img/trainer/about-trainer-1.jpg" alt=""/>
                        <div className="trainer-text">
                            <h5>Patrick Cortez</h5>
                            <span>Leader</span>
                            <p>non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem.</p>
                            <div className="trainer-social">
                                <Link to="#"><i className="fa fa-facebook"></i></Link>
                                <Link to="#"><i className="fa fa-instagram"></i></Link>
                                <Link to="#"><i className="fa fa-twitter"></i></Link>
                                <Link to="#"><i className="fa fa-pinterest"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-trainer-item">
                        <img src="img/trainer/about-trainer-2.jpg" alt="" />
                        <div className="trainer-text">
                            <h5>Gregory Powers</h5>
                            <span>Gym coach</span>
                            <p>non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem.</p>
                            <div className="trainer-social">
                                <Link to="#"><i className="fa fa-facebook"></i></Link>
                                <Link to="#"><i className="fa fa-instagram"></i></Link>
                                <Link to="#"><i className="fa fa-twitter"></i></Link>
                                <Link to="#"><i className="fa fa-pinterest"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-trainer-item">
                        <img src="img/trainer/about-trainer-3.jpg" alt="" />
                        <div className="trainer-text">
                            <h5>Walter Wagner</h5>
                            <span>Dance trainer</span>
                            <p>non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem.</p>
                            <div className="trainer-social">
                                <Link to="#"><i className="fa fa-facebook"></i></Link>
                                <Link to="#"><i className="fa fa-instagram"></i></Link>
                                <Link to="#"><i className="fa fa-twitter"></i></Link>
                                <Link to="#"><i className="fa fa-pinterest"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Trainer Section End -->

    <!-- Footer Banner Section Begin --> */}
    <section className="footer-banner">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="footer-banner-item set-bg footbann_img_1" >
                        <span>New member</span>
                        <h2>7 days for free</h2>
                        <p>Complete the training sessions with us, surely you will be happy</p>
                        <Link to="#" className="primary-btn">Get Started</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer-banner-item set-bg footbann_img_2 " data-setbg="img/footer-banner/footer-banner-2.jpg">
                        <span>contact us</span>
                        <h2>09 746 204</h2>
                        <p>If you trust us on your journey they dark sex does not disappoint you!</p>
                        <Link to="#" className="primary-btn">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Footer Banner Section End --> */}
    

    </>
  )
}

export default About