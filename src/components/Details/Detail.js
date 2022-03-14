import post1Img from '../../assets/images/post-1.jpg';
import post2Img from '../../assets/images/post-2.jpg';
import post3Img from '../../assets/images/post-3.jpg';
import userImg from '../../assets/images/user.jpg';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useState } from 'react';
import {
    Tab,
    Tabs,
    Box,
    Grid,
    Rating,
    Button,
    CssBaseline,
    Typography,
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
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
            thumbnailHeight: 50,
            thumbnailWidth: 80
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
            thumbnailHeight: 50,
            thumbnailWidth: 80
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
            thumbnailHeight: 50,
            thumbnailWidth: 80
        },
    ];
    return (
        <>
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
                                            <h2>Lorem ipsum dolor sit amet</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, lorem eu eleifend bibendum, augue purus mollis sapien, non rhoncus eros leo in nunc. Donec a nulla vel turpis consectetur tempor ac vel justo. In hac habitasse platea dictumst. Cras nec sollicitudin eros. Nunc eu enim non turpis sagittis rhoncus consectetur id augue. Mauris dignissim neque felis. Phasellus mollis mi a pharetra cursus. Maecenas vulputate augue placerat lacus mattis, nec ornare risus sollicitudin.
                                            </p>
                                            <p>
                                                Mauris eu pulvinar tellus, eu luctus nisl. Pellentesque suscipit mi eu varius pulvinar. Aenean vulputate, massa eget elementum finibus, ipsum arcu commodo est, ut mattis eros orci ac risus. Suspendisse ornare, massa in feugiat facilisis, eros nisl auctor lacus, laoreet tempus elit dolor eu lorem. Nunc a arcu suscipit, suscipit quam quis, semper augue.
                                            </p>
                                            <p>
                                                Quisque arcu nulla, convallis nec orci vel, suscipit elementum odio. Curabitur volutpat velit non diam tincidunt sodales. Nullam sapien libero, bibendum nec viverra in, iaculis ut eros.
                                            </p>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Box sx={{ p: 2, border: '1px dashed grey', borderRight: 'none' }} style={{ textAlign: "center" }}>
                                                    <Typography variant="p"
                                                        style={{ fontWeight: 'bold' }}>
                                                        Đánh giá dịch vụ
                                                    </Typography><br />
                                                    <Typography variant="h4" style={{ fontWeight: "bold" }}>
                                                        3.5/5<br />
                                                        <Rating name="read-only" precision={0.5} value={3.5} readOnly /><br />
                                                    </Typography>
                                                    <Typography variant="p">
                                                        (4k đánh giá)
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box sx={{ p: 2, border: '1px dashed grey', borderRight: 'none', height: '100%' }}
                                                    style={{ textAlign: "center" }}>
                                                    <Typography variant="p"
                                                        style={{ fontWeight: 'bold' }}>
                                                        Mức độ hài lòng
                                                    </Typography><br />
                                                    <Typography variant="h2" style={{ fontWeight: "bold" }}>
                                                        90%
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box sx={{ p: 2, border: '1px dashed grey', height: '100%' }}
                                                    style={{ textAlign: "center" }}>
                                                    <Typography variant="p"
                                                        style={{ fontWeight: 'bold' }}>
                                                        Hãy để lại góp ý của bạn cho chúng tôi
                                                    </Typography><br />
                                                    <Button variant="contained" style={{ width: '100%' }}>
                                                        Viết đánh giá
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <div className="single-comment">
                                            <h2>3 Comments</h2>
                                            <Grid container className="comment-list" mb={4}>
                                                <Grid item xs={3} className="comment-item"
                                                alignItems="center" justifyContent="center">
                                                    <div className="comment-img">
                                                        <img src={userImg} alt="anh user" />
                                                    </div>
                                                    <h6><a href="/">Josh Dunn</a></h6>
                                                    <span>01/01/2045/12:00pm</span>
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <Rating name="read-only" precision={0.5} value={3.5} readOnly /><br />
                                                    Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                                </Grid>
                                            </Grid>
                                            <Grid container className="comment-list" mb={4}>
                                                <Grid item xs={3} className="comment-item"
                                                alignItems="center" justifyContent="center">
                                                    <div className="comment-img">
                                                        <img src={userImg} alt="anh user" />
                                                    </div>
                                                    <h6><a href="/">Josh Dunn</a></h6>
                                                    <span>01/01/2045/12:00pm</span>
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <Rating name="read-only" precision={0.5} value={3.5} readOnly /><br />
                                                    Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className="comment-form">
                                            <h2>Để lại bình luận</h2>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="name">Name *</label>
                                                    <input type="text" className="form-control" id="name" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email *</label>
                                                    <input type="email" className="form-control" id="email" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="website">Website</label>
                                                    <input type="url" className="form-control" id="website" />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="message">Message *</label>
                                                    <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <input type="submit" value="Post Comment" className="btn btn-custom" />
                                                </div>
                                            </form>
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
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        color="secondary"
                                                        size="large"
                                                        sx={{ mt: 3, mb: 2, borderRadius: 10 }}
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
                                                <a className="nav-link active" data-toggle="pill" href="#featured">Featured</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="pill" href="#popular">Popular</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="pill" href="#latest">Latest</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content">
                                            <div id="featured" className="container tab-pane active">
                                                <div className="post-item">
                                                    <div className="post-img">
                                                        <img src={post1Img} alt="post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="/">Lorem ipsum dolor sit amet consec adipis elit</a>
                                                        <div className="post-meta">
                                                            <p>By<a href="/">Admin</a></p>
                                                            <p>In<a href="/">Web Design</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-item">
                                                    <div className="post-img">
                                                        <img src={post2Img} alt="post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="/">Lorem ipsum dolor sit amet consec adipis elit</a>
                                                        <div className="post-meta">
                                                            <p>By<a href="/">Admin</a></p>
                                                            <p>In<a href="/">Web Design</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-item">
                                                    <div className="post-img">
                                                        <img src={post3Img} alt="post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="/">Lorem ipsum dolor sit amet consec adipis elit</a>
                                                        <div className="post-meta">
                                                            <p>By<a href="/">Admin</a></p>
                                                            <p>In<a href="/">Web Design</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="popular" className="container tab-pane fade">
                                                <div className="post-item">
                                                    <div className="post-img">
                                                        <img src={post1Img} alt="post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="/">Lorem ipsum dolor sit amet consec adipis elit</a>
                                                        <div className="post-meta">
                                                            <p>By<a href="/">Admin</a></p>
                                                            <p>In<a href="/">Web Design</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-item">
                                                    <div className="post-img">
                                                        <img src={post2Img} alt="post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="/">Lorem ipsum dolor sit amet consec adipis elit</a>
                                                        <div className="post-meta">
                                                            <p>By<a href="/">Admin</a></p>
                                                            <p>In<a href="/">Web Design</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-item">
                                                    <div className="post-img">
                                                        <img src={post3Img} alt="post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="/">Lorem ipsum dolor sit amet consec adipis elit</a>
                                                        <div className="post-meta">
                                                            <p>By<a href="/">Admin</a></p>
                                                            <p>In<a href="/">Web Design</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="latest" className="container tab-pane fade">
                                                <div className="post-item">
                                                    <div className="post-img">
                                                        <img src={post1Img} alt="post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="/">Lorem ipsum dolor sit amet consec adipis elit</a>
                                                        <div className="post-meta">
                                                            <p>By<a href="/">Admin</a></p>
                                                            <p>In<a href="/">Web Design</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-item">
                                                    <div className="post-img">
                                                        <img src={post2Img} alt="post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="/">Lorem ipsum dolor sit amet consec adipis elit</a>
                                                        <div className="post-meta">
                                                            <p>By<a href="/">Admin</a></p>
                                                            <p>In<a href="/">Web Design</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-item">
                                                    <div className="post-img">
                                                        <img src={post3Img} alt="post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="/">Lorem ipsum dolor sit amet consec adipis elit</a>
                                                        <div className="post-meta">
                                                            <p>By<a href="/">Admin</a></p>
                                                            <p>In<a href="/">Web Design</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-widget">
                                    <h2 className="widget-title">Categories</h2>
                                    <div className="category-widget">
                                        <ul>
                                            <li><a href="/">National</a><span>(98)</span></li>
                                            <li><a href="/">International</a><span>(87)</span></li>
                                            <li><a href="/">Economics</a><span>(76)</span></li>
                                            <li><a href="/">Politics</a><span>(65)</span></li>
                                            <li><a href="/">Lifestyle</a><span>(54)</span></li>
                                            <li><a href="/">Technology</a><span>(43)</span></li>
                                            <li><a href="/">Trades</a><span>(32)</span></li>
                                        </ul>
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