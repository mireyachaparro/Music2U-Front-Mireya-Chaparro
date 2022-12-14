import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ProtoUser } from '../model/user.model';
import { UserRepository } from '../services/user.repository';
import * as ac from '../reducer/user.action.creators';
import { Album } from '../../album/model/album.model';

export const useUsers = () => {
    const users = useSelector((state: rootState) => state.users);
    const dispatcher = useDispatch();
    const repoUser = useMemo(() => new UserRepository(), []);

    const handleLogin = (user: Partial<ProtoUser>) => {
        repoUser
            .login(user)
            .then((res) => {
                dispatcher(ac.loginAction(res));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleAddFav = (album: Partial<Album>) => {
        repoUser
            .addFav(album.id as string)
            .then((user) => dispatcher(ac.addFavAction(user)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDeleteFav = (album: Partial<Album>) => {
        repoUser
            .deleteFav(album.id as string)
            .then((user) => dispatcher(ac.deleteFavAction(user)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        users,
        handleLogin,
        handleAddFav,
        handleDeleteFav,
    };
};
