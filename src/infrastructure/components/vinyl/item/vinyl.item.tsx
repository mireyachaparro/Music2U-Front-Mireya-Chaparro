import { Album } from '../../../../features/album/model/album.model';

export function VinylItem({ item }: { item: Album }) {
    return (
        <li className="vinyl--list__item">
            <div className="vinyl--list__item--details">
                <img
                    className="vinyl--list__item__img"
                    src={item.image}
                    alt="Cover"
                    width="100px"
                />
                <div>
                    <p>{item.price} €</p>
                </div>
            </div>
        </li>
    );
}
