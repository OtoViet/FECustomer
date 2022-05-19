import React from 'react';
function Contact() {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Liên hệ với chúng tôi</p>
                        <h2>Nếu bạn có câu hỏi</h2>
                    </div>
                    <div className="d-md-flex justify-content-around">
                        <div className="contact-info mr-2">
                            <h2>Thông tin liên hệ nhanh</h2>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="far fa-clock"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Giờ mở cửa</h3>
                                    <p>T2 - CN, 7:30:SA - 8:00:Tối</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fa fa-phone-alt"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Liên hệ qua điện thoại</h3>
                                    <p>0123456789</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Email</h3>
                                    <p>otoviet@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info">
                            <h2>Liên hệ qua chat (icon chat ở góc dưới trái)</h2>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="far fa-clock"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Giờ hỗ trợ qua chat</h3>
                                    <p>T2 - CN, 8:30:SA - 10:00:Tối</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fa fa-phone-alt"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Điện thoại CSKH</h3>
                                    <p>0123456781</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Email</h3>
                                    <p>cskh.otoviet@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;