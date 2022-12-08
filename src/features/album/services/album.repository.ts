import { Album } from '../model/album.model';
import { Repository } from './repository';

export class AlbumRepository implements Repository<Album> {
    url: string;
    constructor() {
        this.url = process.env.REACT_APP_URL_ALBUM as string;
    }

    getAll(): Promise<Album[]> {
        return fetch(this.url).then((res) => {
            if (res.ok) return res.json();
            throw this.#createError(res);
        });
    }

    create(item: Partial<Album>): Promise<Album> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: { 'content-type': 'application/json' },
        }).then((res) => {
            if (res.ok) return res.json();
            throw this.#createError(res);
        });
    }

    update(item: Partial<Album>): Promise<Album> {
        return fetch(`${this.url}/${item.id}`, {
            method: 'PATCH',
            body: JSON.stringify(item),
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => {
            if (res.ok) return res.json();
            throw this.#createError(res);
        });
    }

    delete(id: string): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        }).then((res) => {
            if (!res.ok) throw this.#createError(res);
        });
    }

    #createError(res: Response) {
        const message = `Error ${res.status}: ${res.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }
}
