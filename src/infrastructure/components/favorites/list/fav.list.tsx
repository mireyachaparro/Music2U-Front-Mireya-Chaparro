import { Link } from 'react-router-dom';
import { Album } from '../../../../features/album/model/album.model';
import { useUsers } from '../../../../features/user/hooks/use.users';
import { User } from '../../../../features/user/model/user.model';

export function FavList() {
    const { users, handleDeleteFav } = useUsers();
    console.log(users.isLogged);
    console.log(users.user?.favorites);
    return (
        <>
            <div>
                {(users.user as User).favorites.length > 0 ? (
                    <ul>
                        {(users.user as User).favorites.map((item: Album) => (
                            <li
                                className="flex flex-row items-start justify-between my-6"
                                key={item.id}
                            >
                                <div className="fav--list__item--details">
                                    <Link
                                        to={'/albums/' + item.id}
                                        key={item.id}
                                    >
                                        <img
                                            className="fav--list__item__img"
                                            src={item.image}
                                            alt={item.name + ' cover'}
                                            width="100px"
                                        />
                                    </Link>
                                </div>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.artist}</p>
                                    <p>{item.price}€</p>
                                </div>
                                <div className="flex self-center justify-center w-5 h-5 text-base text-black bg-gray-300">
                                    <button
                                        onClick={() => handleDeleteFav(item)}
                                    >
                                        D
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <>
                        <p>Tu lista de favoritos está vacía</p>
                        <p>
                            {' '}
                            <Link to={'/albums'}>
                                Empieza a añadir tus álbumes favoritos.
                            </Link>
                        </p>
                    </>
                )}
            </div>
        </>
    );
}
