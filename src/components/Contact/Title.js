import {Link} from 'react-router-dom';
function ContactTitle() {
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Liên hệ với chúng tôi</h2>
                    </div>
                    <div className="col-12">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/contact">Liên hệ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactTitle;