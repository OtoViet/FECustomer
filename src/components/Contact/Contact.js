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
                        <p>Get In Touch</p>
                        <h2>Contact for any query</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-info">
                                <h2>Quick Contact Info</h2>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h3>Opening Hour</h3>
                                        <p>Mon - Fri, 8:00 - 9:00</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa fa-phone-alt"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h3>Call Us</h3>
                                        <p>+012 345 6789</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="far fa-envelope"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h3>Email Us</h3>
                                        <p>info@example.com</p>
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
                                                <Field type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                                                {errors.name && touched.name ? (
                                                    <p className="text-danger">{errors.name}</p>
                                                ) : <p></p>}
                                            </div>
                                            <div className="control-group">
                                                <Field type="email" name="email" className="form-control" id="email" placeholder="Your Email" />
                                                {errors.email && touched.email ? <p className="text-danger">{errors.email}</p> : <p></p>}
                                            </div>
                                            <div className="control-group">
                                                <Field type="text" name="subject" className="form-control" id="subject" placeholder="Subject" />
                                                {errors.subject && touched.subject ? (
                                                    <p className="text-danger">{errors.subject}</p>
                                                ) : <p></p>}
                                            </div>
                                            <div className="control-group">
                                                <Field as="textarea"className="form-control" name="message" id="message" placeholder="Message"/>
                                                {errors.message && touched.message ? (
                                                    <p className="text-danger">{errors.message}</p>
                                                ) : <p></p>}
                                            </div>
                                            <div>
                                                <button className="btn btn-custom" type="submit" id="sendMessageButton">Send Message</button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>

                            </div>
                        </div>
                        <div className="col-md-12">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1600663868074!5m2!1sen!2sbd"
                                style={{ borderWidth: 0 }} aria-hidden="false" ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;