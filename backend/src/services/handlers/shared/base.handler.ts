import { Inject } from '@nestjs/common';
import { IUnitOfWork } from 'src/adapters';

export class BaseHandler {
  @Inject(IUnitOfWork)
  protected uow: IUnitOfWork;
}
