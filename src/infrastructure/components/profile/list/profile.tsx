import { Link } from 'react-router-dom';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { Album } from '../../../../features/album/model/album.model';
import { useUsers } from '../../../../features/user/hooks/use.users';
import { User } from '../../../../features/user/model/user.model';

export function ProfileList() {
    const { users } = useUsers();
    const { handleDelete } = useAlbums();

    console.log(users.isLogged);
    console.log(users.user?.possessions);
    return (
        <>
            <div>
                {(users.user as User).possessions.length > 0 ? (
                    <ul>
                        {(users.user as User).possessions.map((item: Album) => (
                            <li key={item.id}>
                                <div className="possessions--list__item--details">
                                    <Link
                                        to={'/albums' + item.id}
                                        key={item.id}
                                    >
                                        <img
                                            className="possessions--list__item__img"
                                            src={item.image}
                                            alt={item.name + ' cover'}
                                            width="100px"
                                        />
                                    </Link>
                                </div>
                                <div>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        DELETE
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <>
                        <p>Aun no has subido ningun album.</p>
                        <p>
                            {' '}
                            <Link to={'/add'}>
                                Empieza a añadir tus álbumes.
                            </Link>
                        </p>
                    </>
                )}
            </div>
        </>
    );
}
