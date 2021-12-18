import React from 'react';
import styles from './ArticleModal.module.scss';
import { Button, Modal } from 'react-bootstrap';
import { ArticleProps } from './../../models/Article.model';
import format from 'date-fns/format';
import Image from 'react-bootstrap/Image';

interface ModalProps {
    item: ArticleProps;
    showModal: boolean;
    setShowModal: (value: boolean) => void
}

const ArticleModal = ({ item, showModal, setShowModal }: ModalProps) => {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName={styles.container} size="lg" centered>
            <Modal.Body className={styles.body}>
                <div className={styles.wrapperContent}>
                    <div className={styles.imgContainer}>
                        <Image src={item?.imageUrl} height="auto" width="100%" />
                    </div>
                    <div className={styles.content}>
                        <h4 className={styles.title}>{item?.title}</h4>
                        {item && <span className={styles.date}>{format(new Date(item?.publishedAt), 'dd/MM/yyyy')}</span>}
                        <p className={styles.summary}>{item?.summary}</p>
                    </div>
                </div>
                <div className={styles.button}>
                    <Button variant="primary" color='white' size='lg'>
                        <a href={item?.url}>Ir para o site</a>
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ArticleModal
