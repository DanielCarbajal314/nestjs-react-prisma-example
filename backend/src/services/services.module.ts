import { Logger, Module } from '@nestjs/common';
import {
  ArticleCreateCommandHandler,
  ArticleGetQueryHandler,
  ArticleListQueryHandler,
  ContactCreateCommandHandler,
  ContactListQueryHandler,
} from '../services';
import { CqrsModule } from '@nestjs/cqrs';
import { DbModule } from 'src/adapters';

@Module({
  imports: [DbModule, CqrsModule],
  providers: [
    ArticleCreateCommandHandler,
    ArticleGetQueryHandler,
    ArticleListQueryHandler,
    ContactCreateCommandHandler,
    ContactListQueryHandler,
    Logger,
  ],
  exports: [
    ArticleCreateCommandHandler,
    ArticleGetQueryHandler,
    ArticleListQueryHandler,
    ContactCreateCommandHandler,
    ContactListQueryHandler,
    CqrsModule,
  ],
})
export class ServiceModule {}
