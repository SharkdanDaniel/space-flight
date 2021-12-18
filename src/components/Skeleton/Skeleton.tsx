import React from 'react';
import styles from './Skeleton.module.scss';
import { Card, Placeholder } from 'react-bootstrap'

const Skeleton = () => {
    return (
        <>
            <Card className={styles.card}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={2} />
                </Card.Body>
            </Card>

            <Card className={styles.card}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={2} />
                </Card.Body>
            </Card>
        </>
    )

}

export default Skeleton
