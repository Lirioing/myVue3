import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Message } from 'element-ui';

const service = axios.create({
    baseURL: process.env.VUE_APP_URL,
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        NProgress.start();
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        NProgress.done();
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject(response.data);
        }
    },
    error => {
        console.log(error);
        Message.error(error.message);
        NProgress.done();
        return Promise.reject(error);
    }
);

export default service;
