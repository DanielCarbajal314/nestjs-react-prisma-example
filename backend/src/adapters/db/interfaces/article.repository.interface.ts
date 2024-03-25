import { IBaseRespository } from './base.repository.interface';

export type ArticleWithDetails = {
  id: number;
  title: string;
  date: Date;
  author: string;
  content: string;
  imageUrl: string;
};

export type CreateArticle = {
  title: string;
  date: Date;
  author: string;
  content: string;
  imageUrl: string;
};

export type UpdateArticle = {
  id: number;
  title: string;
  date: Date;
  author: string;
  content: string;
  imageUrl: string;
};

export interface IArticleRepository
  extends IBaseRespository<ArticleWithDetails, CreateArticle, UpdateArticle> {}
