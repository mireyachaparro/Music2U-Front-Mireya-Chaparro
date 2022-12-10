import { Album } from '../../album/model/album.model';
import { User } from '../model/user.model';
import { Repository } from './repository';
//esto para las variables de entorno
// import { REACT_APP_URL_USER } from '../../../config';

export class UserRepository implements Repository<User> {
    url: string;
    constructor() {
        //esto para las variables de entorno
        // this.url = `${REACT_APP_URL_USER}`;
        this.url = process.env.REACT_APP_URL_USER as string;
    }

    register(item: Partial<User>): Promise<User> {
        return fetch(
            /*`${this.url}/register`*/ 'http://localhost:7700/users/register',
            {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'content-type': 'application/json',
                },
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw this.#createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    login(item: Partial<User>): Promise<string> {
        return fetch(
            /*`${this.url}/login`*/ 'http://localhost:7700/users/login',
            {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'content-type': 'application/json',
                },
            }
        )
            .then((response) => {
                if (response.ok) return response.json();
                throw this.#createError(response);
            })
            .then((response) => response.token)
            .catch((error) => {
                return `${error}`;
            });
    }

    addFav(id: Partial<Album>): Promise<User> {
        return fetch(`${this.url}/addFavorites/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(id),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.#createError(response);
            })
            .catch((error) => `${error}`);
    }

    deleteFav(id: Partial<Album>): Promise<User> {
        return fetch(`${this.url}/deleteFavorites/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(id),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.#createError(response);
            })
            .catch((error) => `${error}`);
    }

    #createError(res: Response) {
        const message = `Error ${res.status}: ${res.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }
}
