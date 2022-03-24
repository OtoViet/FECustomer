import about from '../../assets/images/about.jpg';
function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={about} alt="about" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-header text-left">
                            <p>Về chúng tôi</p>
                            <h2>Chăm sóc & làm sạch xe</h2>
                        </div>
                        <div className="about-content">
                            <p>
                            OtoViet là chuỗi rửa xe và chăm sóc xe thân thiện với môi trường đầu tiên tại Việt Nam. 
                            Chúng tôi luôn đặt sự tin cậy của khách hàng lên hàng đầu. 
                            Hàng ngàn khách hàng hài lòng tại Cần Thơ bởi hệ thống máy rửa xe tự động tiện lợi cùng với các dịch vụ chăm sóc xe 
                            như đánh bóng xe, vệ sinh khoang máy, nội thất chuyên nghiệp. 
                            Ngoài việc làm toả sáng cho chiếc xe của bạn chúng tôi còn giúp cho khách hàng tiết kiệm thời gian tối đa. 
                            Đây chính xác là những gì OtoViet đang hướng đến để làm sạch, chăm sóc,
                            bảo vệ xe ô tô của bạn với chất lượng hàng đầu cùng với giá thành cạnh tranh.
                            </p>
                            <ul>
                                <li><i className="far fa-check-circle"></i>Hệ thống đặt hẹn tiện lợi nhất Việt Nam</li>
                                <li><i className="far fa-check-circle"></i>Cam kết làm khách hàng hài với mỗi dịch vụ của OtoViet</li>
                                <li><i className="far fa-check-circle"></i>Chúng tôi sở hữu đội ngũ nhân viên thân thiện và chuyên nghiệp</li>
                                <li><i className="far fa-check-circle"></i>Dịch vụ chăm sóc xe đảm bảo chất lượng với giá thành cạnh tranh</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;