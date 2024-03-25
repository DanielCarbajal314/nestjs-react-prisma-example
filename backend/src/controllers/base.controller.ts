import { Inject } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

export class BaseController {
  @Inject()
  protected readonly queryBus: QueryBus;
  @Inject()
  protected readonly commandBus: CommandBus;
}
