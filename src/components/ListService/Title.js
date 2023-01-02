import {Link} from 'react-router-dom';
import { currentHost } from '../../utils/path';

function ListServiceTitle() {
    const host = currentHost();
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Danh sách dịch vụ</h2>
                        </div>
                        <div className="col-12">
                            <Link to={`${host}/`}>Home</Link>
                            <Link to={`${host}/listService`}>Danh sách dịch vụ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ListServiceTitle;