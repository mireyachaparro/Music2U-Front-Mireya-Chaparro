import { SyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { Album } from '../../../../features/album/model/album.model';
import { useUsers } from '../../../../features/user/hooks/use.users';
import { User } from '../../../../features/user/model/user.model';

export function ProfileList() {
    const { users } = useUsers();
    const { handleDelete } = useAlbums();
    const navigate = useNavigate();

    const handleLogout = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        await localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        navigate('/');
    };

    return (
        <>
            <div>
                <div className="mt-2 text-gray-500 mb-9">
                    <button onClick={handleLogout}>Log out</button>
                </div>
                {(users.user as User).possessions.length > 0 ? (
                    <ul className="flex flex-wrap justify-between">
                        {(users.user as User).possessions.map((item: Album) => (
                            <li className="pb-8" key={item.id}>
                                <div className="possessions--list__item--details">
                                    <Link
                                        to={'/albums/' + item.id}
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
                                <div className="flex justify-end pt-1">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <img
                                            src="./assets/cross.png"
                                            alt="cross"
                                            width="20px"
                                        />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <>
                        <p className="pb-2">Aun no has subido ningun album.</p>
                        <p className="font-medium">
                            <Link to={'/add'}>
                                Haz clic aquí para empezar a añadir tus álbumes.
                            </Link>
                        </p>
                    </>
                )}
            </div>
        </>
    );
}
