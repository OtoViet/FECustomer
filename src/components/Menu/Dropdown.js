import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const theme = createTheme({
    palette: {
        primary: {
            light: '#ff7961',
            main: '#ffffff',
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
export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <Button
                sx={{textTransform:'none', justifyContent:'flex-start',paddingLeft:0, paddingRight:0, alignItems:'center', display:'flex', fontSize: '1rem'}}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Blog
                <ArrowDropDownIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><NavLink to="/blog" className="dropdown-item">Bài viết</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/detail" className="dropdown-item">Trang chi tiết</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/team" className="dropdown-item">Đội ngũ nhân sự</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/booking" className="dropdown-item">Đặt lịch hẹn</NavLink></MenuItem>
            </Menu>
        </ThemeProvider>
    );
}
