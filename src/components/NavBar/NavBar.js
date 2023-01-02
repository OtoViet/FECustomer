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
import { currentHost } from '../../utils/path';
function NavBar() {
  const host = currentHost();
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
        navigate(`${host}/login`);
      });
  }, []);
  const handleLogout = () => {
    FormApi.logout()
      .then((res) => {
        if (res) {
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          navigate(`${host}/login`);
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
                    navigate(`${host}/login`);
                  }
                })
                .catch((err) => {
                  console.log('co loi xay ra khi goi logout lan 2');
                  localStorage.removeItem('token');
                  localStorage.removeItem('refreshToken');
                  navigate(`${host}/login`);
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
            <NavLink to={`${host}/`} data-toggle="collapse" data-target=".navbar-collapse.show" className="navbar-brand">Danh Mục</NavLink>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto">
                <NavLink to={`${host}/`} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-item nav-link nav-item-navlink">Trang chủ</NavLink>
                <NavLink to={`${host}/about`} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-item nav-link nav-item-navlink">Về chúng tôi</NavLink>
                <DropdownService />
                <NavLink to={`${host}/storeList`} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-item nav-link nav-item-navlink">Danh sách cửa hàng</NavLink>
                <NavLink to={`${host}/contact`} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-item nav-link nav-item-navlink">Liên hệ</NavLink>
                <NavLink to={`${host}/booking`} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-item nav-link nav-item-navlink">Đặt lịch ngay</NavLink>
                <NavLink to={`${host}/scheduleList`}  data-toggle="collapse" data-target=".navbar-collapse.show" className="d-md-block d-lg-none d-xl-none nav-item nav-link nav-item-navlink">Tra cứu lịch hẹn</NavLink>
                {
                  localStorage.getItem('token') ?
                    <AccountMenu handleLogout={handleLogout} /> :
                    <NavLink data-toggle="collapse" data-target=".navbar-collapse.show" to={`${host}/login`} className="nav-item nav-link">Đăng nhập</NavLink>
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
        <Routes >
          <Route path={`${host}/`} element={<Home />} />
          <Route path={`${host}*`} element={<NotFoundPage />} />
          <Route path={`${host}/about`} element={<AboutPage />} />
          <Route path={`${host}/service`} element={<ServiceCarePage />} />
          <Route path={`${host}/storeList`} element={<StoreListPage />} />
          <Route path={`${host}/contact`} element={<ContactPage />} />
          <Route path={`${host}/listService`} element={<ListService />} />
          <Route path={`${host}/detail/:id`} element={<Detail />} />
          <Route path={`${host}/team`} element={<Team />} />
          <Route path={`${host}/booking`} element={<Booking />} />
          <Route path={`${host}/contactAndPreview`} element={<ContactAndPreviewOrderPage />} />
          <Route path={`${host}/login`} element={<LoginPage />} />
          <Route path={`${host}/signup`} element={<SignUpPage />} />
          <Route path={`${host}/passwordReset`} element={<ForgotPasswordPage />} />
          <Route path={`${host}/passwordReset/:id`} element={<ResetPasswordPage />} />
          <Route path={`${host}/changePassword`} element={<ChangePasswordPage />} />
          <Route path={`${host}/checkout`} element={<CheckoutPage />} />
          <Route path={`${host}/appointmentSchedule/:id`} element={<TimeLinePage />} />
          <Route path={`${host}/scheduleList`} element={<ScheduleList />} />
          <Route path={`${host}/infoCustomer`} element={<InfoCustomerPage />} />
          <Route path={`${host}/vnpReturnUrl`} element={<ReturnUrlPage />} />
        </Routes>
      </ScrollToTop>

    </>
  );
}

export default NavBar;