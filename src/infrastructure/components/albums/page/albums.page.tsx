import { Link } from 'react-router-dom';
import { AlbumsCdList } from '../cd/list/cd.list';
import { AlbumsVinylList } from '../vinyls/list/vinyl.list';

function AlbumsPage() {
    return (
        <>
            <AlbumsCdList></AlbumsCdList>
            <AlbumsVinylList></AlbumsVinylList>
            <div>
                <Link to={'/add'}>
                    <img src="./assets/add.png" alt="add" width="40px" />
                </Link>
            </div>
        </>
    );
}

export default AlbumsPage;
