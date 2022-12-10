import { AlbumsCdList } from '../cd/list/cd.list';
import { AlbumsVinylList } from '../vinyls/list/vinyl.list';

function AlbumsPage() {
    return (
        <>
            <AlbumsCdList></AlbumsCdList>
            <AlbumsVinylList></AlbumsVinylList>
            <div>
                <img src="../../../../../public/assets/" alt="add" />
            </div>
        </>
    );
}

export default AlbumsPage;
