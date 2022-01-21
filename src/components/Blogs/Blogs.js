import blog_1 from '../../assets/images/blog-1.jpg';
import blog_2 from '../../assets/images/blog-2.jpg';
import blog_3 from '../../assets/images/blog-3.jpg';
function Blogs({images}) {

    return (
        <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Blog</p>
                    <h2>Latest news & articles</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={blog_1} alt="blog_1" />
                                <div className="meta-date">
                                    <span>01</span>
                                    <strong>Jan</strong>
                                    <span>2045</span>
                                </div>
                            </div>
                            <div className="blog-text">
                                <h3><a href="/">Lorem ipsum dolor sit amet</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="/">Admin</a></p>
                                <p><i className="fa fa-folder"></i><a href="/">Web Design</a></p>
                                <p><i className="fa fa-comments"></i><a href="/">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={blog_2} alt="blog_2" />
                                <div className="meta-date">
                                    <span>01</span>
                                    <strong>Jan</strong>
                                    <span>2045</span>
                                </div>
                            </div>
                            <div className="blog-text">
                                <h3><a href="/">Lorem ipsum dolor sit amet</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="/">Admin</a></p>
                                <p><i className="fa fa-folder"></i><a href="/">Web Design</a></p>
                                <p><i className="fa fa-comments"></i><a href="/">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={blog_3} alt="blog_3" />
                                <div className="meta-date">
                                    <span>01</span>
                                    <strong>Jan</strong>
                                    <span>2045</span>
                                </div>
                            </div>
                            <div className="blog-text">
                                <h3><a href="/">Lorem ipsum dolor sit amet</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="/">Admin</a></p>
                                <p><i className="fa fa-folder"></i><a href="/">Web Design</a></p>
                                <p><i className="fa fa-comments"></i><a href="/">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Blogs;