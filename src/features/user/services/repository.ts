import { User } from '../model/user.model';

export interface Repository<T> {
    login: (item: Partial<T>) => Promise<{ user: User; token: string }>;
    register: (item: Partial<T>) => Promise<T>;
    addFav: (id: string, item: Partial<T>) => Promise<T>;
    deleteFav: (id: string) => Promise<T>;
}
