import { Link } from 'react-router-dom';
import { Album } from '../../../../features/album/model/album.model';

export function VinylItem({ item }: { item: Album }) {
    return (
        <li className=" vinyl--list__item">
            <div className="pb-4 vinyl--list__item--details">
                <Link to={'/albums/' + item.id} key={item.id}>
                    <img
                        className="vinyl--list__item__img"
                        src={item.image}
                        alt={item.name + ' cover'}
                        width="100px"
                        height="100px"
                    />
                </Link>
                <div>
                    <p className="py-2 text-base font-normal">{item.price} €</p>
                </div>
            </div>
        </li>
    );
}
