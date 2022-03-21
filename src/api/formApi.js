import axiosClient from './axiosClient';
const formApi={
    signUp:function(body){
        const url ='/auth/signUp';
        return axiosClient.post(url,body);
    },
    existAccount:function(body){
        const url ='/auth/checkExistAccount';
        return axiosClient.post(url,body);
    },
    checkPassword: function(body){
        const url ='/auth/checkPassword';
        return axiosClient.post(url,body);
    },
    login:function(body){
        const url ='/auth/login';
        return axiosClient.post(url,body);
    },
    loginGoogle:function(body){
        const url ='/auth/loginGoogle';
        return axiosClient.post(url,body);
    },
    api:function(params){
        const url ='/api';
        return axiosClient.get(url,{
            body:params,
            baseURL: 'http://localhost:4000'
        });
    },
    token: function(body){
        const url ='/auth/token';
        return axiosClient.post(url,body);
    },
    logout: function(){
        const url ='/auth/logout';
        return axiosClient.delete(url);
    },
    forgotPassword: function(body){
        const url ='/auth/forgotPassword';
        return axiosClient.patch(url,body);
    },
    checkTokenResetPassword: function(body){
        const url ='/auth/checkTokenResetPassword';
        return axiosClient.post(url,body);
    },
    resetPassword: function(body){
        const url ='/auth/resetPassword';
        return axiosClient.post(url,body);
    },
    changePassword: function(body){
        const url ='/auth/changePassword';
        return axiosClient.patch(url,body);
    },
    getAllProduct: function(){
        const url ='/customer/getAllProduct';
        return axiosClient.get(url);
    },
    getProductById: function(id){
        const url ='/customer/getProductById/'+id;
        return axiosClient.get(url);
    },
    getInfoCustomer: function(body){
        const url ='/customer/getInfoCustomer';
        return axiosClient.get(url,body);
    },
    createOrder: function(body){
        const url ='/order/createOrder';
        return axiosClient.post(url,body);
    },
    getAllOrder: function(){
        const url ='/order/getAllOrder';
        return axiosClient.get(url);
    }
}
export default formApi;