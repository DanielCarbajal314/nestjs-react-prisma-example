import { IBaseRespository } from './base.repository.interface';

export type Contact = {
  id: number;
  name: string;
  phone: string;
  email: string;
  post: string;
};

export type CreateContact = {
  name: string;
  phone: string;
  email: string;
  post: string;
};

export type UpdateContact = {
  id: number;
  name: string;
  phone: string;
  email: string;
  post: string;
};

export interface IContactRepository
  extends IBaseRespository<Contact, CreateContact, UpdateContact> {}
