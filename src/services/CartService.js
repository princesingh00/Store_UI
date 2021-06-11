import axios from 'axios';
import {
    apiUrl,
    addItemCart,
    getCart,
    convertCartToOrder
} from "../config/Constant.js";

export default class CartService {

    addItemToCart(userId, itemId) {
        return axios({
            method: "POST",
            url: `${apiUrl}${addItemCart}/${userId}/${itemId}`,
        });
    }

    getCartByUser(userId) {
        return axios({
            method: "GET",
            url: `${apiUrl}${getCart}/${userId}`,
        });
    }

    convertCartToOrder(cartId, userId) {
        return axios({
            method: "PUT",
            url: `${apiUrl}${convertCartToOrder}/${cartId}/complete/${userId}`,
        });
    }
}