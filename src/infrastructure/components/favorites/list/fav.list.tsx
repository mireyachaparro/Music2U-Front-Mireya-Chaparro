import { useEffect, useState } from 'react';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { Album } from '../../../../features/album/model/album.model';
import { useUsers } from '../../../../features/user/hooks/use.users';
import { FavItem } from '../item/fav.item';

export function FavList() {
    // const [fav, setFav] = useState(initialState);
    // const { albums } = useAlbums();
    // const { handleDeleteFav } = useUsers();

    // const handleDeleteFavorite = () => {
    //     handleDeleteFav(fav);
    // };

    // useEffect(() => {
    //     handleLoad();
    // }, [handleLoad]);

    return (
        <div className="cd">
            {/* <ul className="cd--list">
                {result.map((item: Album) => (
                    <FavItem key={item.id} item={item}></FavItem>
                ))}
            </ul> */}
            <p>hola</p>
        </div>
    );
}
