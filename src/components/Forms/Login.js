import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormApi from '../../api/formApi';
import ResponsiveDialog from '../Dialog/Dialog';
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

export default function Login() {
  const host = currentHost();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, 'Quá ngắn!')
      .max(50, 'Quá dài!')
      .required('Vui lòng nhập tên của bạn'),
    password: Yup.string().required('Vui lòng nhập mật khẩu')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      FormApi.login(values).then(res => {
        // set refresh token
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        // use react router dom to redirect to home page
        navigate(`${host}/`);
      }).catch(err => {
        setOpen(true);
      });

    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {open ? <ResponsiveDialog open={open} 
          title="Thông báo"
          content="Đăng nhập không thành công!
          Mật khẩu hoặc tài khoản của bạn không đúng" /> : null}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontWeight: 500 }}>
            Đăng nhập
          </Typography>
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ghi nhớ"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 3, mb: 2, borderRadius: 10 }}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to={`${host}/passwordReset`} variant="body2">
                  Quên mật khẩu?
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