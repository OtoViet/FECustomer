import Pagi from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function Pagination(props) {
    
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
    return (
        <>
            <ThemeProvider theme={theme} >
                <CssBaseline />
                <Pagi  count={props.count} variant="outlined" color="secondary"
                style={{display:"flex", justifyContent: "center",alignItems:"center"}} 
                onChange={(e, value)=>{
                    e.preventDefault();
                    props.onClick(value);
                }}
                />
            </ThemeProvider>
        </>
    );
}
export default Pagination;