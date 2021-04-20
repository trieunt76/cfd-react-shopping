import { DOMAIN } from './';
const authAPI = {};

authAPI.login = (data) => {
    return fetch(`${DOMAIN}/elearning/v4/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
};

export default authAPI;
