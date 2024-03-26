import { Card, Spin } from 'antd';
import { useArticleQuery } from './useArticlesQuery';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

export function Articles() {
    const { articles, articlesAreLoading } = useArticleQuery();
    const navigate = useNavigate();
    const navitageTo = (id: number) => () =>
        navigate(`articles/${id}`, { relative: 'route' });
    return (
        <>
            {articlesAreLoading ? (
                <Spin tip="Loading" size="large" />
            ) : (
                articles?.map(({ title, content, imageUrl, id }) => (
                    <Card
                        cover={<img src={imageUrl} key={id} />}
                        style={{ width: 340, cursor: 'pointer' }}
                        onClick={navitageTo(id)}
                    >
                        <Meta title={title} description={content} />
                    </Card>
                ))
            )}
        </>
    );
}
