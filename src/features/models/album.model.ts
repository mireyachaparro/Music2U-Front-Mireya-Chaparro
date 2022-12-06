export type ProtoAlbum = {
    name: string;
    artist: string;
    image: string;
    year: number;
    gender: string;
    format: string;
    price: number;
    sold: boolean;
};

export type Album = {
    id: string;
    name: string;
    artist: string;
    image: string;
    year: number;
    gender: string;
    format: string;
    price: number;
    sold: boolean;
};

export class AlbumModel implements ProtoAlbum {
    constructor(
        public name: string,
        public artist: string,
        public image: string,
        public year: number,
        public gender: string,
        public format: string,
        public price: number,
        public sold: boolean
    ) {}
}
