import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ArticleListQuery, ArticleResponse } from '../../../services';
import { BaseHandler } from '../shared/base.handler';

@QueryHandler(ArticleListQuery)
export class ArticleListQueryHandler
  extends BaseHandler
  implements IQueryHandler<ArticleListQuery>
{
  async execute(query: ArticleListQuery): Promise<ArticleResponse[]> {
    const results = await this.uow.articleRepository.list(query);
    return results.map(({ content, ...others }) => ({
      ...others,
      content: content.substring(0, 40) + '...',
    }));
  }
}
