import React from 'react';
import { SyntheticEvent, useState } from 'react';
import { app } from '../../../../fb';
import { useAlbums } from '../../../../features/album/hook/use.albums';
import { ProtoAlbum } from '../../../../features/album/model/album.model';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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

    const [fileUrl, setFileUrl] = React.useState('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFile = async (ev: any) => {
        const file = ev.target.files[0];
        const storageRef = app.storage().ref();
        const filePath = storageRef.child(file.name);
        await filePath.put(file);
        const linkUrl = await filePath.getDownloadURL();
        setFileUrl(linkUrl);
    };

    const [formatAlbum, setFormatAlbum] = React.useState('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: any) => {
        setFormatAlbum(event.target.value);
        console.log(formatAlbum);
    };

    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        const collectionRef = app.firestore().collection('files');

        await collectionRef.doc().set({ url: fileUrl });
        const newAlbum: ProtoAlbum = {
            ...formState,
            year: +formState.year,
            price: +formState.price,
            image: fileUrl,
            format: formatAlbum,
        };

        handleAdd(newAlbum);
        console.log('pepe');
        setFormState(initialState);
    };

    return (
        <>
            <div className="px-6 pt-6 form">
                <form onSubmit={handleSubmit}>
                    <div className="mb-2 bg-gray-100 border-b border-gray-400 border-solid ">
                        <input
                            className="p-4 text-xl bg-gray-100"
                            type="text"
                            name="name"
                            placeholder="Album name"
                            aria-label="Name"
                            value={formState.name}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-2 bg-gray-100 border-b border-gray-400 border-solid">
                        <input
                            className="py-4 text-xl bg-gray-100"
                            type="file"
                            name="image"
                            placeholder="Image"
                            aria-label="Image"
                            value={formState.image}
                            onChange={handleFile}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="mb-2 bg-gray-100 border-b border-gray-400 border-solid">
                        <input
                            className="py-4 text-xl bg-gray-100"
                            type="text"
                            name="artist"
                            placeholder="Artist"
                            aria-label="Artist"
                            value={formState.artist}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="mb-2 bg-gray-100 border-b border-gray-400 border-solid">
                        <input
                            className="py-4 text-xl bg-gray-100"
                            type="number"
                            name="year"
                            placeholder="Release year"
                            aria-label="Year"
                            value={formState.year}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="mb-2 bg-gray-100 border-b border-gray-400 border-solid">
                        <input
                            className="py-4 text-xl bg-gray-100"
                            type="text"
                            name="gender"
                            placeholder="Gender"
                            aria-label="Gender"
                            value={formState.gender}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="flex mb-2 bg-gray-100 border-b border-gray-400 border-solid ">
                        <p className="py-4 mr-10 text-xl text-gray-400 bg-gray-10">
                            Format
                        </p>
                        <Select
                            className="flex self-center h-8 "
                            name="format"
                            required
                            value={formatAlbum}
                            onChange={handleChange}
                            autoWidth
                            label="Format"
                        >
                            <MenuItem value={'CD'}>CD</MenuItem>
                            <MenuItem value={'Vinyl'}>Vinyl</MenuItem>
                        </Select>
                    </div>
                    <div className="flex justify-between mb-4 bg-gray-100 border-b border-gray-400 border-solid">
                        <input
                            className="py-4 text-xl bg-gray-100"
                            type="number"
                            name="price"
                            placeholder="Price"
                            aria-label="Price"
                            value={formState.price}
                            onInput={handleInput}
                            required
                        />
                        <span className="self-center text-lg ">€</span>
                    </div>
                    <div className="flex justify-center mt-10 ">
                        <button
                            type="submit"
                            className="w-full text-xl text-white bg-black h-14"
                        >
                            ADD
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
