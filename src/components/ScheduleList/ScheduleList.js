import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import useGetAllOrder from '../../hooks/useGetAllOrder';
import Typography from '@mui/material/Typography';
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
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
export default function FullWidthGrid() {
    let [loading, orders] = useGetAllOrder();
    console.log(orders);


    if (loading) return <>
        <h2 style={{ textAlign: "center" }}>Đang tải danh sách lịch hẹn</h2>
        <Stack alignItems="center" mt={10} mb={10}>
            <CircularProgress size={80} />
        </Stack>
    </>;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="md">
                {
                    orders.map(order => {
                        return (
                            <>  
                                <AlignHorizontalRightIcon />
                                <AlignHorizontalLeftIcon />
                                <Typography variant="h6" component="h1" gutterBottom>
                                    Mã lịch hẹn: {order._id}
                                </Typography>
                                <TableContainer component={Paper} sx={{mb:5}}>

                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Ngày đặt</StyledTableCell>
                                                <StyledTableCell align="right">Ngày hẹn</StyledTableCell>
                                                <StyledTableCell align="right">Thời gian hẹn</StyledTableCell>
                                                <StyledTableCell align="right">Tổng tiền</StyledTableCell>
                                                <StyledTableCell align="right">Thanh toán</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            <StyledTableCell component="th" scope="row">
                                                {new Date(order.createdAt).toLocaleDateString('pt-PT')}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {new Date(order.dateAppointment).toLocaleDateString('pt-PT')}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {order.timeAppointment}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {order.totalPrice.toLocaleString('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                })}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
                                            </StyledTableCell>
                                        </TableBody>

                                    </Table>
                                    <Typography variant="h6" component="h1" gutterBottom>
                                        Dịch vụ đã chọn
                                    </Typography>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Tên dịch vụ</StyledTableCell>
                                                <StyledTableCell align="right">Giá tiền</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {order.listService.map((row) => (
                                                <StyledTableRow key={row.id}>
                                                    <StyledTableCell component="th" scope="row">
                                                        {row.productName}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">{row.price.toLocaleString('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    })}</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </>
                        )
                    })
                }
            </Container>
        </ThemeProvider>
    );
}