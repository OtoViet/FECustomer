import {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormApi from '../../api/formApi';
import ResponsiveDialog from '../Dialog/Dialog';
import Alert from '@mui/material/Alert';
import { currentHost } from '../../utils/path';

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

export default function ForgotPassword() {
  const host = currentHost();
  const [open, setOpen] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if(location.state && location.state.error) {
      setErrorAlert(true);
    }
  },[location]);
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Email không hợp lệ')
      .required('Vui lòng nhập tên email của bạn'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
        FormApi.forgotPassword(values).then(res => {
          setOpen(true);
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
          content="Chúng tôi đã gửi cho bạn một email xác nhận.
          Kiểm tra email để xác thực việc thay đổi mật khẩu." />: null}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <MailOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontWeight: 500 }}>
            Quên mật khẩu
          </Typography>
          {errorAlert ? 
          <Alert severity="error">Có vẻ như có vấn đề với đường dẫn của bạn!</Alert> : null }
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Tên email"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 3, mb: 2, borderRadius: 10 }}
            >
              Quên mật khẩu
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to={`${host}/`} variant="body2">
                  Về trang chủ
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to={`${host}/signup`} variant="body2">
                  Chưa có tài khoản? Đăng kí
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}