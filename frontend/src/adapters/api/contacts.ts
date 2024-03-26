import { post } from '../shared/http';

export type CreateContact = {
    name: string;
    phone: string;
    email: string;
    post: string;
};

export type ContactResponse = {
    id: number;
    name: string;
    phone: string;
    email: string;
    post: string;
};

export const createContact = (data: CreateContact) =>
    post<CreateContact, ContactResponse>('contact', data);
