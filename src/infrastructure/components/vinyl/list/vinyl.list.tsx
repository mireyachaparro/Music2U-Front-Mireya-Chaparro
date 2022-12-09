import { useEffect } from 'react';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { Album } from '../../../../features/album/model/album.model';
import { VinylItem } from '../item/vinyl.item';

export function VinylList() {
    const { albums, handleLoad } = useAlbums();

    const result = albums.filter((item) => item.format === 'Vinyl');

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <div className="vinyl">
            <ul className="vinyl--list">
                {result.map((item: Album) => (
                    <VinylItem key={item.id} item={item}></VinylItem>
                ))}
            </ul>
        </div>
    );
}
