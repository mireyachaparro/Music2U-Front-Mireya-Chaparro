import { Link } from 'react-router-dom';
import { AlbumsCdList } from '../cd/list/cd.list';
import { AlbumsVinylList } from '../vinyls/list/vinyl.list';

function AlbumsPage() {
    return (
        <>
            <div className="h-screen p-4 bg-gray-100">
                <AlbumsCdList></AlbumsCdList>
                <AlbumsVinylList></AlbumsVinylList>
                <div>
                    <Link to={'/add'}>
                        <img src="/assets/add.png" alt="add" width="40px" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default AlbumsPage;
