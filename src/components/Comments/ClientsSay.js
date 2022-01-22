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
                            <h3>Khách hàng 1</h3>
                            <h4>Profession</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={testimonial_2} style={{ width: 'auto' }} alt="testimonial_2" />
                        <div className="testimonial-text">
                            <h3>Khách hàng 2</h3>
                            <h4>Profession</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={testimonial_3} style={{ width: 'auto' }} alt="testimonial_3" />
                        <div className="testimonial-text">
                            <h3>Khách hàng 3</h3>
                            <h4>Profession</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <img src={testimonial_4} style={{ width: 'auto' }} alt="testimonial_4" />
                        <div className="testimonial-text">
                            <h3>Khách hàng 4</h3>
                            <h4>Profession</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ClientsSay;