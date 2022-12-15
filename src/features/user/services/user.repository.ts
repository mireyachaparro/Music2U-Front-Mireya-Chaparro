import { User } from '../model/user.model';
import { Repository } from './repository';

export class UserRepository implements Repository<User> {
    url: string;
    constructor() {
        this.url = process.env.REACT_APP_URL_USER as string;
    }

    register(item: Partial<User>): Promise<User> {
        return fetch(
            'https://mireya-chaparro-back-final-project.onrender.com/users/register',
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

    login(item: Partial<User>): Promise<{ user: User; token: string }> {
        return fetch(
            'https://mireya-chaparro-back-final-project.onrender.com/users/login',
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
            .then((response) => {
                localStorage.setItem('token', response.token);
                return response;
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    addFav(id: string): Promise<User> {
        return fetch(
            `https://mireya-chaparro-back-final-project.onrender.com/users/addFav/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        )
            .then((res) => {
                if (res.ok) return res.json();
                throw this.#createError(res);
            })
            .catch((error) => `${error}`);
    }

    deleteFav(id: string): Promise<User> {
        return fetch(
            `https://mireya-chaparro-back-final-project.onrender.com/users/deleteFav/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        )
            .then((res) => {
                if (res.ok) return res.json();
                throw this.#createError(res);
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
