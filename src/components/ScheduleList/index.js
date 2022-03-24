import { useState } from 'react';
import ScheduleList from './ScheduleList';
import ScheduleCompletedList from './SheduleCompletedList';
import {
    Tab,
    Tabs,
    Box,
    Typography,
    CssBaseline,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography variant="span">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function Schedule() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ width: '100%', mt: 2 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}
                        centered
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="tab description, rating and comment">
                        <Tab label="Danh sách lịch hẹn" style={{ fontWeight: 'bold' }} {...a11yProps(0)} />
                        <Tab label="Lịch sử" style={{ fontWeight: 'bold' }} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <ScheduleList />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ScheduleCompletedList />
                </TabPanel>
            </Box>
        </ThemeProvider>
    )
}