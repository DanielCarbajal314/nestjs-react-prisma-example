import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ContactListQuery, ContactResponse } from '../../../services';
import { BaseHandler } from '../shared/base.handler';

@QueryHandler(ContactListQuery)
export class ContactListQueryHandler
  extends BaseHandler
  implements IQueryHandler<ContactListQuery, ContactResponse[]>
{
  async execute(query: ContactListQuery): Promise<ContactResponse[]> {
    return await this.uow.contactRepository.list(query);
  }
}
