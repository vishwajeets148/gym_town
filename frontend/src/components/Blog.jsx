import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
{/* <!-- Breadcrumb Section Begin --> */}
    <section className="breadcrumb-section set-bg breadcrumb_img" >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text">
                        <h2>Blog</h2>
                        <div className="breadcrumb-option">
                            <Link to="/"><i className="fa fa-home"></i> Home</Link>
                            <span>Blog</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End -->

    <!-- Blog Section Begin --> */}
    <section className="blog-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-1.jpg" alt="" />
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Gym</Link>
                        </div>
                        <h4><Link to="/blogdetail">10 States At Risk of Rural Hospital Closures</Link></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-2.jpg" alt="" />
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Sport</Link>
                        </div>
                        <h4><Link to="/blogdetail">Diver who helped save Thai soccer team</Link></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-3.jpg" alt="" />
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Body</Link>
                        </div>
                        <h4><Link to="/blogdetail">Man gets life in prison for stabbing</Link></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-4.jpg" alt="" />
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Running</Link>
                        </div>
                        <h4><Link to="/blogdetail">Russia's first male synchronised swimmer</Link></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-5.jpg" alt="" />
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Gym</Link>
                        </div>
                        <h4><Link to="/blogDetails">NYC measles vaccination order prevails in court</Link></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-6.jpg" alt="" />
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Sport</Link>
                        </div>
                        <h4><Link to="/blogDetails">The Week in Pictures: April 11 - 18</Link></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-7.jpg" alt="" />
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Gym</Link>
                        </div>
                        <h4><Link to="/blogDetails">Man who pretended to be faces new charges</Link></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-8.jpg" alt="" />
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Body</Link>
                        </div>
                        <h4><Link to="/blogDetails">10 States At Risk of Rural Hospital Closures</Link></h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-9.jpg" alt="" />
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Gym</Link>
                        </div>
                        <h4><Link to="/blogDetails">Lenny Kravitz gives Arch Digest a look inside</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}



    </>
  )
}

export default Blog