import React from 'react';
import sytles from './Article.module.scss';
import { articleService } from './../../services/Article.service';

const Article = () => {

    const getArticlesCount = async () => {
        try {
            const result = await articleService.getArticlesCount();
            console.log(result.data);
        } catch (error) {
            throw error;
        }
    }

    const getArticles = async (params?: string) => {
        try {
            const result = await articleService.getArticles(params);
            console.log(result.data);
        } catch (error) {
            throw error;
        }
    }

    React.useEffect(() => {
        // getArticlesCount();
        // getArticles();
    }, [])
    return (
        <div>
            Articles
        </div>
    )
}

export default Article
