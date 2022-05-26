import { useState, useEffect } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import viLocale from 'date-fns/locale/vi';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import ListStores from '../Mapbox/ListStores.js';
import ComboService from '../ServiceCare/ComboService.js';
import DialogNotify from '../Dialog/DialogNotify.js';
import {
    InputLabel, Box, Button, FormControl, MenuItem, Select,
    Grid, Typography, TextField, Stack, CircularProgress,
    Radio, RadioGroup, FormControlLabel, CssBaseline,
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { DataGrid } from '@mui/x-data-grid';
import useGetAllProduct from '../../hooks/useGetAllProduct';
import { useNavigate, useLocation } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import useGetAllStore from '../../hooks/useGetAllStore.js';
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

const columns = [
    { field: 'id', headerName: 'Thứ tự', width: 80 },
    { field: 'idProduct', headerName: 'Mã sản phẩm', width: 250 },
    {
        field: 'productName',
        headerName: 'Tên dịch vụ',
        width: 400,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Giá tiền',
        width: 200,
        editable: true,
    },
];
function CarePoints() {
    const localeMap = {
        vi: viLocale
    };
    const maskMap = {
        vi: '__/__/____',
    };
    const [loadingStore, stores] = useGetAllStore();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [carePoint, setCarePoint] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [value, setValue] = useState(new Date());
    const [loading, products] = useGetAllProduct();
    const [rows, setRows] = useState();
    const [combo, setCombo] = useState("");
    const [openDiscount, setOpenDiscount] = useState("none");
    const [discount, setDiscount] = useState("");
    const [percentSale, setPercentSale] = useState(0);
    const [text, setText] = useState(null);
    const [priceCombo, setPriceCombo] = useState(0);
    const handleClickDiscount = () => {
        setOpenDiscount("block");
        setText(null);
    };
    const handleChangeDiscount = (event) => {
        setDiscount(event.target.value);
    };
    const handleSubmitDiscount = () => {
        FormApi.getDiscountByCode(discount).then(res => {
            setOpenDiscount("none");
            setPercentSale(res.percentSale);
            setText(`Bạn được giảm ${res.percentSale}% trên tổng hóa đơn`);
        })
        .catch(err => {
            setText(`Mã giảm giá không hợp lệ`);
        });
    };
    const handleChange = (event) => {
        setCarePoint(event.target.value);
    };
    const handlePriceCombo = (value) => {
        setPriceCombo(value);
    };
    const [carSize, setCarSize] = useState("");
    const [selectionModel, setSelectionModel] = useState();
    const handleChangeSizeCar = (event) => {
        setCarSize(event.target.value);
    }
    const handleCloseDialog = (status) => {
        setOpen(status);
    };
    const handleChangeCombo = (comb) => {
        setCombo(comb);
    };
    const navigate = useNavigate();
    useEffect(() => {
        setRows(products.map((product, index) => {
            return {
                id: index + 1,
                idProduct: product._id,
                productName: product.productName,
                price: product.price
            }
        }));
        if (location.state) {
            setSelectionModel(() =>
                products.map((product, index) => {
                    if(product._id===location.state._id){
                        setSelectedRows([{idProduct: location.state._id, id: index+1, productName: location.state.productName, price: location.state.price}]);
                    }
                    return {
                        id: index + 1,
                        idProduct: product._id,
                        productName: product.productName,
                        price: product.price
                    }
                }).filter((r) => r.idProduct === location.state._id).map((r) => r.id));
        }
    }, [products, loading, location.state]);

    if (loading || loadingStore) return <>
        <h2 style={{ textAlign: "center" }}>Đang tải thông tin</h2>
        <Stack alignItems="center" mt={10} mb={10}>
            <CircularProgress size={80} />
        </Stack>
    </>;
    return (
        <div className="location">
            {open ? <DialogNotify open={open}
                handleCloseDialog={handleCloseDialog}
                title="Thông báo"
                content="Các thông tin bên trên là bắt buộc chọn trừ gói combo dịch vụ" /> : null}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-header text-left text-center">
                            <p>Cửa hàng</p>
                            <h2>Địa chỉ cửa hàng OtoViet</h2>
                        </div>
                        <div className="row">
                            {stores.map((store, index) =>
                                <div className="col-md-4" key={index}>
                                    <div className="location-item">
                                        <i className="fa fa-map-marker-alt"></i>
                                        <div className="location-text">
                                            <h3>{store.name}</h3>
                                            <p>{store.address}</p>
                                            <p><strong>Emai:</strong>{store.email}</p>
                                            <p><strong>Liên hệ:</strong>{store.phoneNumber}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="care-point-detail">
                            <h2 className="mb-4 mt-4">Vui lòng chọn các thông tin bên dưới để tiến hành đặt lịch</h2>
                            <h4 className="mt-4 mb-4">Chọn Chi Nhánh</h4>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Địa chỉ</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={carePoint}
                                        label="Địa chỉ"
                                        onChange={handleChange}
                                    >
                                        {
                                            stores.map((store, index) => <MenuItem key={index} value={store.numOfStore}>{store.address}</MenuItem>)
                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                            <h4 className="mt-4 mb-4">Chọn Kích Cỡ Xe</h4>
                            <Typography variant="h6">
                                <AcUnitIcon style={{color: theme.palette.secondary.main}} /> Kích thước xe nhỏ: là các dòng xe mini hay hatchback (VD: Hyundai i10, Kia Morning, Toyota Wigo, Suzuki Celerio,..)
                            </Typography>
                            <Typography variant="h6">
                                <AcUnitIcon style={{color: theme.palette.secondary.main}} /> Kích thước xe vừa: là các dòng xe middle sedan & sedan (VD: Mazda 3, Camry, Toyota Vios, Honda City,...)
                            </Typography>
                            <Typography variant="h6">
                                <AcUnitIcon style={{color: theme.palette.secondary.main}} /> Kích thước xe lớn: là các dòng xe SUV, CUV, MPV hoặc Pickup (VD: CX5-8, Everest, Ford Ranger,Land Rover, Lexus 570,...)
                            </Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={handleChangeSizeCar}
                            >

                                <Grid container>
                                    <Grid item xs={4}>
                                        <Box sx={{ p: 2, border: '1px dashed grey', borderRight: 'none', height: '100%' }}
                                            style={{ textAlign: "center" }}>
                                            <Typography variant="p"
                                                style={{ fontWeight: 'bold' }}>
                                                Kích thước xe(Nhỏ)
                                            </Typography><br />
                                            <FormControlLabel value="carSmall"
                                                control={<Radio checkedIcon={<CheckCircleOutlineIcon />} />}
                                                label="" />
                                            <DirectionsCarIcon sx={{ fontSize: 40 }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{ p: 2, border: '1px dashed grey', borderRight: 'none', height: '100%' }}
                                            style={{ textAlign: "center" }}>
                                            <Typography variant="p"
                                                style={{ fontWeight: 'bold' }}>
                                                Kích thước xe(Vừa)
                                            </Typography><br />
                                            <FormControlLabel value="carMedium"
                                                control={<Radio checkedIcon={<CheckCircleOutlineIcon />} />}
                                                label="" />
                                            <DirectionsCarIcon sx={{ fontSize: 50 }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{ p: 2, border: '1px dashed grey', height: '100%' }}
                                            style={{ textAlign: "center" }}>
                                            <Typography variant="p"
                                                style={{ fontWeight: 'bold' }}>
                                                Kích thước xe(Lớn)
                                            </Typography><br />
                                            <FormControlLabel value="carLarge"
                                                control={<Radio checkedIcon={<CheckCircleOutlineIcon />} />}
                                                label="" />
                                            <DirectionsCarIcon sx={{ fontSize: 60 }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </RadioGroup>
                            <h4 className="mt-4 mb-4">Chọn Combo Rửa Và Chăm Sóc Xe</h4>

                            <ComboService combo={handleChangeCombo} priceCombo={handlePriceCombo} listProduct={products} />

                            <h4 className="mt-4 mb-4">Chọn Dịch Vụ</h4>
                            <div style={{ height: 420, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    selectionModel={selectionModel}
                                    rowsPerPageOptions={[5]}
                                    checkboxSelection
                                    localeText={{
                                        footerRowSelected: (count) => `${count} dịch vụ được chọn`,
                                    }}
                                    onSelectionModelChange={(ids) => {
                                        setSelectionModel(ids);
                                        const selectedIDs = new Set(ids);
                                        const selectedRows = rows.filter((row) =>
                                            selectedIDs.has(row.id),
                                        );
                                        setSelectedRows(selectedRows);
                                        console.log(selectedRows);
                                    }}
                                />
                            </div>
                            <h4 className="mt-4 mb-4">Chọn Thời Gian</h4>
                            <LocalizationProvider
                                locale={localeMap["vi"]}
                                dateAdapter={AdapterDateFns}>
                                <MobileDateTimePicker
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    label="Chọn thời gian"
                                    onError={console.log}
                                    minDate={new Date()}
                                    inputFormat="dd/MM/yyyy hh:mm a"
                                    mask={maskMap["vi"]}
                                    renderInput={(params) => <TextField fullWidth {...params} />}
                                />
                            </LocalizationProvider>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <Button sx={{ mt: 4 }} color="secondary"
                                onClick={handleClickDiscount}>
                                    Bạn có mã khuyến mãi?
                                </Button><br />
                                <Box sx={{display: openDiscount,mt:1}}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Mã khuyến mãi"
                                        variant="outlined"
                                        onChange={handleChangeDiscount}
                                        value={discount}
                                    />
                                    <Button sx={{mt:1, ml:2}} color="secondary"
                                    onClick={handleSubmitDiscount}>
                                        Xác nhận
                                    </Button>
                                </Box>
                            </ThemeProvider>
                            {text? <h6>{text}</h6>: null}
                            <button className="btn btn-custom mt-4 mb-4"
                                onClick={() => {
                                    let dataSend = {};
                                    dataSend.combo = combo;
                                    dataSend.carSize = carSize;
                                    dataSend.carePoint = carePoint;
                                    dataSend.listServiceChoose = selectedRows;
                                    console.log(selectedRows);
                                    dataSend.time = value;
                                    dataSend.priceCombo = priceCombo;
                                    dataSend.percentSale = percentSale;
                                    if (dataSend.carSize === "" || dataSend.carePoint === "" ||
                                        dataSend.listServiceChoose.length === 0 || dataSend.time === "") {
                                        setOpen(true);
                                    }
                                    else navigate("/contactAndPreview", { state: dataSend });
                                }}>Tiếp tục </button>
                        </div>
                        <div className="care-point-detail section-header">
                            <h2 className="mb-4 mt-4">Danh sách và địa chỉ chi tiết</h2>
                        </div>
                        <ListStores />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CarePoints;