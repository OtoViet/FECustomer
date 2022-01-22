function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Liên hệ</h2>
                            <p><i className="fa fa-map-marker-alt"></i>123 Trần Hưng Đạo, NK, CT</p>
                            <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope"></i>otoviet@gmail.com</p>
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
                            <a href="/">Về chúng tôi</a>
                            <a href="/">Liên hệ với chúng tôi</a>
                            <a href="/">Dịch vụ của chúng tôi</a>
                            <a href="/">Danh sách cửa hàng</a>
                            <a href="/">Giá dịch vụ</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Thông tin hữu ích</h2>
                            <a href="/term">Điều khoản sử dụng</a>
                            <a href="/privacy">Chính sách riêng tư</a>
                            <a href="/cookies">Cookies</a>
                            <a href="/help">Giúp đỡ</a>
                            <a href="/fquas">Câu hỏi thường gặp</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Nhận tin tức mới</h2>
                            <form>
                                <input className="form-control" placeholder="Tên đầy đủ của bạn" />
                                <input className="form-control" placeholder="Địa chỉ email" />
                                <button className="btn btn-custom">Đăng kí nhận</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <p>&copy; <a href="/">Otoviet</a>, All Right Reserved. Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
        </div>
    );
}
export default Footer;