import {Link} from 'react-router-dom';
function DetailTitle() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Trang chi tiết</h2>
                        </div>
                        <div className="col-12">
                            <Link to="/">Trang chủ</Link>
                            <Link to="detail">Chi tiết</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DetailTitle;