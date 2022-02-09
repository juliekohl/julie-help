import axios from 'axios';
import ResponseData from "@/types/ResponseData";

const API_URL = 'http://localhost:3000/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                email: user.email,
                password: user.password
            })
            .then((response: ResponseData) => {
                if (response.data) {
                    localStorage.setItem('user', JSON.stringify({
                            id: response.data.id,
                            name: response.data.name
                        })
                    );
                }
            });
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
