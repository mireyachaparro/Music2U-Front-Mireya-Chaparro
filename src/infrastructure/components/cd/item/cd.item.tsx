import { Link } from 'react-router-dom';
import { Album } from '../../../../features/album/model/album.model';

export function CdItem({ item }: { item: Album }) {
    return (
        <li className="cd--list__item">
            <div className="cd--list__item--details">
                <Link to={'/albums/' + item.id} key={item.id}>
                    <img
                        className="cd--list__item__img"
                        src={item.image}
                        alt={item.name + ' cover'}
                        width="100px"
                    />
                </Link>
                <div>
                    <p>{item.price} €</p>
                </div>
            </div>
        </li>
    );
}
