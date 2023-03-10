import FormApi from '../api/formApi.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentHost } from '../utils/path.js';

function useGetOrderById(id) {
    const navigate = useNavigate();
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const getOrder = () => {
        FormApi.getOrderById(id).then((orderRes) => {
            setOrder(orderRes);
            setLoading(false)
        })
        .catch((error) => {
            console.log(error);
            navigate(`${currentHost()}/login`);
        });
    };
    useEffect(() => {
        getOrder();
    }, []);
    return [loading, order];
}
export default useGetOrderById;