import api from "./api";

export default {
    getCities: () => api.get(`get-cities`),
    getScheduler: (payload: any) => api.post(`get-imsak`, payload),
}