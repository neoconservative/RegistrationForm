import axios from 'axios';
import { CURRENT_DOMAIN } from '../const/domain';

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