import { useEffect } from 'react';
import { useAlbums } from '../../../../../features/album/hook/use.albums';
import { Album } from '../../../../../features/album/model/album.model';
import { AlbumsCdItem } from '../item/cd.item';

export function AlbumsCdList() {
    const { albums, handleLoad } = useAlbums();

    const filter = albums.filter((item) => item.format === 'CD');
    const result = filter.reverse().slice(0, 8);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <div className="cd">
            <h2 className="page__title">CDs</h2>
            <ul className="cd--list">
                {result.map((item: Album) => (
                    <AlbumsCdItem key={item.id} item={item}></AlbumsCdItem>
                ))}
            </ul>
            <p>See more</p>
        </div>
    );
}
