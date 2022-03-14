import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
function Contact() {
    const ContactSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Vui lòng nhập tên của bạn'),
        subject: Yup.string()
            .required('Vui lòng nhập tiêu đề'),
        email: Yup.string().email('Địa chỉ email không hợp lệ').required('Vui lòng nhập email'),
        message: Yup.string()
            .required('Vui lòng nhập nội dung')
    });

    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Liên hệ với chúng tôi</p>
                        <h2>Nếu bạn có câu hỏi</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-info">
                                <h2>Thông tin liên hệ nhanh</h2>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h3>Giờ mở cửa</h3>
                                        <p>T2 - CN, 7:30:SA - 8:00:Tối</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa fa-phone-alt"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h3>Liên hệ qua điện thoại</h3>
                                        <p>0123456789</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="far fa-envelope"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h3>Email</h3>
                                        <p>otoviet@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="contact-form">
                                <Formik
                                    initialValues={{
                                        name: '',
                                        subject: '',
                                        email: '',
                                        message: ''
                                    }}
                                    validationSchema={ContactSchema}
                                    onSubmit={values => {
                                        // same shape as initial values
                                        alert('Ham xu li form o file components/Contact/Contact.js');
                                        console.log(values);
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form name="sentMessage" id="contactForm">
                                            <div className="control-group">
                                                <Field type="text" name="name" className="form-control" id="name" placeholder="Tên của bạn" />
                                                {errors.name && touched.name ? (
                                                    <p className="text-danger">{errors.name}</p>
                                                ) : <p></p>}
                                            </div>
                                            <div className="control-group">
                                                <Field type="email" name="email" className="form-control" id="email" placeholder="Địa chỉ email" />
                                                {errors.email && touched.email ? <p className="text-danger">{errors.email}</p> : <p></p>}
                                            </div>
                                            <div className="control-group">
                                                <Field type="text" name="subject" className="form-control" id="subject" placeholder="Tiêu đề" />
                                                {errors.subject && touched.subject ? (
                                                    <p className="text-danger">{errors.subject}</p>
                                                ) : <p></p>}
                                            </div>
                                            <div className="control-group">
                                                <Field as="textarea"className="form-control" name="message" id="message" placeholder="Nội dung thắc mắc"/>
                                                {errors.message && touched.message ? (
                                                    <p className="text-danger">{errors.message}</p>
                                                ) : <p></p>}
                                            </div>
                                            <div>
                                                <button className="btn btn-custom" type="submit" id="sendMessageButton">Gửi thắc mắc</button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;