import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  ContactCreateCommand,
  ContactResponse,
} from '../../../services/actions';
import { BaseHandler } from '../shared/base.handler';

@CommandHandler(ContactCreateCommand)
export class ContactCreateCommandHandler
  extends BaseHandler
  implements ICommandHandler<ContactCreateCommand, ContactResponse>
{
  async execute(data: ContactCreateCommand): Promise<ContactResponse> {
    return await this.uow.contactRepository.create(data);
  }
}
