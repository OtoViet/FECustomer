import {Link} from 'react-router-dom';
import { currentHost } from '../../utils/path';

function ContactTitle() {
    const host = currentHost();
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Liên hệ với chúng tôi</h2>
                    </div>
                    <div className="col-12">
                        <Link to={`${host}/`}>Trang chủ</Link>
                        <Link to={`${host}/contact`}>Liên hệ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactTitle;