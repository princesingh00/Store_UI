import axios from 'axios';
import {
    apiUrl,
    getAllItems
} from "../config/Constant.js";

export default class ItemService {

    getAllItems() {
        return axios({
            method: "GET",
            url: `${apiUrl}${getAllItems}`
        });
    }
}