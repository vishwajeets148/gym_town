import React from 'react'
import { Link } from 'react-router-dom'

function Classes() {
  return (
    <>

{/* <!-- Breadcrumb Section Begin --> */}
    <section className="breadcrumb-section set-bg breadcrumb_img" data-setbg="img/breadcrumb/classes-breadcrumb.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text">
                        <h2>Classes</h2>
                        <div className="breadcrumb-option">
                            <Link to="/"><i className="fa fa-home"></i> Home</Link>
                            <span>Class</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End -->

    <!-- Register Section Begin --> */}
    <section className="register-section classes-page spad">
        <div className="container">
            <div className="classes-page-text">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="register-text">
                            <div className="section-title">
                                <h2>Register Now</h2>
                                <p>The First 7 Day Trial Is Completely Free With The Teacher</p>
                            </div>
                            <form action="#" className="register-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label for="name">First Name</label>
                                        <input type="text" id="name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label for="email">Your email address</label>
                                        <input type="text" id="email" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label for="last-name">Last Name</label>
                                        <input type="text" id="last-name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label for="mobile">Mobile No*</label>
                                        <input type="text" id="mobile" />
                                    </div>
                                </div>
                                <button type="submit" className="register-btn">Get Started</button>
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
        </div>
    </section>
    {/* <!-- Register Section End -->

    <!-- Classes Section Begin --> */}
    <section className="classes-section classes-page spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>UNLIMITED CLASSES</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-class-item set-bg classes_img_1" >
                        <div className="si-text">
                            <h4>Yoga</h4>
                            <span><i className="fa fa-user"></i> Ryan Knight</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-class-item set-bg classes_img_2">
                        <div className="si-text">
                            <h4>Karate</h4>
                            <span><i class="fa fa-user"></i> Kevin McCormick</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-class-item set-bg classes_img_3" data-setbg="img/classes/classes-2.jpg">
                        <div className="si-text">
                            <h4>Running</h4>
                            <span><i class="fa fa-user"></i> Randy Rivera</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-class-item set-bg classes_img_4" data-setbg="img/classes/classes-5.jpg">
                        <div className="si-text">
                            <h4>Dance</h4>
                            <span><i class="fa fa-user"></i> Russell Lane</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-class-item set-bg classes_img_5" data-setbg="img/classes/classes-3.jpg">
                        <div className="si-text">
                            <h4>Personal Training</h4>
                            <span><i className="fa fa-user"></i> Cole Robertson</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-class-item set-bg classes_img_6" data-setbg="img/classes/classes-6.jpg">
                        <div className="si-text">
                            <h4>Weight Loss</h4>
                            <span><i className="fa fa-user"></i> Ryan Scott</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-class-item set-bg classes_img_7" data-setbg="img/classes/classes-7.jpg">
                        <div className="si-text">
                            <h4>Box</h4>
                            <span><i className="fa fa-user"></i> Chester Bowen</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-class-item set-bg classes_img_8" >
                        <div className="si-text">
                            <h4>Cardio</h4>
                            <span><i className="fa fa-user"></i> Jorge Fernandez</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-class-item set-bg classes_img_9" >
                        <div className="si-text">
                            <h4>Crossfit</h4>
                            <span><i className="fa fa-user"></i> Chester Bowen</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Classes Section End -->

    <!-- Classes Timetable Section Begin --> */}
    <section className="classes-timetable spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Class Timetable</h2>
                    </div>
                    <div className="nav-controls">
                        <ul>
                            <li className="active" data-tsfilter="all">All Class</li>
                            <li data-tsfilter="gym">Gym</li>
                            <li data-tsfilter="crossfit">Crossfit</li>
                            <li data-tsfilter="cardio">Cardio</li>
                            <li data-tsfilter="body">Body</li>
                            <li data-tsfilter="yoga">Yoga</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="schedule-table">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="workout-time">10.00</td>
                                    <td className="hover-bg ts-item" data-tsmeta="gym">
                                        <h6>Gym</h6>
                                        <span>10.00 - 11.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="yoga">
                                        <h6>Yoga</h6>
                                        <span>10.00 - 12.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="body">
                                        <h6>Body</h6>
                                        <span>10.00 - 12.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="cardio">
                                        <h6>Cardio</h6>
                                        <span>10.00 - 11.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="workout-time">14.00</td>
                                    <td></td>
                                    <td className="hover-bg ts-item">
                                        <h6>Running</h6>
                                        <span>14.00 - 16.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item">
                                        <h6>Box</h6>
                                        <span>14.00 - 15.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="gym">
                                        <h6>Gym</h6>
                                        <span>14.00 - 16.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="workout-time">16.00</td>
                                    <td className="hover-bg ts-item" data-tsmeta="cardio">
                                        <h6>Cardio</h6>
                                        <span>16.00 - 18.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="gym">
                                        <h6>Gym</h6>
                                        <span>16.00 - 19.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="yoga">
                                        <h6>Yoga</h6>
                                        <span>16.00 - 18.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="gym">
                                        <h6>Gym</h6>
                                        <span>16.00 - 20.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="workout-time">18.00</td>
                                    <td className="hover-bg ts-item">
                                        <h6>Box</h6>
                                        <span>18.00 - 22.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td className="hover-bg ts-item" data-tsmeta="body">
                                        <h6>Body</h6>
                                        <span>18.00 - 20.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="crossfit">
                                        <h6>Crossfit</h6>
                                        <span>18.00 - 21.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="cardio">
                                        <h6>Cardio</h6>
                                        <span>18.00 - 22.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="workout-time">20.00</td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="gym">
                                        <h6>Gym</h6>
                                        <span>20.00 - 12.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td className="hover-bg ts-item" data-tsmeta="body">
                                        <h6>Body</h6>
                                        <span>20.00 - 21.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="cardio">
                                        <h6>Cardio</h6>
                                        <span>20.00 - 22.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                    <td></td>
                                    <td className="hover-bg ts-item" data-tsmeta="crossfit">
                                        <h6>Crossfit</h6>
                                        <span>20.00 - 21.00</span>
                                        <div className="trainer-name">
                                            John Smith
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Trainer Table Schedule Section End -->

    <!-- Footer Banner Section Begin --> */}
    <section className="footer-banner">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="footer-banner-item set-bg footbann_img_1" >
                        <span>New member</span>
                        <h2>7 days for free</h2>
                        <p>Complete the training sessions with us, surely you will be happy</p>
                        <Link to="#" class="primary-btn">Get Started</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer-banner-item set-bg footbann_img_2" >
                        <span>contact us</span>
                        <h2>09 746 204</h2>
                        <p>If you trust us on your journey they dark sex does not disappoint you!</p>
                        <Link to="#" class="primary-btn">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Footer Banner Section End --> */}
    
    
    </>
  )
}

export default Classes