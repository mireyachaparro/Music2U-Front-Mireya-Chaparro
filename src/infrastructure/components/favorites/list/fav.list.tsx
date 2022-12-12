import { Link } from 'react-router-dom';
import { Album } from '../../../../features/album/model/album.model';
import { useUsers } from '../../../../features/user/hooks/use.users';
import { User } from '../../../../features/user/model/user.model';

export function FavList() {
    const { users, handleDeleteFav } = useUsers();

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
                                <div className="flex self-center justify-center w-5 h-5 text-base text-black ">
                                    <button
                                        onClick={() => handleDeleteFav(item)}
                                    >
                                        <img
                                            src="./assets/heart-red.png"
                                            width="20px"
                                            alt="heart-red"
                                        />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <>
                        <p className="mt-8 mb-2">
                            Tu lista de favoritos está vacía.
                        </p>
                        <p className="font-medium">
                            <Link to={'/albums'}>
                                Haz clic aquí para empezar a añadir tus álbumes
                                favoritos.
                            </Link>
                        </p>
                    </>
                )}
            </div>
        </>
    );
}
