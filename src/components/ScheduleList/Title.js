import {Link} from 'react-router-dom';
import { currentHost } from '../../utils/path';
function ServiceCareTitle() {
    const host = currentHost();
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Danh sách lịch hẹn</h2>
                    </div>
                    <div className="col-12">
                        <Link to={`${host}/`}>Trang chủ</Link>
                        <Link to={`${host}/scheduleList`}>Danh sách lịch hẹn</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ServiceCareTitle;