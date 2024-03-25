import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ArticleGetQuery, ArticleResponse } from '../../../services/actions';
import { BaseHandler } from '../shared/base.handler';

@QueryHandler(ArticleGetQuery)
export class ArticleGetQueryHandler
  extends BaseHandler
  implements IQueryHandler<ArticleGetQuery, ArticleResponse>
{
  async execute({ id }: ArticleGetQuery): Promise<ArticleResponse> {
    return await this.uow.articleRepository.find(id);
  }
}
