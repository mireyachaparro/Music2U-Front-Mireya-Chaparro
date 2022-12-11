import { useEffect } from 'react';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { Album } from '../../../../features/album/model/album.model';
import { VinylItem } from '../item/vinyl.item';

export function VinylList() {
    const { albums, handleLoad } = useAlbums();

    const filter = albums.filter((item) => item.format === 'Vinyl');
    const result = [...filter].reverse();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <div className="my-4">
            <ul className="flex flex-wrap">
                {result.map((item: Album) => (
                    <VinylItem key={item.id} item={item}></VinylItem>
                ))}
            </ul>
        </div>
    );
}
