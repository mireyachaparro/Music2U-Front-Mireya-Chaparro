import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUsers } from '../../../features/user/hooks/use.users';

type formData = {
    name: string;
    artist: string;
    image: string;
    year: number;
    gender: string;
    format: string;
    price: number;
};

export function AlbumDetails() {
    const initialState: formData = {
        name: '',
        artist: '',
        image: '',
        year: 0,
        gender: '',
        format: '',
        price: 0,
    };

    const [details, setDetails] = useState(initialState);
    const { handleAddFav, handleDeleteFav } = useUsers();

    const { id } = useParams();

    const getAlbumById = async (id: string | undefined) => {
        const album = await fetch(
            // `https://mireya-chaparro-back-final-project.onrender.com/albums/${id}`
            `http://localhost:7700/albums/${id}`
        )
            .then((data) => data.json())
            .then((resp) => resp.album);
        setDetails(album);
    };

    useEffect(() => {
        getAlbumById(id);
    }, [id]);

    const handleAddFavorite = () => {
        handleAddFav(details);
    };

    const handleDeleteFavorite = () => {
        handleDeleteFav(details);
    };

    return (
        <div>
            <div>
                <h2>{details.name}</h2>
                <p>{details.artist}</p>
            </div>

            <div>
                <img src={details.name} alt={details.name + ' cover'} />
            </div>

            <div>
                <p>{details.name}</p>
                <p>
                    <span>Artist: </span>
                    <span>{details.artist}</span>{' '}
                </p>
                <p>
                    <span> Release year: </span>
                    <span>{details.year}</span>
                </p>
                <p>
                    <span>Gender: </span>
                    <span>{details.gender}</span>
                </p>
                <p>
                    <span>Format: </span>
                    <span>{details.format}</span>
                </p>
            </div>

            <div>
                <p>
                    <span>Price: </span>
                    <span>{details.price}</span>
                </p>
            </div>

            <div>
                <button type="submit" className="form__button">
                    BUY
                </button>
                <button
                    type="submit"
                    className="form__button"
                    onClick={handleAddFavorite}
                >
                    <img
                        src="./assets/heart-empty-black.png"
                        alt="heart empty black"
                    />
                </button>
                <button
                    type="submit"
                    className="form__button"
                    onClick={handleDeleteFavorite}
                >
                    <img src="./assets/heart-red.png" alt="heart red" />
                </button>
                {/* a este div ponerle cuadrado 53*53 y fondo gris */}
                {/* <div>
                    <img
                        src="./public/assets/heart-empty-black.png"
                        alt="empty-heart"
                    />
                </div> */}
            </div>
        </div>
    );
}
