import axios from 'axios';
import { CURRENT_DOMAIN } from '../const/domain';

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