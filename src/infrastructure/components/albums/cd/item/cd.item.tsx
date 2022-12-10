import { Album } from '../../../../../features/album/model/album.model';

export function AlbumsCdItem({ item }: { item: Album }) {
    return (
        <li className="cd--list__item">
            <div className="cd--list__item--details">
                <img
                    className="cd--list__item__img"
                    src={item.image}
                    alt="Cover"
                    width="82px"
                />
            </div>
        </li>
    );
}
