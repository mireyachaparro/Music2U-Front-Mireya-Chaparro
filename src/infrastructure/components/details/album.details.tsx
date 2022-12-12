import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

    const { users } = useUsers();

    return (
        <div>
            <div>
                <h2 className="mb-4 text-4xl font-bold">{details.name}</h2>
                <p className="text-base font-medium ">{details.artist}</p>
            </div>

            <div className="flex justify-center my-6">
                <img
                    src={details.image}
                    alt={details.name + ' cover'}
                    width="200px"
                />
            </div>

            <div>
                <p className="text-lg font-semibold">{details.name}</p>
                <p className="my-1">
                    <span className="text-base font-medium">Artist: </span>
                    <span className="font-normal text-gray-500">
                        {details.artist}
                    </span>
                </p>
                <p className="my-1">
                    <span className="text-base font-medium">
                        {' '}
                        Release year:{' '}
                    </span>
                    <span className="font-normal text-gray-500">
                        {details.year}
                    </span>
                </p>
                <p className="my-1">
                    <span className="text-base font-medium">Gender: </span>
                    <span className="font-normal text-gray-500">
                        {details.gender}
                    </span>
                </p>
                <p className="my-1">
                    <span className="text-base font-medium">Format: </span>
                    <span className="font-normal text-gray-500">
                        {details.format}
                    </span>
                </p>
            </div>

            <div className="my-10 mb-16">
                <p>
                    <span className="text-xl font-medium">Price: </span>
                    <span className="text-xl text-gray-500">
                        {details.price}€
                    </span>
                </p>
            </div>

            {users.isLogged ? (
                <>
                    <div className="flex justify-between">
                        <div className="flex justify-center text-xl text-white bg-black w-72 h-14">
                            <button type="submit" className="form__button">
                                BUY
                            </button>
                        </div>

                        {users.user?.favorites.some(
                            (item) => item.id === id
                        ) ? (
                            <div className="flex justify-center text-xl text-black bg-gray-300 w-14 h-14">
                                <button
                                    type="submit"
                                    className="form__button"
                                    onClick={handleDeleteFavorite}
                                >
                                    <img
                                        src="/assets/heart-red.png"
                                        width="30px"
                                        alt="heart-red"
                                    />
                                </button>
                            </div>
                        ) : (
                            <div className="flex justify-center text-xl text-black bg-gray-300 w-14 h-14">
                                <button
                                    type="submit"
                                    className="form__button"
                                    onClick={handleAddFavorite}
                                >
                                    <img
                                        src="/assets/heart-empty-black.png"
                                        width="30px"
                                        alt="empty-heart"
                                    />
                                </button>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <p>
                    Para comprar el álbum,{' '}
                    <Link to="/">
                        <span className="font-medium text-gray-500">
                            inicia sesión
                        </span>
                    </Link>{' '}
                    o{' '}
                    <Link to="/register">
                        <span className="font-medium text-gray-500">
                            regístrate
                        </span>
                    </Link>
                    .
                </p>
            )}
        </div>
    );
}
