import { IArticleRepository } from '../../interfaces';
import {
  CreateArticle,
  ArticleWithDetails,
  UpdateArticle,
} from '../../interfaces/article.repository.interface';
import { Page } from '../../interfaces/base.repository.interface';
import { BaseRepository } from './base.repository';

export class ArticleRepository
  extends BaseRepository
  implements IArticleRepository
{
  async create(data: CreateArticle): Promise<ArticleWithDetails> {
    return await this.prisma.article.create({ data });
  }
  async update(toUpdateData: UpdateArticle): Promise<ArticleWithDetails> {
    const { id, ...data } = toUpdateData;
    return await this.prisma.article.update({ where: { id }, data });
  }
  async list(page: Page): Promise<ArticleWithDetails[]> {
    return await this.prisma.article.findMany(this.processDefaultPage(page));
  }
  async delete(id: number): Promise<void> {
    await this.prisma.article.delete({ where: { id } });
  }
  async find(id: number): Promise<ArticleWithDetails> {
    return await this.prisma.article.findUnique({ where: { id } });
  }
}
