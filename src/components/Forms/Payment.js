import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import { useState } from 'react';
import VNPayLogo from '../../assets/images/VNPayLogo.svg';
import { useLocation } from 'react-router-dom';
import FormApi from '../../api/formApi';
import Dialog from '../Dialog/DialogNotify';
const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#202C45',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#E81C2E',
            dark: '#ba000d',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Barlow',
            '"Segoe UI"',
            'Roboto',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});
function Payment() {
    const location = useLocation();
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [open, setOpen] = useState(false);
    let totalPrice = 0;
    location.state.listServiceChoose.map((item) => {
        totalPrice += item.price;
    });
    const handleCloseDialog = (status) => {
        setOpen(status);
    };
    const handleClick = () => {
        FormApi.createOrder(location.state)
            .then(res => {
                setOpen(true);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm" className="py-5">
                {open ? <Dialog open={open}
                    handleCloseDialog={handleCloseDialog}
                    title="Thông báo"
                    url={"/scheduleList"}
                    content="Đã gửi yêu cầu chăm sóc xe thành công" /> : null}
                
                <div className="rounded-lg shadow-sm p-5" style={{ backgroundColor: '#F5F5F5' }}>
                    <TabContext value={value} variant="fullWidth">
                        <Box >
                            <TabList centered indicatorColor="secondary" onChange={handleChange} aria-label="lab API tabs example">
                                <Tab className="shadow-none" iconPosition="start" icon={<i className="fa fa-credit-card"></i>} label="Thanh toán sau" value="1" />
                                <Tab className="shadow-none" iconPosition="start" icon={<img alt="logo vnpay" src={VNPayLogo} style={{ width: 50 }} />} label="VNPAY" value="2" />
                                <Tab className="shadow-none" iconPosition="start" icon={<i className="fa fa-university"></i>} label="Chuyển khoản" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div >
                                <Box component="form" sx={{ mt: 1 }}>
                                    <p className="text-muted">
                                        Vui lòng đến đúng giờ để tránh bất tiện, chúng tôi sẽ gửi cho bạn email nhắc nhở trước 1 ngày để bạn thu xếp thời gian
                                    </p>
                                    <Button
                                        type="button"
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        onClick={handleClick}
                                        sx={{ mt: 3, mb: 2, borderRadius: 10 }}
                                    >
                                        Xác nhận đặt lịch hẹn
                                    </Button>
                                </Box>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">
                            <div >
                                <p>Thanh toán trực tuyến dễ dàng với VNPAY</p>
                                    <form id="createOrder" action="http://localhost:5000/api/order/create_payment_url" method="POST">
                                        <div className="form-group" style={{ display: "none" }}><label>Loại hàng hóa</label>
                                            <select readOnly value="vehicle" id="orderType" name="orderType" className="form-control">
                                                <option value="vehicle">Xe</option>
                                            </select>
                                        </div>
                                        <div className="form-group" style={{ display: "none" }}>
                                            <label>Số tiền</label>
                                            <input id="amount" name="amount" placeholder="Số tiền" readOnly value={totalPrice} className="form-control" />

                                        </div>
                                        <div className="form-group" style={{ display: "none" }}><label>Nội dung thanh toán</label>
                                            <textarea id="orderDescription" name="orderDescription" readOnly value="Thanh toán dịch vụ otoviet" className="form-control" />
                                        </div>
                                        <div className="form-group" style={{ display: "none" }}>
                                            <select readOnly value="" id="bankCode" name="bankCode" className="form-control" default>
                                                <option value="">Chọn ngân hàng</option>
                                            </select></div><div className="form-group" style={{ display: "none" }}>
                                            <select readOnly value="vn" id="language" name="language" className="form-control" style={{ display: "none" }}>
                                                <option value="vn">Tiếng Việt</option>
                                            </select>
                                        </div>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            style={{ backgroundColor: "black" }}
                                            size="large"
                                            className="rounded-pill"
                                        >
                                            <img alt="logo vnpay" src={VNPayLogo} style={{ width: 50 }} /> Thanh toán VNPAY
                                        </Button>
                                    </form>
                                <p className="text-muted">
                                    Nhanh chóng, an toàn và tiện lợi hơn
                                </p>
                            </div>
                        </TabPanel>
                        <TabPanel value="3">
                            <div>
                                <h6>Thông tin người nhận</h6>
                                <dl>
                                    <dt>Tên Ngân Hàng</dt>
                                    <dd>Sacombank</dd>
                                </dl>
                                <dl>
                                    <dt>Số tài khoải</dt>
                                    <dd>070435430207</dd>
                                </dl>
                                <p className="text-muted">
                                    Chúng tôi sẽ xác nhận với bạn sau khi bạn chuyển khoản thành công!
                                </p>
                            </div>
                        </TabPanel>
                    </TabContext>
                </div>
            </Container>
        </ThemeProvider>

    );
}
export default Payment;