import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import useGetInfoCustomer from '../../hooks/useGetInfoCustomer';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import * as Yup from 'yup';
import moment from 'moment';
import FormApi from '../../api/formApi';
import ResponsiveDialog from '../Dialog/DialogRedirectUrl';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
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

export default function SignUp() {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("Cập nhật thông tin tài khoản thành công!");
    const [loading, infoCustomer] = useGetInfoCustomer();
    const [valueDate, setValueDate] = useState(new Date('2000-08-18T21:11:54'));
    const signUpSchema = Yup.object().shape({
        firstName: Yup.string().required('Vui lòng nhập tên của bạn'),
        lastName: Yup.string().required('Vui lòng nhập họ của bạn'),
        phoneNumber: Yup.number().typeError('Vui lòng nhập số').required('Vui lòng nhập số điện thoại').min(100000000, 'Số điện thoại không hợp lệ'),
        dateOfBirth: Yup.date().typeError('Vui lòng chọn ngày sinh').max(new Date(), "Ngày sinh không hợp lệ"),
    });
    const formik = useFormik({
        initialValues: {
            firstName: infoCustomer.firstName,
            lastName: infoCustomer.lastName,
            phoneNumber: infoCustomer.phoneNumber,
            dateOfBirth: moment(infoCustomer.dateOfBirth, "DD/MM/YYYY").toDate(),
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            const updateFormData = values;
            FormApi.updateInfoCustomer(updateFormData).then(res => {
                setOpen(true);
            }).catch(err => {
                console.log(err);
                setOpen(true);
                setContent("Cập nhật thông tin thất bại!!!");
            });
        },
    });
    useEffect(() => {
        formik.setFieldValue('firstName', infoCustomer.firstName);
        formik.setFieldValue('lastName', infoCustomer.lastName);
        formik.setFieldValue('phoneNumber', infoCustomer.phoneNumber);
        formik.setFieldValue('dateOfBirth', moment(infoCustomer.dateOfBirth, "DD/MM/YYYY").toDate());
        setValueDate(moment(infoCustomer.dateOfBirth, "DD/MM/YYYY").toDate());
    },[loading])
    const handleChangeDate = (newValue) => {
        setValueDate(newValue);
        formik.setFieldValue('dateOfBirth', newValue);
    };
    if (loading) return <>
        <h2 style={{ textAlign: "center" }}>Đang tải thông tin của bạn</h2>
        <Stack alignItems="center" mt={10} mb={10}>
            <CircularProgress size={80} />
        </Stack>
    </>;
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {open? <ResponsiveDialog open={open} title="Thông báo"
                    content={content} />: null}
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <ContactPageIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ fontWeight: 500 }}>
                        Thông tin tài khoản
                    </Typography>
                    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="family-name"
                                    name="lastName"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Họ"
                                    autoFocus
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Tên"
                                    name="firstName"
                                    autoComplete="given-name"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        label="Ngày sinh"
                                        inputFormat="dd/MM/yyyy"
                                        value={valueDate}
                                        onChange={handleChangeDate}
                                        onBlur={formik.handleBlur}
                                        renderInput={(params) => <TextField {...params}
                                            name="dateOfBirth"
                                            id="dateOfBirth"
                                            error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                                            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                                            required fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Nhập số điện thoại"
                                    name="phoneNumber"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{ mt: 3, mb: 2, borderRadius: 10 }}
                        >
                            Cập nhật thông tin
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}