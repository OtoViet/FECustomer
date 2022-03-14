import carousel_1 from '../../assets/images/carousel-1.jpg';
import carousel_2 from '../../assets/images/carousel-2.jpg';
import carousel_3 from '../../assets/images/carousel-3.jpg';
function Slider() {
    return (
        <div className="carousel">
            <div className="container-fluid">
                <div className="owl-carousel">
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <img src={carousel_1} alt="carousel" />
                        </div>
                        <div className="carousel-text">
                            <h3>Dịch vụ chăm sóc xe</h3>
                            <h1>Giữ cho xe luôn mới</h1>
                            <p>
                            Phương pháp rửa xe tại AutoWash cam kết chất lượng, loại bỏ bụi bẩn, sình lầy bám trên xe và gầm xe nhưng đảm bảo an toàn 100% cho lớp sơn xe
                            </p>
                            <a className="btn btn-custom" href="/">Tìm hiểu thêm</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <img src={carousel_2} alt="carousel2" />
                        </div>
                        <div className="carousel-text">
                            <h3>Dịch vụ chăm sóc xe</h3>
                            <h1>Cam kết chất lượng phục vụ</h1>
                            <p>
                                Đảm bảo khoang máy xe hơi bạn sẽ như xe mới sau quá trình dọn khoang máy tại Ô Tô Việt
                            </p>
                            <a className="btn btn-custom" href="/">Tìm hiểu thêm</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <img src={carousel_3} alt="carousel_3" />
                        </div>
                        <div className="carousel-text">
                            <h3>Dịch vụ chăm sóc xe</h3>
                            <h1>Vệ sinh cả bên trong và bên ngoài</h1>
                            <p>
                            Sự kết hợp thần kỳ của chúng tôi về việc sử dụng sức mạnh của công nghệ hơi nước nóng, vào việc chăm sóc xe 
                            mang lại vẻ ngoài và nội thất sạch sẽ
                            </p>
                            <a className="btn btn-custom" href="/">Tìm hiểu thêm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Slider;