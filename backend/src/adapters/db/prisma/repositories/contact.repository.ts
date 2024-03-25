import {
  IContactRepository,
  Contact,
  CreateContact,
  UpdateContact,
} from '../../interfaces';
import { Page } from '../../interfaces/base.repository.interface';
import { BaseRepository } from './base.repository';

export class ContactRepository
  extends BaseRepository
  implements IContactRepository
{
  async create(data: CreateContact): Promise<Contact> {
    return await this.prisma.contact.create({ data });
  }
  async update(toUpdateData: UpdateContact): Promise<Contact> {
    const { id, ...data } = toUpdateData;
    return await this.prisma.contact.update({ where: { id }, data });
  }
  async list(page: Page): Promise<Contact[]> {
    return await this.prisma.contact.findMany(this.processDefaultPage(page));
  }
  async delete(id: number): Promise<void> {
    await this.prisma.contact.delete({ where: { id } });
  }
  async find(id: number): Promise<Contact> {
    return await this.prisma.contact.findUnique({ where: { id } });
  }
}
