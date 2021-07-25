import axios from 'axios';
import { CURRENT_DOMAIN } from '../constants/domain';

export function login(data) {
    return axios.post(`${CURRENT_DOMAIN}/api/auth/login`, data).then(response => {
        return response.data;
    });
}

export function register(data) {
    return axios.post(`${CURRENT_DOMAIN}/api/auth/registration`, data).then(response => {
        return response.data;
    });
}