import {Link} from 'react-router-dom';
function AboutTitle(){
    return(
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Về chúng tôi</h2>
                    </div>
                    <div className="col-12">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/about">Về chúng tôi</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutTitle;