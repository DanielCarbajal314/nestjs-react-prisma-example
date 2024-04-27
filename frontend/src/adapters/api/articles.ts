import { get } from '../shared/http';

export type ArticleResponse = {
    id: number;
    title: string;
    date: string;
    author: string;
    content: string;
    imageUrl: string;
};

export const getArticles = () => get<ArticleResponse[]>('article');
export const getArticleById = (id: number) => () =>
    get<ArticleResponse>(`article/${id}`);
