import { Link } from 'react-router-dom';
import { AlbumsCdList } from '../cd/list/cd.list';
import { AlbumsVinylList } from '../vinyls/list/vinyl.list';

function AlbumsPage() {
    return (
        <>
            <div className="h-screen px-4 pt-10 bg-gray-100">
                <AlbumsCdList></AlbumsCdList>
                <AlbumsVinylList></AlbumsVinylList>
                <div className="absolute bottom-0 right-0 pb-8 pr-4">
                    <Link to={'/add'}>
                        <img
                            src="/assets/add.png"
                            alt="add"
                            width="40px"
                            height="40px"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default AlbumsPage;
