import { useMutation } from '@tanstack/react-query';
import {
    ContactResponse,
    CreateContact,
    createContact,
} from '../../adapters/api/contacts';

export function useContactCreateMutation(
    onSuccess: (data: ContactResponse) => void,
) {
    const { mutate, isPending } = useMutation<
        ContactResponse,
        null,
        CreateContact
    >({
        mutationFn: (todo: CreateContact) => createContact(todo),
        onSuccess: response => onSuccess(response),
    });
    return {
        createContact: mutate,
        isLoading: isPending,
    };
}
