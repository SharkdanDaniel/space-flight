import axios from 'axios';
import { API_URL } from '../enviroment';

const getArticlesCount = async () => {
    return axios.get(`${API_URL}/articles/count`)
}

const getArticles = async (params?: string) => {
    return axios.get(`${API_URL}/articles/${params || ''}`)
}

const getArticleById = async (id: number) => {
    return axios.get(`${API_URL}/articles/${id}`)
}

export const articleService = {
    getArticlesCount,
    getArticles
}
