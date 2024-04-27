import { Injectable, Logger } from '@nestjs/common';
import {
  IArticleRepository,
  IContactRepository,
  IUnitOfWork,
  IContext,
} from '../interfaces';
import { PrismaService } from './prisma.service';
import { ArticleRepository } from './repositories/article.repository';
import { ContactRepository } from './repositories/contact.repository';

@Injectable()
export class UnitOfWork implements IUnitOfWork {
  articleRepository: IArticleRepository;
  contactRepository: IContactRepository;

  constructor(
    private prismaService: PrismaService,
    private readonly logger: Logger,
  ) {
    this.articleRepository = new ArticleRepository(this.prismaService);
    this.contactRepository = new ContactRepository(this.prismaService);
  }

  async executeTransaction<T>(
    callback: (data: IContext) => Promise<T>,
  ): Promise<T> {
    try {
      let result: T;
      await this.prismaService.$transaction(async () => {
        const context = {
          articleRepository: new ArticleRepository(this.prismaService),
          contactRepository: new ContactRepository(this.prismaService),
        };
        result = await callback(context);
      });
      return result;
    } catch (error) {
      this.logger.error('UnitOfWork execution failed:', error);
      throw error;
    }
  }
}
