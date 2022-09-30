import axios from "axios";

export default {
    get: (url: string, payload = {}) => {
        return axios.get(url, { ...payload })
            .then((response: any) => Promise.resolve(response))
    },
    post: (url: string, payload = {}) => {
        return axios.post(url, payload )
            .then((response: any) => Promise.resolve(response))
    },
}