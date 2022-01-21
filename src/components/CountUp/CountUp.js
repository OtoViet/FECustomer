function CountUp() {
    return (
        <div className="facts" data-parallax="scroll" data-image-src="img/facts.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="facts-item">
                            <i className="fa fa-map-marker-alt"></i>
                            <div className="facts-text">
                                <h3 data-toggle="counter-up">25</h3>
                                <p>Service Points</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="facts-item">
                            <i className="fa fa-user"></i>
                            <div className="facts-text">
                                <h3 data-toggle="counter-up">350</h3>
                                <p>Engineers & Workers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="facts-item">
                            <i className="fa fa-users"></i>
                            <div className="facts-text">
                                <h3 data-toggle="counter-up">1500</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="facts-item">
                            <i className="fa fa-check"></i>
                            <div className="facts-text">
                                <h3 data-toggle="counter-up">5000</h3>
                                <p>Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CountUp;