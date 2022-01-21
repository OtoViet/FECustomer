function Pagination() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Pagination;