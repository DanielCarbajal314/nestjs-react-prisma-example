import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  ArticleCreateCommand,
  ArticleResponse,
} from '../../../services/actions';
import { BaseHandler } from '../shared/base.handler';

@CommandHandler(ArticleCreateCommand)
export class ArticleCreateCommandHandler
  extends BaseHandler
  implements ICommandHandler<ArticleCreateCommand, ArticleResponse>
{
  async execute(data: ArticleCreateCommand): Promise<ArticleResponse> {
    return await this.uow.articleRepository.create(data);
  }
}
