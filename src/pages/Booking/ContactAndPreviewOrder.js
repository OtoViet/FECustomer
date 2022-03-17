import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import useGetInfoCustomer from '../../hooks/useGetInfoCustomer';
import * as Yup from 'yup';
import {
    Switch
} from '@mui/material';
import {useLocation} from 'react-router-dom';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Tên quá ngắn')
        .max(50, 'Tên quá dài')
        .required('Vui lòng nhập tên của bạn'),
    email: Yup.string().email('Địa chỉ email không hợp lệ').required('Vui lòng nhập email'),
    phoneNumber: Yup.number().typeError('Vui lòng nhập số').required('Vui lòng nhập số điện thoại').min(100000000, 'Số điện thoại không hợp lệ'),
    address: Yup.string().required('Vui lòng nhập địa chỉ'),
});


export default function ContactAndPreviewOrderPage() {
    const location = useLocation();
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [switchCheck, setSwitchCheck] = useState(false);
    const [loadingInfoCustomer, infoCustomer] = useGetInfoCustomer();
    const [infoCustomerInForm, setInfoCustomerInForm] = useState();
    const handleChangeSwitch = (event) => {
        setSwitchCheck(event.target.checked);
        if (!loadingInfoCustomer && event.target.checked) {
            setInfoCustomerInForm(infoCustomer);
        }
        if (!event.target.checked) {
            setInfoCustomerInForm(null);
        }
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phoneNumber: "",
            description: '',
            address: '',
        },
        validationSchema: ContactSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="location">
            <div className="container">

                <h4 className="mt-4 mb-4">
                    Thông tin liên hệ
                    <Switch {...label}
                        // defaultChecked
                        onChange={handleChangeSwitch} />(Mặc định)
                </h4>
                <div className="row">

                    <div className="col-lg-6">
                        <div className="location-form">
                            <h3>Yêu cầu chăm sóc xe</h3>
                            <form noValidate onSubmit={formik.handleSubmit}>
                                <div className="control-group">
                                    <input type="text" name="name"
                                        onChange={formik.handleChange}
                                        className="form-control" placeholder="Tên của bạn"
                                    />
                                    {formik.errors.name && formik.touched.name ? (
                                        <p className="text-white"><i className="fas fa-exclamation-circle"></i> {formik.errors.name}</p>
                                    ) : <p></p>}
                                </div>
                                <div className="control-group">
                                    <input type="email" name="email"
                                        onChange={formik.handleChange}
                                        className="form-control" placeholder="Địa chỉ email liên hệ" />
                                    {formik.errors.email && formik.touched.email ? <p className="text-white"><i className="fas fa-exclamation-circle"></i> {formik.errors.email}</p> : <p></p>}
                                </div>
                                <div className="control-group">
                                    <input type="text" name="phoneNumber"
                                        onChange={formik.handleChange}
                                        className="form-control" placeholder="Số điện thoại liên hệ" />
                                    {formik.errors.phoneNumber && formik.touched.phoneNumber ? <p className="text-white"><i className="fas fa-exclamation-circle"></i> {formik.errors.phoneNumber}</p> : <p></p>}
                                </div>
                                <div className="control-group">
                                    <textarea as="textarea" name="address"
                                        onChange={formik.handleChange}
                                        className="form-control" placeholder="Nhập địa chỉ" />
                                    {formik.errors.address && formik.touched.address ? <p className="text-white"><i className="fas fa-exclamation-circle"></i> {formik.errors.address}</p> : <p></p>}
                                </div>
                                <div className="control-group">
                                    <textarea as="textarea" name="description" onChange={formik.handleChange} className="form-control"
                                        placeholder="Nhập yêu cầu phục vụ" />
                                </div>
                                <div>
                                    <button className="btn btn-custom" type="submit">Gửi yêu cầu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3>Kiểm tra lại thông tin</h3>
                        {JSON.stringify(location.state)}

                    </div>
                </div>
            </div>
        </div>
    )

}