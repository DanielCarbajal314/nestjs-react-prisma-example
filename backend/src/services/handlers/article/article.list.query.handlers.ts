import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ArticleListQuery, ArticleResponse } from '../../../services';
import { BaseHandler } from '../shared/base.handler';

@QueryHandler(ArticleListQuery)
export class ArticleListQueryHandler
  extends BaseHandler
  implements IQueryHandler<ArticleListQuery>
{
  async execute(query: ArticleListQuery): Promise<ArticleResponse[]> {
    return await this.uow.articleRepository.list(query);
  }
}
