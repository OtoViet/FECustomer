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
                            <h3>Washing & Detailing</h3>
                            <h1>Keep your Car Newer</h1>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac
                            </p>
                            <a className="btn btn-custom" href="/">Explore More</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <img src={carousel_2} alt="carousel2" />
                        </div>
                        <div className="carousel-text">
                            <h3>Washing & Detailing</h3>
                            <h1>Quality service for you</h1>
                            <p>
                                Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales
                            </p>
                            <a className="btn btn-custom" href="/">Explore More</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <img src={carousel_3} alt="carousel_3" />
                        </div>
                        <div className="carousel-text">
                            <h3>Washing & Detailing</h3>
                            <h1>Exterior & Interior Washing</h1>
                            <p>
                                Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam
                            </p>
                            <a className="btn btn-custom" href="/">Explore More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Slider;