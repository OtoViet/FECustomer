import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Stack, CircularProgress, } from '@mui/material';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useGetVnpReturnUrl from '../../hooks/useGetVnpReturnUrl';
import moment from 'moment';
import FormApi from '../../api/formApi';
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


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function CustomizedTables() {
    let indexUrl = window.location.href.indexOf("/vnpReturnUrl");
    let paramsVnpUrlReturn = window.location.href.split(window.location.href.substring(0,indexUrl)+"/vnpReturnUrl")[1];
    console.log(window.location.href.substring(13+indexUrl));
    const [loading, data] = useGetVnpReturnUrl(paramsVnpUrlReturn);
    useEffect(() => {
        FormApi.getVnpIpn(paramsVnpUrlReturn).then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    },[]);

    if (loading) return <>
        <h2 style={{ textAlign: "center" }}>Đang tải thông tin</h2>
        <Stack alignItems="center" mt={10} mb={10}>
            <CircularProgress size={80} />
        </Stack>
    </>;
    let statusPayment = "Thất bại";
    switch (data.vnp_ResponseCode) {
        case "00":
            statusPayment = "Thành công";
            break;
        case "07":
            statusPayment = "Thất bại do giao dịch bị nghi ngờ (liên quan tới lừa đảo, giao dịch bất thường).";
            break;
        case "09":
            statusPayment = "Thất bại do thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking tại ngân hàng.";
            break;
        case "10":
            statusPayment = "Thất bại do khách hàng xác thực thông tin thẻ/tài khoản không đúng quá 3 lần";
            break;
        case "11":
            statusPayment = "Thất bại do đã hết hạn chờ thanh toán.";
            break;
        case "12":
            statusPayment = "Thất bại do thẻ bị khóa";
            break;
        case "13":
            statusPayment = "Thất bại do khách nhập sai mật khẩu xác thực giao dịch (OTP)";
            break;
        case "24":
            statusPayment = "Thất bại do khách hàng hủy giao dịch";
            break;
        case "51":
            statusPayment = "Thất bại do tài khoản của quý khách không đủ số dư để thực hiện giao dịch.";
            break;
        case "65":
            statusPayment = "Thất bại do tài khoản của Quý khách đã vượt quá hạn mức giao dịch trong ngày.";
            break;
        case "75":
            statusPayment = "Thất bại do ngân hàng thanh toán đang bảo trì."
            break;
        case "79":
            statusPayment = "Thất bại do nhập sai mật khẩu thanh toán quá số lần quy định. Xin quý khách vui lòng thực hiện lại giao dịch"
            break;
        default:
            statusPayment = "Thất bại do lỗi hệ thống";
            break;
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <h2 className="mt-4 text-center">Thông tin giao dịch</h2>
                <TableContainer component={Paper} sx={{ mt: 4 }}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Thông tin</StyledTableCell>
                                <StyledTableCell >Giá trị</StyledTableCell>
                                <StyledTableCell >Mô tả</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell >
                                    Mã cửa hàng
                                </StyledTableCell>
                                <StyledTableCell >{data.vnp_TmnCode}</StyledTableCell>
                                <StyledTableCell >Được cấp bởi VNPAY</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell >
                                    Mã giao dịch
                                </StyledTableCell>
                                <StyledTableCell >{data.vnp_TxnRef}</StyledTableCell>
                                <StyledTableCell >Mã giao dịch của bạn</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell >
                                    Thông tin giao dịch
                                </StyledTableCell>
                                <StyledTableCell >{data.vnp_OrderInfo.replaceAll("+", " ")}</StyledTableCell>
                                <StyledTableCell >Nội dung giao dịch</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell >
                                    Thời gian thanh toán
                                </StyledTableCell>
                                <StyledTableCell >{moment(data.vnp_PayDate, "YYYYMMDDHHmmss").format("DD/MM/YYYY HH:mm:ss")}</StyledTableCell>
                                <StyledTableCell >Thời gian bạn thực hiện thanh toán giao dịch</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell >
                                    Tổng tiền
                                </StyledTableCell>
                                <StyledTableCell >{(parseInt(data.vnp_Amount)/100).toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}</StyledTableCell>
                                <StyledTableCell >Số tiền thanh toán cho giao dịch</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell >
                                    Trạng thái
                                </StyledTableCell>
                                <StyledTableCell >{statusPayment}</StyledTableCell>
                                <StyledTableCell >Trạng thái giao dịch</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </ThemeProvider>
    );
}
