import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ProtoUser } from '../model/user.model';
import { UserRepository } from '../services/user.repository';
import * as ac from '../reducer/user.action.creators';

export const useUsers = () => {
    const users = useSelector((state: rootState) => state.users);
    const dispatcher = useDispatch();
    const repoUser = useMemo(() => new UserRepository(), []);

    const handleLogin = (user: Partial<ProtoUser>) => {
        repoUser
            .login(user)
            .then((token: string) => dispatcher(ac.loginAction(token)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        users,
        handleLogin,
    };
};
