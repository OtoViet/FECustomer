function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Get In Touch</h2>
                            <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope"></i>info@example.com</p>
                            <div className="footer-social">
                                <a className="btn" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn" href="/"><i className="fab fa-youtube"></i></a>
                                <a className="btn" href="/"><i className="fab fa-instagram"></i></a>
                                <a className="btn" href="/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/">About Us</a>
                            <a href="/">Contact Us</a>
                            <a href="/">Our Service</a>
                            <a href="/">Service Points</a>
                            <a href="/">Pricing Plan</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Useful Links</h2>
                            <a href="/term">Terms of use</a>
                            <a href="/privacy">Privacy policy</a>
                            <a href="/cookies">Cookies</a>
                            <a href="/help">Help</a>
                            <a href="/fquas">FQAs</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form>
                                <input className="form-control" placeholder="Full Name" />
                                <input className="form-control" placeholder="Email" />
                                <button className="btn btn-custom">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <p>&copy; <a href="/">Your Site Name</a>, All Right Reserved. Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
        </div>
    );
}
export default Footer;