import {Link} from 'react-router-dom';
import { currentHost } from '../../utils/path';

function StaffsTitle() {
    const host = currentHost();
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Đội ngũ nhân viên</h2>
                        </div>
                        <div className="col-12">
                            <Link to={`${host}/`}>Trang chủ</Link>
                            <Link to={`${host}/team`}>Đội ngũ nhân viên</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default StaffsTitle;