import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAlbums } from '../../../../../features/album/hook/use.albums';
import { Album } from '../../../../../features/album/model/album.model';
import { AlbumsVinylItem } from '../item/vinyl.item';

export function AlbumsVinylList() {
    const { albums, handleLoad } = useAlbums();

    const filter = albums.filter((item) => item.format === 'Vinyl');
    const result = [...filter].reverse().slice(0, 8);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <div className="vinyl">
            <h2 className="text-4xl font-bold">Vinyls</h2>
            <ul className="flex flex-wrap justify-between my-2 cd--list">
                {result.map((item: Album) => (
                    <AlbumsVinylItem
                        key={item.id}
                        item={item}
                    ></AlbumsVinylItem>
                ))}
            </ul>
            <p className="text-base text-gray-500">
                <Link to={'/vinyl'}>See more vinyls</Link>
            </p>
        </div>
    );
}
