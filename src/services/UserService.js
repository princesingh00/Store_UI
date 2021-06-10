import axios from 'axios';
import { apiUrl, signin, signup } from "../config/Constant.js";

export default class UserService {

    signin(userDTO) {
        return axios({
            method: "POST",
            url: `${apiUrl}${signin}`,
            data: userDTO
        });
    }

    signup(userDTO) {
        return axios({
            method: "POST",
            url: `${apiUrl}${signup}`,
            data: userDTO
        });
    }
}