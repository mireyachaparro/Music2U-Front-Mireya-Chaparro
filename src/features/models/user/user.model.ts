import { Album } from '../../models/album/album.model';

export interface ProtoUser {
    name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string | Date;
}

export interface User {
    id: string;
    name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string | Date;
    favorites: Array<Album>;
    possessions: Array<Album>;
}

export class UserModel implements ProtoUser {
    constructor(
        public name: string,
        public last_name: string,
        public email: string,
        public password: string,
        public phone: string,
        public birthday: string | Date
    ) {}
}
