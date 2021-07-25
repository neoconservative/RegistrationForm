import axios from 'axios';
import { CURRENT_DOMAIN } from '../const/domain';

export function login(data) {
    return axios.post(`${CURRENT_DOMAIN}/api/auth/login`, data).then(response => {
        return response.data;
    });
}