import testimonial_1 from '../../assets/images/testimonial-1.jpg';
import testimonial_2 from '../../assets/images/testimonial-2.jpg';
import testimonial_3 from '../../assets/images/testimonial-3.jpg';
import testimonial_4 from '../../assets/images/testimonial-4.jpg';
function ClientsSay() {
    return (
        <div className="testimonial">
            <div className="container">
                <div className="section-header text-center">
                    <p>Lời khen ngợi</p>
                    <h2>Khách hàng đã nói gì?</h2>
                </div>
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <img src={testimonial_1} style={{ width: 'auto' }} alt="testimonial_1" />
                        <div className="testimonial-text">
                            <h3>Nhật Tân</h3>
                            <h4>Profession</h4>
                            <p>
                                Chất lượng thật tuyệt vời! Tôi đánh giá cao cách phục vụ của nhân viên
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={testimonial_2} style={{ width: 'auto' }} alt="testimonial_2" />
                        <div className="testimonial-text">
                            <h3>Ngọc Thư</h3>
                            <h4>Profession</h4>
                            <p>
                                Nhân viên thân thiện và nhiệt tình. Giá cả tương đối ổn so với mặt bằng chung
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={testimonial_3} style={{ width: 'auto' }} alt="testimonial_3" />
                        <div className="testimonial-text">
                            <h3>Ngọc Hải</h3>
                            <h4>Profession</h4>
                            <p>
                                Tôi đã sử dụng dịch vụ ở nhiều nơi, tuy nhiên đây là nơi tôi cảm thấy tốt nhất!
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={testimonial_4} style={{ width: 'auto' }} alt="testimonial_4" />
                        <div className="testimonial-text">
                            <h3>Trung Nghĩa</h3>
                            <h4>Profession</h4>
                            <p>
                                Cửa hàng lớn và sạch đẹp, nhân viên thân thiện và giá cả phải chăng! Nên thử 1 lânS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ClientsSay;