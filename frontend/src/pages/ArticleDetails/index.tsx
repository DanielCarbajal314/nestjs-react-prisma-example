import { Card, Col, Flex, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useArticleByIdQuery } from './useArticleQuery';

export function ArticleDetails() {
    const { articleId } = useParams();
    const { article, articleIsLoading } = useArticleByIdQuery(
        parseInt(articleId ?? '0'),
    );
    const { imageUrl, content, title, author, date: dateStr } = article ?? {};
    const date = new Date(dateStr ?? '').toDateString();
    const parragrahps = content?.split('\n');
    return (
        <>
            {articleIsLoading ? (
                <Spin tip="Loading" size="large" />
            ) : (
                <Card>
                    <Flex justify="center" align="center">
                        <Col flex="auto">
                            <img src={imageUrl} height="500" />
                        </Col>
                        <Col flex="auto">
                            <p>{date}</p>
                            <h4>{author}</h4>
                            <h2 style={{ color: 'orange' }}>{title}</h2>
                        </Col>
                    </Flex>
                    <Col>{parragrahps?.map(text => <p>{text}</p>)}</Col>
                </Card>
            )}
        </>
    );
}
