import { useEffect } from 'react';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { Album } from '../../../../features/album/model/album.model';
import { AlbumItem } from '../item/item';

export function List() {
    const { albums, handleLoad } = useAlbums();

    const result = albums.filter((item) => item.format === 'CD');

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <div className="cd">
            <ul className="cd--list">
                {result.map((item: Album) => (
                    <AlbumItem key={item.id} item={item}></AlbumItem>
                ))}
            </ul>
        </div>
    );
}
