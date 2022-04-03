import { useState } from 'react';
import { useFormik } from 'formik';
import useGetInfoCustomer from '../../hooks/useGetInfoCustomer';
import useGetAllStore from '../../hooks/useGetAllStore.js';
import * as Yup from 'yup';
import {
    Switch,
    CircularProgress,
    Stack
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const [loading, listStore] = useGetAllStore();
    let totalPrice = 0;
    location.state.listServiceChoose.forEach((item) => {
        totalPrice += item.price;
    });
    totalPrice += 100000 * (location.state.carSize === "carMedium" ? 1 : 2);
    totalPrice += location.state.priceCombo;
    const listCarePoint = listStore;
    const carSize = {
        carSmall: "Xe nhỏ",
        carMedium: "Xe vừa",
        carLarge: "Xe lớn"
    };
    const combo = {
        combo1: "GÓI LÀM SẠCH CƠ BẢN",
        combo2: "GÓI LÀM SẠCH PREMIUM",
        combo3: "GÓI LÀM SẠCH SUPER PREMIUM",
    };
    if (location.state.carePoint === "" || location.state.carSize === ""
        || location.state.listServiceChoose.length === 0 || location.state.time === "") {
        navigate("/booking");
    }
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [dataForm, setDataForm] = useState();
    const [loadingInfoCustomer, infoCustomer] = useGetInfoCustomer();
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
            // alert(JSON.stringify(values, null, 2));
            setDataForm(values);
        },
        onReset: () => {
            setDataForm(null);
        }
    });
    const handleSendRequest = () => {
        if (dataForm) {
            let dataSend = { ...dataForm, ...location.state };
            // console.log(dataSend);
            dataSend.totalPrice = Math.round(totalPrice * ((100 - location.state.percentSale) / 100))
            navigate("/checkout", { state: dataSend });
        }
    };
    const handleChangeSwitch = (event) => {
        if (!loadingInfoCustomer && event.target.checked) {
            formik.setFieldValue('name', infoCustomer.fullName);
            formik.setFieldValue('email', infoCustomer.email);
            formik.setFieldValue('phoneNumber', infoCustomer.phoneNumber);
        }
        if (!event.target.checked) {
            formik.handleReset();
        }
    };

    if (loadingInfoCustomer || loading) return <>
        <h2 style={{ textAlign: "center" }}>Đang tải danh thông tin</h2>
        <Stack alignItems="center" mt={10} mb={10}>
            <CircularProgress size={80} />
        </Stack>
    </>;
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
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        className="form-control" placeholder="Tên của bạn"
                                    />
                                    {formik.errors.name && formik.touched.name ? (
                                        <p className="text-white"><i className="fas fa-exclamation-circle"></i> {formik.errors.name}</p>
                                    ) : <p></p>}
                                </div>
                                <div className="control-group">
                                    <input type="email" name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        className="form-control" placeholder="Địa chỉ email liên hệ" />
                                    {formik.errors.email && formik.touched.email ? <p className="text-white"><i className="fas fa-exclamation-circle"></i> {formik.errors.email}</p> : <p></p>}
                                </div>
                                <div className="control-group">
                                    <input type="text" name="phoneNumber"
                                        value={formik.values.phoneNumber}
                                        onChange={formik.handleChange}
                                        className="form-control" placeholder="Số điện thoại liên hệ" />
                                    {formik.errors.phoneNumber && formik.touched.phoneNumber ? <p className="text-white"><i className="fas fa-exclamation-circle"></i> {formik.errors.phoneNumber}</p> : <p></p>}
                                </div>
                                <div className="control-group">
                                    <textarea as="textarea" name="address"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        className="form-control" placeholder="Nhập địa chỉ" />
                                    {formik.errors.address && formik.touched.address ? <p className="text-white"><i className="fas fa-exclamation-circle"></i> {formik.errors.address}</p> : <p></p>}
                                </div>
                                <div className="control-group">
                                    <textarea as="textarea" name="description"
                                        value={formik.values.description}
                                        onChange={formik.handleChange} className="form-control"
                                        placeholder="Nhập yêu cầu phục vụ" />
                                </div>
                                <div>
                                    <button className="btn btn-custom" type="submit" >Xác nhận</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3>Kiểm tra lại thông tin</h3>
                        <div>
                            <h4>Cửa hàng phục vụ</h4>
                            <p>{listCarePoint[parseInt(location.state.carePoint) - 1].name}</p>
                            <p>Địa chỉ: {listCarePoint[parseInt(location.state.carePoint) - 1].address}</p>
                            <h4>Kích cỡ xe</h4>
                            <p>{carSize[location.state.carSize]} {location.state.carSize !== "carSmall" ? "(Phụ thu thêm " +
                                (100000 * (location.state.carSize === "carMedium" ? 1 : 2))
                                    .toLocaleString('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }) + ")" : null}</p>
                            {location.state.combo === "" ? null : <>
                                <h4>Gói combo tùy chọn</h4>
                                <p>{combo[location.state.combo]} ({location.state.priceCombo.toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                })})</p>
                            </>}
                            <h4>Dịch vụ đã chọn</h4>
                            <ul>
                                {location.state.listServiceChoose.map((item, index) => {
                                    return (
                                        <li key={index}>{item.productName} (Giá dịch vụ: {item.price.toLocaleString('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })})</li>
                                    )
                                })}
                            </ul>
                            <h4>Tổng tiền: <h5 style={{ display: "inline", color: "red" }}>{Math.round(totalPrice * ((100 - location.state.percentSale) / 100)).toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            })}{location.state.percentSale === 0 ? null : ' (đã bao gồm giảm giá ' + location.state.percentSale + '%)'}</h5></h4>
                            <h4>Thời gian hẹn</h4>
                            <p>{location.state.time.toLocaleDateString('pt-PT')} - {location.state.time.getHours()}:
                                {location.state.time.getMinutes() >= 10 ? location.state.time.getMinutes()
                                    : `0${location.state.time.getMinutes()}`}</p>
                            {dataForm ?
                                <>
                                    <h4>Thông tin người đặt</h4>
                                    <h5 style={{ display: "inline" }}>Tên người đặt: </h5><span>{dataForm.name}</span><br />
                                    <h5 style={{ display: "inline" }}>Email: </h5><span>{dataForm.email}</span><br />
                                    <h5 style={{ display: "inline" }}>Số điện thoại: </h5><span>{dataForm.phoneNumber}</span><br />
                                    <h5 style={{ display: "inline" }}>Địa chỉ: </h5><span>{dataForm.address}</span><br />
                                    <h5 style={{ display: "inline" }}>Yêu cầu: </h5><span>{dataForm.description}</span><br />
                                    <button className="btn btn-custom mt-4" type="submit"
                                        onClick={handleSendRequest}>Chuyển sang trang thanh toán</button>
                                </>
                                : null}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}