import axios from 'axios';
import { CURRENT_DOMAIN } from '../const/domain';

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