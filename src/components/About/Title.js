import {Link} from 'react-router-dom';
import {currentHost} from '../../utils/path'
function AboutTitle(){
    const host = currentHost()
    console.log(host)
    return(
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Về chúng tôi</h2>
                    </div>
                    <div className="col-12">
                        <Link to={`${host}/`}>Trang chủ</Link>
                        <Link to={`${host}/about`}>Về chúng tôi</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutTitle;