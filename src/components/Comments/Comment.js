function Comment() {
    return (
        <>
            <div className="single-comment">
                <h2>3 Comments</h2>
                <ul className="comment-list">
                    <li className="comment-item">
                        <div className="comment-body">
                            <div className="comment-img">
                                <img src="img/user.jpg" />
                            </div>
                            <div className="comment-text">
                                <h3><a href="">Josh Dunn</a></h3>
                                <span>01 Jan 2045 at 12:00pm</span>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                </p>
                                <a className="btn" href="">Reply</a>
                            </div>
                        </div>
                    </li>
                    <li className="comment-item">
                        <div className="comment-body">
                            <div className="comment-img">
                                <img src="img/user.jpg" />
                            </div>
                            <div className="comment-text">
                                <h3><a href="">Josh Dunn</a></h3>
                                <p><span>01 Jan 2045 at 12:00pm</span></p>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                </p>
                                <a className="btn" href="">Reply</a>
                            </div>
                        </div>
                        <ul className="comment-child">
                            <li className="comment-item">
                                <div className="comment-body">
                                    <div className="comment-img">
                                        <img src="img/user.jpg" />
                                    </div>
                                    <div className="comment-text">
                                        <h3><a href="">Josh Dunn</a></h3>
                                        <p><span>01 Jan 2045 at 12:00pm</span></p>
                                        <p>
                                            Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                        </p>
                                        <a className="btn" href="">Reply</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="comment-form">
                <h2>Leave a comment</h2>
                <form>
                    <div className="form-group">
                        <label for="name">Name *</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email *</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label for="website">Website</label>
                        <input type="url" className="form-control" id="website" />
                    </div>

                    <div className="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Post Comment" className="btn btn-custom" />
                    </div>
                </form>
            </div>
        </>
    );
}
export default Comment;