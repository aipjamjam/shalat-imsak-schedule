import axios from "axios";

export default {
    get: (url: string, payload = {}) => {
        return axios.get(url, { ...payload })
            .then(response => Promise.resolve(response.data))
    },
    post: (url: string, payload = {}) => {
        return axios.get(url, payload )
            .then(response => Promise.resolve(response.data))
    },
}