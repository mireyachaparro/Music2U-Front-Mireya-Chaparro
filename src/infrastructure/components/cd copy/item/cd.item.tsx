import { Album } from '../../../../features/album/model/album.model';

export function AlbumItem({ item }: { item: Album }) {
    return (
        <li className="cd--list__item">
            <div className="cd--list__item--details">
                <img
                    className="cd--list__item__img"
                    src={item.image}
                    alt="Cover"
                    width="100px"
                />
                <div>{item.price}</div>
            </div>
        </li>
    );
}
