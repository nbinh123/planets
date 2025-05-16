// const axios = require("axios");
import axios from "axios"

async function getAPI(port = 5000, url, id = "", paramCondition) {
    const fullUrl = `http://localhost:${port}${url}${id ? `/${id}` : ""}`;

    try {
        const response = await axios.get(fullUrl, {
            params: paramCondition,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error(error); // Sử dụng console.error để log lỗi rõ ràng hơn
        throw error; // Có thể throw để xử lý tiếp tục bên ngoài nếu cần
    }
}

async function postAPI(port = 5000, url, id, data = {}) {
    const fullUrl = `http://localhost:${port}${url}${id ? `/${id}` : ""}`;

    const response = await axios.post(fullUrl, data)
    return response.data;
}
const customedAxios = {
    get: getAPI,
    post: postAPI
}

export default customedAxios;