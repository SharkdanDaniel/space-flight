import React from 'react';
import styles from './Article.module.scss';
import { articleService } from './../../services/Article.service';
import Header from './../../components/Header/Header';
import { ArticleProps } from './../../models/Article.model';
import format from 'date-fns/format';
import { Button } from 'react-bootstrap';
import Skeleton from '../../components/Skeleton/Skeleton';
import ArticleModal from '../../components/ArticleModal/ArticleModal';

const Article = () => {
    const [articles, setArticles] = React.useState<ArticleProps[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [hiddenLoading, setHiddenLoading] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [itemModal, setItemModal] = React.useState<ArticleProps>(null!);
    const [start, setStart] = React.useState(0);
    const [inputSearchValue, setInputSearchValue] = React.useState('');
    const [limit] = React.useState(2);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [order, setOrder] = React.useState('desc');
    const [emptyMessage, setEmptyMessage] = React.useState(false);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);


    const handleModal = (item: ArticleProps) => {
        setItemModal(item);
        setShowModal(true);
    }

    const handleOrder = (order: string) => {
        setOrder(order);
        loadArticles(false, true, order);
    }

    const searchArticle = async (terms: string) => {
        const search = `&_title_contains=${terms}`;
        setInputSearchValue(search || '');
        setStart(0);
        loadArticles(false, true, undefined, terms ? search : undefined);
    }

    const loadArticles = async (loadMore = false, hiddenLoading = false, orderChanged?: string, search?: string) => {
        const params = `?_start=${loadMore ? start + limit : start}&_limit=${limit}&_sort=publishedAt:${orderChanged || order}${search || inputSearchValue || ''}`;
        loadMore && setStart((value) => value + limit);
        setLoading(true);
        hiddenLoading && setHiddenLoading(true);
        try {
            const result = await articleService.getArticles(params);
            loadMore ? setArticles((value) => [...value, ...result.data]) : setArticles(result.data);
            setEmptyMessage(!result?.data?.length);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
            hiddenLoading && setHiddenLoading(false);
        }
    }

    React.useEffect(() => {
        loadArticles();
    }, [])

    return (
        <>
            <Header search={(value: any) => searchArticle(value)} setOrder={(value: any) => handleOrder(value)} />
            <main className='container pb-3'>
                {!hiddenLoading && articles.map((item, index) => (
                    <div className={styles.articleContainer} key={item.id}>
                        {windowWidth > 768 && index % 2 === 0 && (
                            <div className={styles.imgContainer + ' me-5'}>
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                        )}
                        {windowWidth <= 768 && (
                            <div className={styles.imgContainer + ' me-5'}>
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                        )}
                        <div className={styles.content}>
                            <div>
                                <h4 className={styles.title}>{item.title}</h4>
                                <span className={styles.date}>{format(new Date(item.publishedAt), 'dd/MM/yyyy')}</span>
                                <div className={styles.summaryContainer}>
                                    <p>{item.summary}</p>
                                </div>
                            </div>
                            <Button variant="primary" color='white' className={styles.modalButton} onClick={() => handleModal(item)}>Ver Mais</Button>
                        </div>
                        {windowWidth > 768 && index % 2 !== 0 && (
                            <div className={styles.imgContainer + ' ms-5'}>
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                        )}
                    </div>
                ))}
                {loading && <Skeleton />}
                {(articles.length && !loading) ? (
                    <div className={styles.loadMore}>
                        <Button variant="outline-primary" color='white' onClick={() => loadArticles(true)}>Carregar mais</Button>
                    </div>
                ) : null}
                {emptyMessage && <p className={styles.emptyMessage}>Nenhum artigo encontrado</p>}
                <ArticleModal item={itemModal} showModal={showModal} setShowModal={(value: any) => setShowModal(value)} />
            </main>
        </>

    )

}

export default Article
