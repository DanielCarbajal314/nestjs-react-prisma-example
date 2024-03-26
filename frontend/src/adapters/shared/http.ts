import { Enviroment } from '../../config';

const baseUrl = Enviroment.apiUrl;

export const get = <T>(path: string) =>
    fetch(`${baseUrl}/${path}`).then(response => response.json() as T);
export const post = <TBody, TResponse>(path: string, body: TBody) =>
    fetch(`${baseUrl}/${path}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(response => response.json() as TResponse);
