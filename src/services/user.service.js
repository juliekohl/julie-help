import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'localhost:3000/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'coworkers?coworker_id=1');
    }

    getUserBoard() {
        return axios.get(API_URL + 'coworkers', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'teams', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'coworkings', { headers: authHeader() });
    }
}

export default new UserService();
