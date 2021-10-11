import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorizatin'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};