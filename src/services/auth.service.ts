import axios from 'axios';
import ResponseData from "@/types/ResponseData";

const API_URL = 'http://localhost:3000/';

class AuthService {
    async login(user) {
        const response: ResponseData = await axios
            .post(API_URL + 'login', {
                email: user.email,
                password: user.password
            });

        if (response.data) {
            localStorage.setItem('user', JSON.stringify({
                    id: response.data.id,
                    name: response.data.name
                })
            );

            return response.data;
        }
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'coworkers', {
            coworking_id: 1,
            name: user.name,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();
