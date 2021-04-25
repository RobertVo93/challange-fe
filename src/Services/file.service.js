const axios = require("axios");

const axiosConfig = {
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
        common: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }
}

export function generateRandomObjectsFile() {
    return axios({
        method: "put",
        url: `${process.env.REACT_APP_API_ENDPOINT}/uploads`,
        ...axiosConfig
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
}

export function downloadFile(fileName) {
    return axios({
        method: "get",
        url: `${process.env.REACT_APP_API_ENDPOINT}/uploads/${fileName}`,
        ...axiosConfig
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
}