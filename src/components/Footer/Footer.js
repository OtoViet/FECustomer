import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
function Footer() {
    const navigate = useNavigate();
    const NewsSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Vui lòng nhập tên của bạn'),
        email: Yup.string().email('Địa chỉ email không hợp lệ').required('Vui lòng nhập email')
    });
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Liên hệ</h2>
                            <p><i className="fa fa-map-marker-alt"></i>123 Trần Hưng Đạo, NK, CT</p>
                            <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope"></i>otoviet@gmail.com</p>
                            <div className="footer-social">
                                <a className="btn" href="https://www.facebook.com/nhattan.nguyen.6"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn" href="https://www.instagram.com/tan00065/"><i className="fab fa-instagram"></i></a>
                                <a className="btn" href="https://www.linkedin.com/in/nh%E1%BA%ADt-t%C3%A2n-nguy%E1%BB%85n-345a74219/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Liên kết</h2>
                            <a href="/" onClick={(e)=>{
                                e.preventDefault();
                                navigate('/about');
                            }}>Về chúng tôi</a>
                            <a href="/" onClick={(e)=>{
                                e.preventDefault();
                                navigate('/contact');
                            }}>Liên hệ với chúng tôi</a>
                            <a href="/" onClick={(e)=>{
                                e.preventDefault();
                                navigate('/listService');
                            }}>Dịch vụ của chúng tôi</a>
                            <a href="/">Danh sách cửa hàng</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Thông tin hữu ích</h2>
                            <a href="/term">Điều khoản sử dụng</a>
                            <a href="/privacy">Chính sách riêng tư</a>
                            <a href="/help">Giúp đỡ</a>
                            <a href="/fquas">Câu hỏi thường gặp</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Nhận tin tức mới</h2>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: ''
                                }}
                                validationSchema={NewsSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    alert('Ham xu li form o file components/Footer/Footer.js');
                                    console.log(values);
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <Field name="name" className="form-control" placeholder="Tên đầy đủ của bạn" />
                                        {errors.name && touched.name ? (
                                            <p className="text-danger">{errors.name}</p>
                                        ) : null}
                                        <Field name="email" className="form-control" placeholder="Địa chỉ email" />
                                        {errors.email && touched.email ? <p className="text-danger">{errors.email}</p> :null}
                                        <button className="btn btn-custom">Đăng kí nhận</button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <p>&copy; <a href="/">Otoviet</a>, Bản quyền thuộc về OtoViet. Thiết kế và tùy chỉnh bởi <a href="https://htmlcodex.com">HTML Codex & NguyenNhatTan</a></p>
            </div>
        </div>
    );
}
export default Footer;