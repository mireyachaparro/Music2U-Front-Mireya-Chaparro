import { AlbumsCdList } from '../cd/list/cd.list';
import { AlbumsVinylList } from '../vinyls/list/vinyl.list';

function AlbumsPage() {
    return (
        <>
            <AlbumsCdList></AlbumsCdList>
            <AlbumsVinylList></AlbumsVinylList>
        </>
    );
}

export default AlbumsPage;
