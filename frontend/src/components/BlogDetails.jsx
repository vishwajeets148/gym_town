import React from 'react'
import { Link } from 'react-router-dom'

function BlogDetails() {
  return (
    <>
     {/* <!-- Blog Details Hero Section Begin --> */}
    <section className="blog-details-hero set-bg breadcrumb_img" >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="bd-hero-text">
                        <span>CAMERA</span>
                        <h2>10 States At Risk of Rural Hospital<br /> Closures</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Details Hero Section End --> */}


    {/* <!-- Blog Details Section Begin --> */}
    <section className="blog-details spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="bd-text">
                        <div className="bd-title">
                            <p>Your clients would like to see optimal results for minimal work. For this reason, it can
                                be difficult to convince them that a website redesign enhances SEO strategies. However,
                                if you try to redesign a site without taking SEO into account, you are going to face
                                bigger problems down the road.</p>
                            <p>Start off by explaining to clients what will happen if you ignore SEO in your redesign.
                                Explain to them how a website redesign enhances SEO strategies across the board. A
                                redesign is essential and should be part of your client’s budget. There are a couple of
                                risks to point out.</p>
                        </div>
                        <div className="bd-pic">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="img/blog/bd-1.jpg" alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img src="img/blog/bd-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="bd-more-text">
                            <div className="bm-item">
                                <h4>1. You May Have to Redo All Your Content</h4>
                                <p>It is impossible to create effective content without taking SEO into consideration.
                                    If you create content without thinking about SEO, you may need to go back and redo
                                    all the new content you made for your website when you start your SEO strategy.
                                    There are a few reasons for this.</p>
                                <p>First, you’ll be unsure as to what keyword terms you want to rank for. If you write
                                    content that doesn’t include appropriate keywords, it will be difficult to go back
                                    and include the terms naturally. Second, you may be unclear as to who makes up your
                                    target audience. The content you write for the wrong audience is useless and will
                                    need replacing.</p>
                            </div>
                            <div className="bm-item">
                                <h4>2. You May Have Technical Mistakes</h4>
                                <p>Technical mistakes may mean you require a site migration in the near future. This is
                                    a huge waste of time. Taking the technical side of SEO into account now will allow
                                    you to decide on</p>
                            </div>
                        </div>
                        <div className="bd-quote">
                            <samp>"</samp>
                            <p>“We need to stop interrupting what people are interested in and be what people are
                                interested in.”</p>
                            <div className="quote-author">
                                <h5>Steven Jobs</h5>
                                <span>CEO-DeerCreative</span>
                            </div>
                        </div>
                        <div className="bd-last-para">
                            <p>All the above assumes that a client is willing to create a website in the first place.
                                Some clients may believe that they can forgo a website entirely. However, without a
                                website, it is impossible for a business to grow. You need to explain why having an
                                SEO-optimized website is necessary for being found online. Of course, businesses can
                                find customers using other means, such as through social media, but these methods are
                                slower. Plus, users will still expect the business to have a website — to obtain more
                                information about products, services, and the brand as a whole.</p>
                        </div>
                        <div className="tag-share">
                            <div className="tags">
                                <Link to="#">Camera</Link>
                                <Link to="#">Photography</Link>
                                <Link to="#">Tips</Link>
                            </div>
                            <div className="social-share">
                                <span>Share:</span>
                                <Link to="#"><i className="fa fa-facebook"></i></Link>
                                <Link to="#"><i className="fa fa-twitter"></i></Link>
                                <Link to="#"><i className="fa fa-google-plus"></i></Link>
                                <Link to="#"><i className="fa fa-instagram"></i></Link>
                                <Link to="#"><i className="fa fa-youtube-play"></i></Link>
                            </div>
                        </div>
                        <div className="blog-author">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="ba-pic">
                                        <img src="img/blog/blog-posted.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="ba-text">
                                        <h5>Shane Lynch</h5>
                                        <p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse cillum bore et dolore magna aliqua. </p>
                                        <div className="bt-social">
                                            <Link to="#"><i className="fa fa-facebook"></i></Link>
                                            <Link to="#"><i className="fa fa-twitter"></i></Link>
                                            <Link to="#"><i className="fa fa-google-plus"></i></Link>
                                            <Link to="#"><i className="fa fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leave-comment">
                            <h3>Leave A Comment</h3>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Messages"></textarea>
                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Details Section End -->

    <!-- Latest Blog Section Begin --> */}
    <section className="latest-blog-section recommend spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h3>Recommended</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-1.jpg" alt=""/>
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Gym</Link>
                        </div>
                        <h4><Link to="#">10 States At Risk of Rural Hospital Closures</Link></h4>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-2.jpg" alt="" />
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Sport</Link>
                        </div>
                        <h4><Link to="#">Diver who helped save Thai soccer team</Link></h4>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-blog-item">
                        <img src="img/blog/blog-3.jpg" alt="" />
                        <div className="blog-widget">
                            <div className="bw-date">February 17, 2019</div>
                            <Link to="#" className="tag">#Body</Link>
                        </div>
                        <h4><Link to="#">Man gets life in prison for stabbing</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Latest Blog Section End --> */}
    
    
    
    </>
  )
}

export default BlogDetails