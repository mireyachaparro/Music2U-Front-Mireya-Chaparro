import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
import { userMock } from '../../../mock/mocks';
import { Album } from '../../album/model/album.model';
import { ProtoUser, User } from '../model/user.model';
import { UserRepository } from '../services/user.repository';
import { useUsers } from './use.users';

let result: {
    current: {
        users: {
            isLogged: boolean;
            isLogging: boolean;
            user: User | null;
            token: string;
        };
        handleLogin: (user: Partial<ProtoUser>) => void;
        handleAddFav: (album: Partial<Album>) => void;
        handleDeleteFav: (album: Partial<Album>) => void;
    };
};

describe('', () => {
    beforeEach(() => {
        UserRepository.prototype.register = jest
            .fn()
            .mockResolvedValue(userMock);

        UserRepository.prototype.login = jest.fn().mockResolvedValue(userMock);

        UserRepository.prototype.addFav = jest.fn().mockResolvedValue(userMock);

        UserRepository.prototype.deleteFav = jest
            .fn()
            .mockResolvedValue(userMock);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useUsers(), { wrapper }));
    });
    test('login', () => {
        result.current.handleLogin({
            email: userMock.email,
            password: userMock.password,
        });
        expect(UserRepository.prototype.login).toHaveBeenCalled();
    });

    test('login error', () => {
        (UserRepository.prototype.login as jest.Mock).mockRejectedValueOnce(
            new Error()
        );
        result.current.handleLogin(userMock);
        expect(UserRepository.prototype.login).toHaveBeenCalled();
    });

    test('add fav', () => {
        result.current.handleAddFav({});
        expect(UserRepository.prototype.addFav).toHaveBeenCalled();
    });

    test('add fav error', () => {
        (UserRepository.prototype.addFav as jest.Mock).mockRejectedValueOnce(
            new Error()
        );
        result.current.handleAddFav({});
        expect(UserRepository.prototype.addFav).toHaveBeenCalled();
    });

    test('delete fav', () => {
        result.current.handleDeleteFav({});
        expect(UserRepository.prototype.deleteFav).toHaveBeenCalled();
    });

    test('delete fav error', () => {
        (UserRepository.prototype.deleteFav as jest.Mock).mockRejectedValueOnce(
            new Error()
        );
        result.current.handleDeleteFav({});
        expect(UserRepository.prototype.deleteFav).toHaveBeenCalled();
    });
});
export { userMock };
