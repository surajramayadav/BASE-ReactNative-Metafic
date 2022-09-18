import axios from "axios";
import { URL } from "../utils";


interface Para {
    URL: string
    path: string,
    method: string,
    data: object,
    config: object,
    navigation: any
    nourl: boolean
}

class Api {
    constructor() { }

    static async Calls({ path, method, data, config, navigation, nourl }: Para) {
        let res: any = [];
        try {
            switch (method) {
                case "GET":
                    if (nourl) {
                        res = await axios.get(`${path}`, config);
                    } else {
                        res = await axios.get(`${URL}/${path}`, config);
                    }
                    return res;
                    break;
                case "POST":
                    res = await axios.post(`${URL}/${path}`, data, config);
                    return res;
                    break;
                case "PUT":
                    res = await axios.put(`${URL}/${path}`, data, config);
                    return res;
                    break;
                case "DELETE":
                    res = await axios.delete(`${URL}/${path}`, data, config);
                    return res;
                    break;
                default:
                    break;
            }
        } catch (e) {
            // console.log()
            return { status: "400", msg: e };
        }
    }
}

export default Api;
