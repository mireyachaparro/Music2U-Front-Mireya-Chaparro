import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAlbums } from '../../../../../features/album/hook/use.albums';
import { Album } from '../../../../../features/album/model/album.model';
import { AlbumsCdItem } from '../item/cd.item';

export function AlbumsCdList() {
    const { albums, handleLoad } = useAlbums();

    const filter = albums.filter((item) => item.format === 'CD');
    const result = [...filter].reverse().slice(0, 8);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <div className="mb-8 cd">
            <h2 className="text-4xl font-bold">CDs</h2>
            <ul className="flex flex-wrap justify-between my-2 cd--list">
                {result.map((item: Album) => (
                    <AlbumsCdItem key={item.id} item={item}></AlbumsCdItem>
                ))}
            </ul>
            <p className="text-base text-gray-500">
                <Link to={'/cd'}>See more CDs</Link>
            </p>
        </div>
    );
}
