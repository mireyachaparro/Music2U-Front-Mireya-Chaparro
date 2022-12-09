import { useEffect } from 'react';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { Album } from '../../../../features/album/model/album.model';
import { AlbumItem } from '../item/item';

export function List() {
    const { albums, handleLoad } = useAlbums();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <div>
            <ul>
                {albums.map((item: Album) => (
                    <AlbumItem key={item.id} item={item}></AlbumItem>
                ))}
            </ul>
        </div>
    );
}
