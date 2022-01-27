import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import { useState } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


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
    const [value, setValue] = useState('1');
    const [date, setDate] = useState(new Date());
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm" className="py-5">
                <div className="bg-white rounded-lg shadow-sm p-5">
                    <TabContext value={value} variant="fullWidth">
                        <Box >
                            <TabList centered indicatorColor="secondary" onChange={handleChange} aria-label="lab API tabs example">
                                <Tab className="shadow-none" iconPosition="start" icon={<i className="fa fa-credit-card"></i>} label="Credit Card" value="1" />
                                <Tab className="shadow-none" iconPosition="start" icon={<i className="fab fa-paypal"></i>} label="Paypal" value="2" />
                                <Tab className="shadow-none" iconPosition="start" icon={<i className="fa fa-university"></i>} label="Bank Transfer" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div >
                                <Box component="form" sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Full name (on the card)"
                                        name="name"
                                        placeholder="Jason Doe"
                                        autoComplete="name"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="cardNumber"
                                        label="Card number"
                                        name="cardNumber"
                                        placeholder="Your card number"
                                        autoComplete="cardNumber"
                                        autoFocus
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <span className="input-group-text text-muted">
                                                        <i className="fab fa-cc-visa mx-1"></i>
                                                        <i className="fab fa-cc-mastercard mx-1"></i>
                                                    </span>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="form-group mt-3">
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        inputFormat="MM/yyyy"
                                                        views={['year', 'month']}
                                                        label="Expiration(MM/YY)"
                                                        minDate={new Date('2000-03-01')}
                                                        maxDate={new Date('2030-06-01')}
                                                        value={date}
                                                        onChange={(newDate) => {
                                                            setDate(newDate);
                                                        }}
                                                        renderInput={(params) => <TextField {...params} helperText={null} />}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group mb-4">
                                                <TextField
                                                    margin="normal"
                                                    id="input-cvv"
                                                    label="CVV"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <i data-toggle="tooltip" title="Three-digits code on the back of your card" className="fa fa-question-circle"></i>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        sx={{ mt: 3, mb: 2, borderRadius: 10 }}
                                    >
                                        Xác nhận
                                    </Button>
                                </Box>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">
                            <div >
                                <p>Paypal is easiest way to pay online</p>
                                <p>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        className="rounded-pill"
                                    >
                                        <i className="fab fa-paypal"></i> Log into my Paypal
                                    </Button>
                                </p>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </TabPanel>
                        <TabPanel value="3">
                            <div>
                                <h6>Bank account details</h6>
                                <dl>
                                    <dt>Bank</dt>
                                    <dd> THE WORLD BANK</dd>
                                </dl>
                                <dl>
                                    <dt>Account number</dt>
                                    <dd>7775877975</dd>
                                </dl>
                                <dl>
                                    <dt>IBAN</dt>
                                    <dd>CZ7775877975656</dd>
                                </dl>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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