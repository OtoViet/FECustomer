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
import io from 'socket.io-client';

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
    const socket = io("https://dissertation-api-server.herokuapp.com/", { transports: ['websocket', 'polling', 'flashsocket'] });
    const location = useLocation();
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [open, setOpen] = useState(false);
    let totalPrice = location.state.totalPrice;
    const handleCloseDialog = (status) => {
        setOpen(status);
    };

    const handleClickVnPay = () => {
        let data = location.state;
        // data.listServiceChoose = data.listServiceChoose.map((item, index) => {
        //     return { ...item, idProduct: item._id, id: index }
        // });
        FormApi.createOrder(data)
        .then(resOrder => {
            let titleNotify = "Có đơn hàng mới từ " + location.state.name;
            let content = "chờ xác nhận";
            FormApi.createNotification({
                title: titleNotify, content: content,
                from: location.state.email, type: "order",
                createdAt: resOrder.createdAt, detail: { idOrder: resOrder._id }
            })
            .then(res => {
                socket.emit('send', {
                    title: titleNotify, content: content,
                    from: location.state.email, type: "order",
                    createdAt: res.createdAt, detail: { idOrder: resOrder._id },
                    isRead: false
                });
                fetch('https://dissertation-api-server.herokuapp.com/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        orderType: 'vehicle',
                        orderDescription: 'Thanh toan dich vu oto viet cho don hang ' + resOrder._id,
                        bankCode: '',
                        amount: totalPrice,
                        language: 'vn'
                    })
                })
                .then(response => response.json())
                .then(responseJson => {
                    if (responseJson.vnpUrl) {
                        window.location.href = responseJson.vnpUrl;
                    }
                })
                .catch(error => {
                    console.error(error);
                });
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
    const handleClick = () => {
        socket.on("connect", () => {
            console.log(socket.id);
        });
        let data = location.state;
        // console.log(data);
        // data.listServiceChoose = data.listServiceChoose.map((item, index) => {
        //     return { ...item, idProduct: item._id, id: index }
        // });
        FormApi.createOrder(data)
            .then(resOrder => {
                setOpen(true);
                let titleNotify = "Có đơn hàng mới từ " + location.state.name;
                let content = "chờ xác nhận";
                FormApi.createNotification({
                    title: titleNotify, content: content,
                    from: location.state.email, type: "order",
                    createdAt: resOrder.createdAt, detail: { idOrder: resOrder._id }
                })
                    .then(res => {
                        socket.emit('send', {
                            title: titleNotify, content: content,
                            from: location.state.email, type: "order",
                            createdAt: res.createdAt, detail: { idOrder: resOrder._id },
                            isRead: false
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
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
                                <Button
                                    type="submit"
                                    variant="contained"
                                    style={{ backgroundColor: "black" }}
                                    size="large"
                                    className="rounded-pill"
                                    onClick={handleClickVnPay}
                                >
                                    <img alt="logo vnpay" src={VNPayLogo} style={{ width: 50 }} /> Thanh toán VNPAY
                                </Button>
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
                                    <dt>Tên Người Thụ Hưởng</dt>
                                    <dd>CTY TNHH 1TV OTOVIET</dd>
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