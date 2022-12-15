import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AlbumRepository } from '../services/album.repository';
import { rootState } from '../../../infrastructure/store/store';
import * as ac from '../reducer/album.action.creators';
import { Album, ProtoAlbum } from '../model/album.model';
import {
    deletePossessionsAction,
    updatePossessionsAction,
} from '../../user/reducer/user.action.creators';

export const useAlbums = () => {
    const albums = useSelector((state: rootState) => state.albums);
    const dispatcher = useDispatch();
    const repoAlbum = useMemo(() => new AlbumRepository(), []);

    const handleLoad = useCallback(
        () =>
            repoAlbum
                .getAll()
                .then((albums) => dispatcher(ac.loadAction(albums)))
                .catch((error: Error) =>
                    console.log(error.name, error.message)
                ),
        [repoAlbum, dispatcher]
    );

    const handleAdd = (newAlbum: ProtoAlbum) => {
        repoAlbum
            .create(newAlbum)
            .then((album: Album) => {
                dispatcher(ac.addAction(album));
                dispatcher(updatePossessionsAction(newAlbum));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateAlbum: Partial<Album>) => {
        repoAlbum
            .update(updateAlbum)
            .then((album: Album) => dispatcher(ac.updateAction(album)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: string) => {
        repoAlbum
            .delete(id)
            .then(() => {
                dispatcher(ac.deleteAction(id));
                //actualizar usuario cuando borra
                dispatcher(deletePossessionsAction(id));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        albums,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
