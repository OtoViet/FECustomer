import {Link} from 'react-router-dom';
function ServiceCareTitle() {
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Dịch vụ</h2>
                    </div>
                    <div className="col-12">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/service">Dịch vụ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ServiceCareTitle;