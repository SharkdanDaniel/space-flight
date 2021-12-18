import axios from 'axios';
import { API_URL } from '../enviroment';

const getArticles = async (params?: string) => {
    return axios.get(`${API_URL}/articles${params || ''}`)
}

export const articleService = {
    getArticles
}
