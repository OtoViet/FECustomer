import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useParams, useNavigate } from 'react-router-dom';
import useGetAllProduct from '../../hooks/useGetAllProduct';
import useGetProductById from '../../hooks/useGetProductById';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Dialog from '../Dialog/DialogRedirectUrl';
import {
    Tab,
    Tabs,
    Avatar,
    Box,
    Table,
    TableCell,
    TableBody,
    TableContainer,
    TableFooter,
    TablePagination,
    TableRow,
    Paper,
    IconButton,
    CardMedia,
    Grid,
    Stack,
    Rating,
    Button,
    Typography,
    CssBaseline,
    CircularProgress,
} from '@mui/material';
import { tableCellClasses } from "@mui/material/TableCell";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Detail() {
    const params = useParams();
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [contenDialog, setContenDialog] = useState('');
    let [loading, product] = useGetProductById(params.id);
    let [loadingAllProduct, allProduct] = useGetAllProduct();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [rowRating, setRowRating] = useState([]);
    const [data, setData] = useState([]);
    const [rating, setRating] = useState(0);
    const [dataRating, setDataRating] = useState([]);
    const [allProductSortByPriceAsc, setAllProductSortByPriceAsc] = useState([]);
    const [allProductSortByPriceDesc, setAllProductSortByPriceDesc] = useState([]);
    const [allProductSortByLatest, setAllProductSortByLatest] = useState([]);
    const ratingSchema = Yup.object().shape({
        content: Yup.string().required('Vui lòng nhập nội dung bình luận'),
        star: Yup.number().required('Vui lòng chọn số sao đánh giá'),
    });

    const formik = useFormik({
        initialValues: {
            content: '',
            star: 5,
        },
        validationSchema: ratingSchema,
        onSubmit: (values) => {
            FormApi.rating(params.id, values).then(res => {
                console.log(res);
                setOpen(true);
                setData(res);
                setDataRating(res.rating);
                setContenDialog("Bạn đã đánh giá thành công");
            }).catch(err => {
                setOpen(true);
                setContenDialog("Bạn đã đánh giá thất bại do bạn đã đánh giá trước đó hoặc chưa sử dụng dịch vụ hoặc do bạn chưa đăng nhập!");
            });

        },
    });
    
    useEffect(() => {
        let total = 0;
        if (product.rating) {
            if (product.rating.length > 0) {
                product.rating.forEach(element => {
                    total += element.rating;
                });
                setRating(total / product.rating.length);
            }
        }
        setData(product);
        setDataRating(product.rating);
        setRowRating((product.rating ? product.rating.length : 0));
        setAllProductSortByLatest(allProduct.sort((a, b) => {
            let dateA = new Date(a.createdAt);
            let dateB = new Date(b.createdAt);
            return dateA > dateB ? -1 : 1;
        }).slice(0, 5));

        setAllProductSortByPriceDesc(allProduct.sort((a, b) => {
            return a.price > b.price ? -1 : 1;
        }).slice(0, 5));

        setAllProductSortByPriceAsc(allProduct.sort((a, b) => {
            return a.price > b.price ? 1 : -1;
        }).slice(0, 5))

    }, [loading, product.rating,allProduct]);

    const handleCloseDialog = (status) => {
        setOpen(status);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleHideCommentForm = e => {
        e.preventDefault();
        document.getElementById('comment-form').classList.add('d-none');
    };
    const handleShowFormComment = () => {
        document.getElementById('comment-form').classList.remove('d-none');
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleClick = () => {
        navigate('/booking', { state: product });
    };
    if (loading || loadingAllProduct) return <>
        <h2 style={{ textAlign: "center" }}>Đang tải thông tin dịch vụ</h2>
        <Stack alignItems="center" mt={10} mb={10}>
            <CircularProgress size={80} />
        </Stack>
    </>;
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowRating) : 0;
    const images = product.images.map(image => {
        return {
            original: image.url,
            thumbnail: image.url,
            thumbnailHeight: 50,
            thumbnailWidth: 80
        }
    });
    return (
        <>
            {open ? <Dialog open={open}
                handleCloseDialog={handleCloseDialog}
                title="Thông báo"
                content={contenDialog} /> : null}
            <div className="single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <ImageGallery items={images}
                                showIndex={true} />
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <Box sx={{ width: '100%', mt: 2 }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={value} onChange={handleChange}
                                            textColor="secondary"
                                            indicatorColor="secondary"
                                            aria-label="tab description, rating and comment">
                                            <Tab label="Thông tin dịch vụ" style={{ fontWeight: 'bold' }} {...a11yProps(0)} />
                                            <Tab label="Bình luận đánh giá" style={{ fontWeight: 'bold' }} {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>
                                    <TabPanel value={value} index={0}>
                                        <div className="single-content">
                                            <h2>{product.productName}</h2>
                                            <div style={{ whiteSpace: "pre-line" }}>
                                                {product.description}
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Grid container>
                                            <Grid item xs={12} md={4}>
                                                <Box sx={{ p: 2, border: '1px dashed grey', }} style={{ textAlign: "center" }}>
                                                    <Typography variant="p"
                                                        style={{ fontWeight: 'bold' }}>
                                                        Đánh giá dịch vụ
                                                    </Typography><br />
                                                    <Typography variant="h4" style={{ fontWeight: "bold" }}>
                                                        {Math.round(rating * 10) / 10}/5<br />
                                                        <Rating name="read-only" precision={0.5} value={rating} readOnly /><br />
                                                    </Typography>
                                                    <Typography variant="p">
                                                        ({dataRating.length} đánh giá)
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <Box sx={{ p: 2, border: '1px dashed grey', height: '100%' }}
                                                    style={{ textAlign: "center" }}>
                                                    <Typography variant="p"
                                                        style={{ fontWeight: 'bold' }}>
                                                        Mức độ hài lòng
                                                    </Typography><br />
                                                    <Typography variant="h2" style={{ fontWeight: "bold" }}>
                                                        {parseInt((rating / 5) * 100)}%
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <Box sx={{ p: 2, border: '1px dashed grey', height: '100%' }}
                                                    style={{ textAlign: "center" }}>
                                                    <Typography variant="p"
                                                        style={{ fontWeight: 'bold' }}>
                                                        Hãy để lại góp ý của bạn cho chúng tôi
                                                    </Typography><br />
                                                    <Button variant="contained"
                                                        sx={{ mt: 2 }}
                                                        color="secondary" style={{ width: '100%' }}
                                                        onClick={handleShowFormComment}>
                                                        Viết đánh giá
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <div className="comment-form d-none" id="comment-form">
                                            <h2>Bình luận và đánh giá</h2>
                                            <form onSubmit={formik.handleSubmit} noValidate>
                                                <Rating
                                                    name="rating"
                                                    size="large"
                                                    value={formik.values.star}
                                                    sx={{
                                                        fontSize: "3rem",
                                                    }}
                                                    onChange={(event, newValue) => {
                                                        formik.setFieldValue('star', newValue);
                                                    }}
                                                />
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    multiline
                                                    maxRows={4}
                                                    minRows={2}
                                                    type="textA"
                                                    fullWidth
                                                    id="content"
                                                    label="Nội dung bình luận"
                                                    name="content"
                                                    autoFocus
                                                    value={formik.values.content}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    error={formik.touched.content && Boolean(formik.errors.content)}
                                                    helperText={formik.touched.content && formik.errors.content}
                                                />
                                                <div className="form-group d-flex justify-content-between">
                                                    <button className="btn btn-custom" onClick={handleHideCommentForm}>Hủy bỏ</button>
                                                    <input type="submit" value="Gửi bình luận" className="btn btn-custom" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="single-comment mt-4">
                                            <h2>Có {dataRating ? dataRating.length : 0} bình luận</h2>
                                            <TableContainer component={Paper}>
                                                <Table sx={{
                                                    [`& .${tableCellClasses.root}`]: {
                                                        borderBottom: "none"
                                                    }
                                                }}
                                                    aria-label="custom pagination table">
                                                    <TableBody>
                                                        {(rowsPerPage > 0
                                                            ? dataRating.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                            : dataRating
                                                        ).map((row, index) => (
                                                            <TableRow key={index}>
                                                                <TableCell style={{ width: 150 }}>
                                                                    <div className="comment-img">
                                                                        <Avatar alt="anh user" src={data.infoUserComment[index].image}
                                                                            sx={{ width: 56, height: 56 }} />
                                                                    </div>
                                                                    <h6><a href="/">{data.infoUserComment[index].fullName}</a></h6>
                                                                    <span>{new Date(row.createdAt).toLocaleDateString("vi-VN")}-
                                                                        {new Date(row.createdAt).getHours()}:{new Date(row.createdAt).getMinutes()}</span>
                                                                </TableCell>
                                                                <TableCell align="inherit" style={{ width: 400 }}>
                                                                    <Rating name="read-only" precision={0.5} value={row.rating} readOnly /><br />
                                                                    {row.comment}
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                        {emptyRows > 0 && (
                                                            <TableRow style={{ height: 53 * emptyRows }}>
                                                                <TableCell colSpan={6} />
                                                            </TableRow>
                                                        )}
                                                    </TableBody>
                                                    <TableFooter>
                                                        <TableRow>
                                                            <TablePagination
                                                                rowsPerPageOptions={[]}
                                                                colSpan={3}
                                                                count={dataRating.length}
                                                                rowsPerPage={rowsPerPage}
                                                                page={page}
                                                                labelDisplayedRows={({ from, to, count }) => `${from}-${to} trong ${count}`}
                                                                onPageChange={handleChangePage}
                                                                onRowsPerPageChange={handleChangeRowsPerPage}
                                                                ActionsComponent={TablePaginationActions}
                                                            />
                                                        </TableRow>
                                                    </TableFooter>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                    </TabPanel>
                                </Box>
                            </ThemeProvider>

                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-widget">
                                    <div className="single-bio">
                                        <div className="single-bio-text">
                                            <h3>Đặt lịch hẹn ngay với otoviet</h3>
                                            <p className="text-danger font-weight-bold">Với hệ thống đặt lịch chăm sóc xe hàng đầu Việt Nam</p>
                                            <p className="mt-5">
                                                Hãy đặt lịch rửa xe và chăm sóc với chúng tôi chỉ trong vòng 3 phút.
                                                Xe của bạn sẽ được ưu tiên rửa xe ngay khi đến OtoViet trong thời gian đặt lịch
                                            </p>
                                            <div className="ml-auto mt-5">
                                                <ThemeProvider theme={theme}>
                                                    <Button
                                                        type="button"
                                                        fullWidth
                                                        variant="contained"
                                                        color="secondary"
                                                        size="large"
                                                        sx={{ mt: 3, mb: 2, borderRadius: 10 }}
                                                        onClick={handleClick}
                                                    >
                                                        Đặt lịch ngay
                                                    </Button>
                                                </ThemeProvider>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-widget">
                                    <h2 className="widget-title">Một số dịch vụ khác</h2>

                                </div>

                                <div className="sidebar-widget">
                                    <div className="tab-post">
                                        <ul className="nav nav-pills nav-justified">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="pill" href="#featured">Giá rẻ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="pill" href="#popular">Giá cao</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="pill" href="#latest">Mới nhất</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content">
                                            <div id="featured" className="container tab-pane active">
                                                {
                                                    allProductSortByPriceAsc.map((product, index) => {
                                                        return (

                                                            <div className="post-item" key={index}>
                                                                <div className="post-img">
                                                                    <CardMedia
                                                                        component="img"
                                                                        height="60"
                                                                        image={product.images[0].url}
                                                                        alt="dich vu"
                                                                    />
                                                                </div>
                                                                <div className="post-text">
                                                                    <a href={`/detail/${product.id}`}
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            navigate(`/detail/${product.id}`);
                                                                        }}
                                                                    >{product.productName}</a>
                                                                    <div className="post-meta">
                                                                        <p>Giá dịch vụ {
                                                                            product.price.toLocaleString('vi-VN', {
                                                                                style: 'currency',
                                                                                currency: 'VND',
                                                                            })}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div id="popular" className="container tab-pane fade">
                                                {
                                                    allProductSortByPriceDesc.map((product, index) => {
                                                        return (

                                                            <div className="post-item" key={index}>
                                                                <div className="post-img">
                                                                    <CardMedia
                                                                        component="img"
                                                                        height="60"
                                                                        image={product.images[0].url}
                                                                        alt="dich vu"
                                                                    />
                                                                </div>
                                                                <div className="post-text">
                                                                    <a href={`/detail/${product.id}`}
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            navigate(`/detail/${product.id}`);
                                                                        }}>{product.productName}</a>
                                                                    <div className="post-meta">
                                                                        <p>Giá dịch vụ {
                                                                            product.price.toLocaleString('vi-VN', {
                                                                                style: 'currency',
                                                                                currency: 'VND',
                                                                            })}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div id="latest" className="container tab-pane fade">
                                                {
                                                    allProductSortByLatest.map((product, index) => {
                                                        return (

                                                            <div className="post-item" key={index}>
                                                                <div className="post-img">
                                                                    <CardMedia
                                                                        component="img"
                                                                        height="60"
                                                                        image={product.images[0].url}
                                                                        alt="dich vu"
                                                                    />
                                                                </div>
                                                                <div className="post-text">
                                                                    <a href={`/detail/${product.id}`}
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            navigate(`/detail/${product.id}`);
                                                                        }}>{product.productName}</a>
                                                                    <div className="post-meta">
                                                                        <p>Giá dịch vụ {
                                                                            product.price.toLocaleString('vi-VN', {
                                                                                style: 'currency',
                                                                                currency: 'VND',
                                                                            })}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Detail;