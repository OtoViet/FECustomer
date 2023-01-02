import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useGetAllProduct from '../../hooks/useGetAllProduct';
import Pagination from '../Pagination/Pagination';
import { currentHost } from '../../utils/path';

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
    const [pages, setPages] = useState(1);
    const handleClick = (id) => {
        navigate(`${currentHost()}/detail/${id}`);
    };
    const handleClickPagination = (value) => {
        setPages(value);
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
                        products.slice(pages * 6 - 6, pages * 6)
                        .map((product, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card>
                                        <CardMedia
                                            style={{cursor:"pointer"}}
                                            onClick={()=>handleClick(product._id)}
                                            component="img"
                                            height="200"
                                            image={product.images[0].url}
                                            alt="product image"
                                        />
                                        <CardContent>
                                            <Typography sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
                                                <a style={{cursor:"pointer"}} 
                                                href="/"
                                                onClick={(e)=>{
                                                    e.preventDefault();
                                                    handleClick(product._id);
                                                }}>{product.productName}</a>
                                            </Typography>
                                            <Typography variant="body2" sx={{color: 'rgb(100,100,100)'}}>
                                                {product.description.length > 100 ? 
                                                product.description.substring(0, 90) + "..." : product.description}
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
                <Pagination count={Math.ceil(products.length/6)} onClick={handleClickPagination}/>
            </div>
        </div>
    );
}
export default Blogs;