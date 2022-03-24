import {Link} from 'react-router-dom';
function ServiceCareTitle() {
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Danh sách lịch hẹn</h2>
                    </div>
                    <div className="col-12">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/scheduleList">Danh sách lịch hẹn</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ServiceCareTitle;