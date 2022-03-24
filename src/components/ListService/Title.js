import {Link} from 'react-router-dom';
function ListServiceTitle() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Danh sách dịch vụ</h2>
                        </div>
                        <div className="col-12">
                            <Link to="/">Home</Link>
                            <Link to="/listService">Danh sách dịch vụ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ListServiceTitle;