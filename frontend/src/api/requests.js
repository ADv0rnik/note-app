import axios from 'axios';
import {API_URLS, BASE_URL} from "../constants.js";


export const getNotes = async () => {
    try {
        const response = await axios.get(`${BASE_URL}${API_URLS.NOTES}`);
        return response.data;
    } catch (error) {
        console.log(error.toJSON());
        return [];
    }
};


export const createNote = async (body) => {
    try {
        const response = await axios.post(`${BASE_URL}${API_URLS.NOTE}`, body);
        return response.data;
    } catch (error) {
        console.log(error.toJSON());
        return [];
    }
};