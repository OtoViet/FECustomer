import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import AboutPage from '../../pages/About/About';
import ServiceCarePage from '../../pages/ServiceCare/ServiceCare';
import ContactPage from '../../pages/Contact/Contact';
import PricesPage from '../../pages/Prices/Price'
import CarePoints from '../../pages/CarePoints/CarePoints';
import Home from '../../pages/Home/Home';
function NavBar() {
  const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  }
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
                <div className="nav-item dropdown">
                  <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu">
                    <a href="blog.html" className="dropdown-item">Bài viết</a>
                    <a href="single.html" className="dropdown-item">Trang chi tiết</a>
                    <a href="team.html" className="dropdown-item">Đội ngũ nhân sự</a>
                    <a href="booking.html" className="dropdown-item">Đặt lịch hẹn</a>
                  </div>
                </div>
                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
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
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServiceCarePage />} />
          <Route path="/price" element={<PricesPage />} />
          <Route path="/location" element={<CarePoints />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </ScrollToTop>

    </>
  );
}

export default NavBar;