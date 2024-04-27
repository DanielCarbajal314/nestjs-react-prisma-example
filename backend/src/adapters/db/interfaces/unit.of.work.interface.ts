import { IArticleRepository } from './article.repository.interface';
import { IContactRepository } from './contact.repository.interface';

export interface IContext {
  articleRepository: IArticleRepository;
  contactRepository: IContactRepository;
}

export interface IUnitOfWork extends IContext {
  executeTransaction<T>(callback: (data: IContext) => Promise<T>): Promise<T>;
}

export const IUnitOfWork = Symbol('IUnitOfWork');
