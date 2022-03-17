import {useNavigate} from 'react-router-dom';
import useGetAllProduct from '../../hooks/useGetAllProduct';
import {
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Stack,
    Typography,
    CircularProgress
} from '@mui/material';


function Blogs({ images }) {
    const navigate = useNavigate();
    let [loading, products] = useGetAllProduct();

    const handleClick = (id) => {
        navigate(`/detail/${id}`);
    };

    if (loading) return <>
        <h2 style={{ textAlign: "center" }}>Đang tải danh sách sản phẩm dịch vụ</h2>
        <Stack alignItems="center" mt={10} mb={10}>
            <CircularProgress size={80} />
        </Stack>
    </>;
    return (
        <div className="blog">
            <div className="container">
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    mb={8} spacing={2}>
                    {
                        products.map((product, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={product.images[0].url}
                                            alt="product image"
                                        />
                                        <CardContent>
                                            <Typography sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
                                                <a href="/">{product.productName}</a>
                                            </Typography>
                                            <Typography variant="body2" sx={{color: 'rgb(100,100,100)'}}>
                                                {product.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{display:'flex' , alignItems: 'center', justifyContent:'center'}}>
                                            <Button size="small" 
                                            onClick={()=>handleClick(product._id)}
                                            sx={{color: "red"}}>Xem chi tiết</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </div>
    );
}
export default Blogs;