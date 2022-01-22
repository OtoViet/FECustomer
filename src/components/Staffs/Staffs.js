import team_1 from '../../assets/images/team-1.jpg';
import team_2 from '../../assets/images/team-2.jpg';
import team_3 from '../../assets/images/team-3.jpg';
import team_4 from '../../assets/images/team-4.jpg';
function Staffs() {
    return (
        <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Đội ngũ nhân viên của chúng tôi</p>
                    <h2>Kĩ sư và kĩ thuật viên</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team_1} alt="team1" />
                            </div>
                            <div className="team-text">
                                <h2>Donald John</h2>
                                <p>Kĩ sư</p>
                                <div className="team-social">
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team_2} alt="team_2" />
                            </div>
                            <div className="team-text">
                                <h2>Adam Phillips</h2>
                                <p>Kĩ sư</p>
                                <div className="team-social">
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team_3} alt="team_3" />
                            </div>
                            <div className="team-text">
                                <h2>Thomas Olsen</h2>
                                <p>Kĩ thuật viên</p>
                                <div className="team-social">
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team_4} alt="team_4" />
                            </div>
                            <div className="team-text">
                                <h2>James Alien</h2>
                                <p>Kĩ thuật viên</p>
                                <div className="team-social">
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Staffs;