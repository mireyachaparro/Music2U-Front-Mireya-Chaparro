import { useEffect } from 'react';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { Album } from '../../../../features/album/model/album.model';
import { CdItem } from '../item/cd.item';

export function CdList() {
    const { albums, handleLoad } = useAlbums();

    const filter = albums.filter((item) => item.format === 'CD');
    const result = [...filter].reverse();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <div className="cd">
            <ul className="cd--list">
                {result.map((item: Album) => (
                    <CdItem key={item.id} item={item}></CdItem>
                ))}
            </ul>
        </div>
    );
}
