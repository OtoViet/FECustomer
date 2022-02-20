import NotFoundImage from '../../assets/images/404.jpg';
function NotFoundPage(){
    return(
        <div className="not-found-page d-flex justify-content-center">
            <img src={NotFoundImage} style={{width:'50%'}} alt="anh khong tim thay trang"/>
        </div>
    )
}
export default NotFoundPage;