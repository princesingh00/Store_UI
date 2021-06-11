import axios from 'axios';
import {
    apiUrl,
    createOrder,
    getOrdersByUser
} from "../config/Constant.js";

export default class OrderService {

    createOrder(userId, cartId) {
        return axios({
            method: "POST",
            url: `${apiUrl}${createOrder}/${userId}/${cartId}`,
        });
    }

    getOrdersByUser(userId) {
        return axios({
            method: "GET",
            url: `${apiUrl}${getOrdersByUser}/${userId}`,
        });
    }
}