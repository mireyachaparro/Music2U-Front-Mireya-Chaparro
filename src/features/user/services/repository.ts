export interface Repository<T> {
    login: (item: Partial<T>) => Promise<string>;
    register: (item: Partial<T>) => Promise<T>;
    addFav: (item: Partial<T>) => Promise<T>;
    deleteFav: (item: Partial<T>) => Promise<T>;
}
