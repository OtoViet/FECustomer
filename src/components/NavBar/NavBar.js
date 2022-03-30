import { Routes, Route, NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import ReturnUrlPage from '../../pages/Payment/ReturnUrl';
import InfoCustomerPage from '../../pages/InfoCustomer/InfoCustomer';
import StoreListPage from '../../pages/StoreList/StoreList';
import ScheduleList from '../../pages/ScheduleList/ScheduleList';
import TimeLinePage from "../../pages/TimeLine/TimeLine";
import CheckoutPage from '../../pages/Checkout/Checkout';
import ContactAndPreviewOrderPage from '../../pages/Booking/ContactAndPreviewOrder'
import AboutPage from '../../pages/About/About';
import ServiceCarePage from '../../pages/ServiceCare/ServiceCare';
import ContactPage from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import ListService from '../../pages/ListService/ListService';
import Booking from '../../pages/Booking/Booking';
import Detail from '../../pages/Detail/Detail';
import Team from '../../pages/Staffs/Staffs';
import LoginPage from '../../pages/Login/Login';
import SignUpPage from '../../pages/SignUp/SignUp';
import ForgotPasswordPage from '../../pages/ForgotPassword/ForgotPassword';
import ResetPasswordPage from '../../pages/ResetPassword/ResetPassword';
import ChangePasswordPage from '../../pages/ChangePassword/ChangePassword';
import NotFoundPage from '../../pages/NotFound/NotFound';
import FormApi from '../../api/formApi';
import AccountMenu from '../../components/Menu/Account';
import DropdownService from '../Menu/DropdownService';
function NavBar() {
  let navigate = useNavigate();
  const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  useLayoutEffect(() => {
    FormApi.token({ refreshToken: localStorage.getItem('refreshToken') })
    .then((res) => {
      if (res) {
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      navigate('/login');
    });
  }, []);
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
              localStorage.setItem('refreshToken', res.refreshToken);
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
                  localStorage.removeItem('token');
                  localStorage.removeItem('refreshToken');
                  navigate('/login');
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
                <NavLink to="/" className="nav-item nav-link nav-item-navlink">Trang chủ</NavLink>
                <NavLink to="/about" className="nav-item nav-link nav-item-navlink">Về chúng tôi</NavLink>
                <DropdownService />
                <NavLink to="/storeList" className="nav-item nav-link nav-item-navlink">Danh sách cửa hàng</NavLink>
                <NavLink to="/contact" className="nav-item nav-link nav-item-navlink">Liên hệ</NavLink>
                <NavLink to="/booking" className="nav-item nav-link nav-item-navlink">Đặt lịch ngay</NavLink>
                {
                  localStorage.getItem('token') ?
                    <AccountMenu handleLogout={handleLogout} /> :
                    <NavLink to="/login" className="nav-item nav-link">Đăng nhập</NavLink>
                }
              </div>
              <div className="ml-auto">
                <Link className="btn btn-custom" to="/scheduleList">Tra cứu lịch hẹn</Link>
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
          <Route path="/storeList" element={<StoreListPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/listService" element={<ListService />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contactAndPreview" element={<ContactAndPreviewOrderPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/passwordReset" element={<ForgotPasswordPage />} />
          <Route path="/passwordReset/:id" element={<ResetPasswordPage />} />
          <Route path="/changePassword" element={<ChangePasswordPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/appointmentSchedule/:id" element={<TimeLinePage />} />
          <Route path="/scheduleList" element={<ScheduleList />} />
          <Route path="/infoCustomer" element={<InfoCustomerPage />} />
          <Route path="/vnpReturnUrl" element={<ReturnUrlPage />} />
        </Routes>
      </ScrollToTop>

    </>
  );
}

export default NavBar;