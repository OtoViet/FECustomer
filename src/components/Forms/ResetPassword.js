import {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockResetIcon from '@mui/icons-material/LockReset';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ResponsiveDialog from '../Dialog/Dialog';
import FormApi from '../../api/formApi';
import { useParams, useNavigate } from 'react-router-dom';
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

export default function ResetPassword() {
  const host = currentHost();
  let params = useParams();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [checkToken, setCheckToken] = useState(false);
  useEffect(() => {
    FormApi.checkTokenResetPassword({token:params.id}).then(res => {
      setCheckToken(true);
    }).catch(err => {
      setCheckToken(false);
      navigate(`${host}/passwordReset`,{state:{error: true}});
    });
  },[params.id, navigate]);
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .required('Vui lòng nhập mật khẩu mới của bạn')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    rePassword: Yup.string().required('Vui lòng nhập lại mật khẩu').oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp')
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      rePassword: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
        let dataSend = {password: values.password, token: params.id};
        FormApi.resetPassword(dataSend).then(res => {
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
          content="Thay đổi mật khẩu thành công!" />: null}
        {checkToken?
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockResetIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontWeight: 500 }}>
            Đặt lại mật khẩu
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Mật khẩu"
              name="password"
              type="password"
              autoFocus
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
              autoFocus
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
                Đặt lại mật khẩu
            </Button>
          </Box>
        </Box>: null}
      </Container>
    </ThemeProvider>
  );
}