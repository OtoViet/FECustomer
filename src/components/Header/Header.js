import {useNavigate} from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/');
  }
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div className="logo">
              <span onClick={handleClick} style={{cursor: 'pointer'}}>
                <h1>Oto<span>Viet</span></h1>
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-7 d-none d-lg-block">
            <div className="row">
              <div className="col-4">
                <div className="top-bar-item">
                  <div className="top-bar-icon">
                    <i className="far fa-clock"></i>
                  </div>
                  <div className="top-bar-text">
                    <h3>Giờ mở cửa</h3>
                    <p>T2 - CN, 7:30:SA - 8:00:Tối</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="top-bar-item">
                  <div className="top-bar-icon">
                    <i className="fa fa-phone-alt"></i>
                  </div>
                  <div className="top-bar-text">
                    <h3>Liên hệ qua SĐT</h3>
                    <p>+012 345 6789</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="top-bar-item">
                  <div className="top-bar-icon">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="top-bar-text">
                    <h3>Liên hệ qua email</h3>
                    <p>otoviet@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;