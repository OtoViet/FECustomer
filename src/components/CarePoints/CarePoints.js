import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
function CarePoints() {
    const ContactSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Vui lòng nhập tên của bạn'),
        email: Yup.string().email('Địa chỉ email không hợp lệ').required('Vui lòng nhập email'),
        description: Yup.string().required('Vui lòng nhập mô tả')
    });
    return (
        <div className="location">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="section-header text-left">
                            <p>Washing Points</p>
                            <h2>Car Washing & Care Points</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="location-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="location-text">
                                        <h3>Car Washing Point</h3>
                                        <p>123 Street, New York, USA</p>
                                        <p><strong>Call:</strong>+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="location-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="location-text">
                                        <h3>Car Washing Point</h3>
                                        <p>123 Street, New York, USA</p>
                                        <p><strong>Call:</strong>+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="location-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="location-text">
                                        <h3>Car Washing Point</h3>
                                        <p>123 Street, New York, USA</p>
                                        <p><strong>Call:</strong>+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="location-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="location-text">
                                        <h3>Car Washing Point</h3>
                                        <p>123 Street, New York, USA</p>
                                        <p><strong>Call:</strong>+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="location-form">
                            <h3>Request for a car wash</h3>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    description: ''
                                }}
                                validationSchema={ContactSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    alert('Ham xu li form o file components/CarePoints/CarePoints.js');
                                    console.log(values);
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className="control-group">
                                            <Field type="text" name="name" className="form-control" placeholder="Name" />
                                            {errors.name && touched.name ? (
                                                <p className="text-white"><i className="fas fa-exclamation-circle"></i> {errors.name}</p>
                                            ) : <p></p>}
                                        </div>
                                        <div className="control-group">
                                            <Field type="email" name="email" className="form-control" placeholder="Email" />
                                            {errors.email && touched.email ? <p className="text-white"><i className="fas fa-exclamation-circle"></i> {errors.email}</p> : <p></p>}
                                        </div>
                                        <div className="control-group">
                                            <Field as="textarea" name="description" className="form-control" placeholder="Description" />
                                            {errors.description && touched.description ? <p className="text-white"><i className="fas fa-exclamation-circle"></i> {errors.description}</p> : <p></p>}
                                        </div>
                                        <div>
                                            <button className="btn btn-custom" type="submit">Send Request</button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CarePoints;