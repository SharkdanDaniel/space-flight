import React from 'react';
import styles from './Article.module.scss';
import { articleService } from './../../services/Article.service';
import Header from './../../components/Header/Header';
import { ArticleProps } from './../../models/Article.model';

const Article = () => {
    const [articles, setArticles] = React.useState<ArticleProps[]>([]);

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
            setArticles(result.data);
        } catch (error) {
            throw error;
        }
    }

    React.useEffect(() => {
        getArticles();
    }, [])
    return (
        <>
            <Header />
            <main className='container'>
                {articles.map((item, index) => (
                    <div className='d-flex'>
                        <img src={item.imageUrl} alt={item.title} width={'auto'} height={200} />
                        <div>
                            <h4>{item.title}</h4>
                            <span>{item.publishedAt}</span>
                            <p>{item.summary}</p>

                        </div>
                    </div>
                ))}
            </main>
        </>

    )

}

export default Article
