import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ResponsiveDialog from '../Dialog/Dialog';
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

export default function ChangePassword() {
    const [open, setOpen] = useState(false);
    const loginSchema = Yup.object().shape({
        currentPassword: Yup.string().required('Vui lòng nhập mật khẩu hiện tại')
            .test('Check password', 'Mật khẩu đã nhập không đúng', // <- key, message
                function (value) {
                    return new Promise((resolve, reject) => {
                        FormApi.checkPassword({ password: value }).then(res => {
                            if (res.result) {
                                resolve(true);
                            } else {
                                resolve(false);
                            }
                        })
                        .catch(err => {
                            FormApi.token({ refreshToken: localStorage.getItem('refreshToken') })
                                .then((res) => {
                                    if (res) {
                                        localStorage.setItem('token', res.accessToken);
                                        localStorage.setItem('refreshToken', res.refreshToken);
                                        FormApi.checkPassword({ password: value }).then(res => {
                                            if (res.result) {
                                                resolve(false);
                                            } else {
                                                resolve(true);
                                            }
                                        }).catch(err => {
                                            resolve(false);
                                        });
                                    }
                                })
                                .catch((err) => {
                                    resolve(false);
                                });
                        });
                    })
                }
            ),
        password: Yup.string()
            .required('Vui lòng nhập mật khẩu mới của bạn')
            .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
            .notOneOf([Yup.ref('currentPassword')], 'Mật khẩu không được trùng với mật khẩu hiện tại'),
        rePassword: Yup.string().required('Vui lòng nhập lại mật khẩu').oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp')
    });

    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            password: '',
            rePassword: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            FormApi.changePassword(values).then(res => {
                if (res) {
                    setOpen(true);
                    localStorage.removeItem('token');   
                    localStorage.removeItem('refreshToken');
                }
            }).catch(err => {
                console.log(err);
            });
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {open? <ResponsiveDialog open={open} title="Thông báo"
                    content="Thay đổi mật khẩu thành công!
                    Về trang đăng nhập để tiếp tục" />: null}
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <EnhancedEncryptionIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ fontWeight: 500 }}>
                        Thay đổi mật khẩu
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="currentPassword"
                            label="Mật khẩu"
                            name="currentPassword"
                            type="password"
                            autoFocus
                            value={formik.values.currentPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.currentPassword && Boolean(formik.errors.currentPassword)}
                            helperText={formik.touched.currentPassword && formik.errors.currentPassword}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Mật khẩu"
                            name="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="rePassword"
                            label="Nhập lại mật khẩu"
                            name="rePassword"
                            type="password"
                            value={formik.values.rePassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.rePassword && Boolean(formik.errors.rePassword)}
                            helperText={formik.touched.rePassword && formik.errors.rePassword}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{ mt: 3, mb: 2, borderRadius: 10 }}
                        >
                            Thay đổi mật khẩu
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}