import { SyntheticEvent, useState } from 'react';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { ProtoAlbum } from '../../../../features/album/model/album.model';

type formData = {
    name: string;
    image: string;
    artist: string;
    year: string;
    gender: string;
    format: string;
    price: string;
    sold: boolean;
};

export function AddForm() {
    const initialState: formData = {
        name: '',
        image: '',
        artist: '',
        year: '',
        gender: '',
        format: '',
        price: '',
        sold: false,
    };

    const [formState, setFormState] = useState(initialState);

    const { handleAdd } = useAlbums();

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const newAlbum: ProtoAlbum = {
            ...formState,
            year: +formState.year,
            price: +formState.price,
        };

        handleAdd(newAlbum);
        setFormState(initialState);
    };

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form__name">
                        <input
                            type="text"
                            name="name"
                            placeholder="Album name"
                            aria-label="Name"
                            value={formState.name}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__image">
                        <input
                            type="file"
                            name="image"
                            placeholder="Image"
                            aria-label="Image"
                            value={formState.image}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__artist">
                        <input
                            type="text"
                            name="artist"
                            placeholder="Artist"
                            aria-label="Artist"
                            value={formState.artist}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__year">
                        <input
                            type="number"
                            name="year"
                            placeholder="Release year"
                            aria-label="Year"
                            value={formState.year}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__gender">
                        <input
                            type="text"
                            name="gender"
                            placeholder="Gender"
                            aria-label="Gender"
                            value={formState.gender}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__format">
                        <input
                            type="text"
                            name="format"
                            placeholder="Format"
                            aria-label="Format"
                            value={formState.format}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__price">
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            aria-label="Price"
                            value={formState.price}
                            onInput={handleInput}
                            required
                        />
                        <span>€</span>
                    </div>
                    <button type="submit" className="form__button">
                        ADD
                    </button>
                </form>
            </div>
        </>
    );
}
