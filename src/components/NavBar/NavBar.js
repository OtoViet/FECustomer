import { Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import AboutPage from '../../pages/About/About';
import ServiceCarePage from '../../pages/ServiceCare/ServiceCare';
import ContactPage from '../../pages/Contact/Contact';
import PricesPage from '../../pages/Prices/Price'
import CarePoints from '../../pages/CarePoints/CarePoints';
import Home from '../../pages/Home/Home';
import Blog from '../../pages/Blog/Blog';
import Booking from '../../pages/Booking/Booking';
import Detail from '../../pages/Detail/Detail';
import Team from '../../pages/Staffs/Staffs';
import LoginPage from '../../pages/Login/Login';
import SignUpPage from '../../pages/SignUp/SignUp';
import ForgotPasswordPage from '../../pages/ForgotPassword/ForgotPassword';
import ResetPasswordPage from '../../pages/ResetPassword/ResetPassword';
import NotFoundPage from '../../pages/NotFound/NotFound';
import FormApi from '../../api/formApi';
import AccountMenu from '../../components/Menu/Account';
import Dropdown from '../../components/Menu/Dropdown';


function NavBar() {
  let navigate = useNavigate();
  const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  }
  const handleLogout = () => {
    FormApi.logout()
      .then((res) => {
        if (res) {
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          navigate('/login');
        }
      })
      .catch((err) => {
        FormApi.token({ refreshToken: localStorage.getItem('refreshToken') })
          .then((res) => {
            if (res) {
              localStorage.setItem('token', res.accessToken);
              localStorage.setItem('refreshToken',res.refreshToken);
              FormApi.logout()
              .then((res) => {
                if (res) {
                  localStorage.removeItem('token');
                  localStorage.removeItem('refreshToken');
                  navigate('/login');
                }
              })
              .catch((err) => {
                console.log('co loi xay ra khi goi logout lan 2');
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };
  return (
    <>
      <div className="nav-bar">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <NavLink to="/" className="navbar-brand">MENU</NavLink>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto">
                <NavLink to="/" className="nav-item nav-link">Trang chủ</NavLink>
                <NavLink to="/about" className="nav-item nav-link">Về chúng tôi</NavLink>
                <NavLink to="/service" className="nav-item nav-link">Dịch vụ</NavLink>
                <NavLink to="/price" className="nav-item nav-link">Bảng giá</NavLink>
                <NavLink to="/location" className="nav-item nav-link">Danh sách cửa hàng</NavLink>
                <NavLink to="/contact" className="nav-item nav-link">Liên hệ</NavLink>
                <Dropdown />
                {
                  localStorage.getItem('token') ?
                    <AccountMenu handleLogout={handleLogout} /> :
                    <NavLink to="/login" className="nav-item nav-link">Đăng nhập</NavLink>
                }
              </div>
              <div className="ml-auto">
                <a className="btn btn-custom" href="/">Tra cứu lịch hẹn</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServiceCarePage />} />
          <Route path="/price" element={<PricesPage />} />
          <Route path="/location" element={<CarePoints />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/passwordReset" element={<ForgotPasswordPage />} />
          <Route path="/passwordReset/:id" element={<ResetPasswordPage />} />
        </Routes>
      </ScrollToTop>

    </>
  );
}

export default NavBar;