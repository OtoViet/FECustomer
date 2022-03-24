import {Link} from 'react-router-dom';
function CarePointsTitle() {
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Danh sách cửa hàng</h2>
                    </div>
                    <div className="col-12">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/storeList">Vị trí</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CarePointsTitle;