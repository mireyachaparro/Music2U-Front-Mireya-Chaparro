export interface Repository<T> {
    login: (item: Partial<T>) => Promise<string>;
    register: (item: Partial<T>) => Promise<T>;
    addFav: (id: string, item: Partial<T>) => Promise<T>;
    deleteFav: (id: string) => Promise<T>;
}
