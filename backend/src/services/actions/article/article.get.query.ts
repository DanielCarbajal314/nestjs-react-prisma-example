import { IQuery } from '@nestjs/cqrs';

export class ArticleGetQuery implements IQuery {
  constructor(public id: number) {}
}
