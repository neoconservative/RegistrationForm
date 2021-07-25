import axios from 'axios';
import { CURRENT_DOMAIN } from '../constants/domain';

export function getUser(token) {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + token.token
        },
    };

    return axios.get(`${CURRENT_DOMAIN}/api/auth/getuser`, config).then(response => {
        return response.data;
    });
}

export function addPhone(token, data) {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + token.token
        },
    };

    return axios.put(`${CURRENT_DOMAIN}/api/profile/phonenumber`, data, config).then(response => {
        return response.data;
    });
}

export function removePhone(token) {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + token.token
        },
    };

    return axios.delete(`${CURRENT_DOMAIN}/api/profile/phonenumber`, config).then(response => {
        return response.data;
    });
}