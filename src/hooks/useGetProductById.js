import FormApi from '../api/formApi.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentHost } from '../utils/path.js';

function useGetProductById(id) {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const getProduct = () => {
        FormApi.getProductById(id).then((productRes) => {
            setProduct(productRes);
            setLoading(false)
        })
        .catch((error) => {
            console.log(error);
            navigate(`${currentHost()}/login`);
        });
    };
    useEffect(() => {
        getProduct();
    }, []);
    return [loading, product];
}
export default useGetProductById;