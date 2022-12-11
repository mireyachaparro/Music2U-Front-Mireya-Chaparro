import { Link } from 'react-router-dom';
import { Album } from '../../../../../features/album/model/album.model';

export function AlbumsVinylItem({ item }: { item: Album }) {
    return (
        <li className="my-2 vinyl--list__item">
            <div className="vinyl--list__item--details">
                <Link to={'/albums/' + item.id} key={item.id}>
                    <img
                        className="vinyl--list__item__img"
                        src={item.image}
                        alt={item.name + ' cover'}
                        width="82px"
                    />
                </Link>
            </div>
        </li>
    );
}
