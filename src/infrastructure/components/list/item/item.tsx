import { Album } from '../../../../features/album/model/album.model';

export function AlbumItem({ item }: { item: Album }) {
    return (
        <li>
            <div>{item.name}</div>
        </li>
    );
}
