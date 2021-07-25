import axios from 'axios';
import { CURRENT_DOMAIN } from '../const/domain';

export function register(data) {
    return axios.post(`${CURRENT_DOMAIN}/api/auth/registration`, data).then(response => {
        return response.data;
    });
}