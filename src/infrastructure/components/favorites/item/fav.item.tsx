import { Link } from 'react-router-dom';
import { Album } from '../../../../features/album/model/album.model';
import { useUsers } from '../../../../features/user/hooks/use.users';

export function FavItem({ item }: { item: Album }) {
    const { handleDeleteFav } = useUsers();

    const handleDeleteFavorite = () => {
        handleDeleteFav(item);
    };

    return (
        <li className="fav--list__item">
            <div className="fav--list__item--details">
                <Link to={'/albums' + item.id} key={item.id}>
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
            <div>
                <button
                    type="submit"
                    className="form__button"
                    onClick={handleDeleteFavorite}
                >
                    DELETE FAV
                </button>
            </div>
        </li>
    );
}
