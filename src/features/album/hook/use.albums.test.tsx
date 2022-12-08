import { configureStore } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react';
import { rootState, rootStore } from '../../../infrastructure/store/store';
import { Album, ProtoAlbum } from '../model/album.model';
import { albumReducer } from '../reducer/album.reducer';
import { userReducer } from '../../user/reducer/user.reducer';
import { AlbumRepository } from '../services/album.repository';
import { useAlbums } from './use.albums';
import { Provider } from 'react-redux';

jest.mock('../services/album.repository');

describe('given custom hook useAlbums', () => {
    let mockProtoAlbum: ProtoAlbum;
    let mockAlbum: Album;
    let mockAddAlbum: Album;
    let mockUpdateAlbum: Album;

    beforeEach(() => {
        mockProtoAlbum = {
            name: '',
            artist: '',
            image: '',
            year: 1,
            gender: '',
            format: '',
            price: 1,
            sold: false,
        };

        mockAlbum = {
            ...mockProtoAlbum,
            id: '1',
            owner: {
                id: '',
                name: '',
                last_name: '',
                email: '',
                password: '',
                phone: '',
                birthday: '',
                favorites: [],
                possessions: [],
            },
        };

        mockAddAlbum = {
            id: '2',
            name: '',
            artist: '',
            image: '',
            year: 2,
            gender: '',
            format: '',
            price: 2,
            sold: false,
            owner: {
                id: '',
                name: '',
                last_name: '',
                email: '',
                password: '',
                phone: '',
                birthday: '',
                favorites: [],
                possessions: [],
            },
        };

        mockUpdateAlbum = {
            id: '1',
            name: '',
            artist: '',
            image: '',
            year: 3,
            gender: '',
            format: '',
            price: 3,
            sold: false,
            owner: {
                id: '',
                name: '',
                last_name: '',
                email: '',
                password: '',
                phone: '',
                birthday: '',
                favorites: [],
                possessions: [],
            },
        };
    });

    describe('when we use in a component', () => {
        interface Current {
            albums: Array<Album>;
            handleLoad: () => void;
            handleAdd: (newAlbum: ProtoAlbum) => void;
            handleUpdate: (updateAlbum: Partial<Album>) => void;
            handleDelete: (id: Album['id']) => void;
        }

        let current: Current;
        let mockStore: rootStore;

        beforeEach(() => {
            const preloadedState: rootState = {
                albums: [],
                users: {
                    isLogged: false,
                    isLogging: false,
                    user: null,
                    token: '',
                },
            };

            mockStore = configureStore({
                reducer: {
                    albums: albumReducer,
                    users: userReducer,
                },
                preloadedState,
            });

            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockStore}> {children} </Provider>
            );

            ({
                result: { current },
            } = renderHook(() => useAlbums(), { wrapper }));
        });

        test('then if the hook call handleLoad, it call the repository for the initial data and dispatch an action for load the data in the state', () => {
            (AlbumRepository.prototype.getAll as jest.Mock).mockResolvedValue([
                mockAlbum,
            ]);

            current.handleLoad();
            expect(AlbumRepository.prototype.getAll).toHaveBeenCalled();
        });

        test('handleLoad error', async () => {
            const mockCLG = jest.spyOn(global.console, 'log');
            (
                AlbumRepository.prototype.getAll as jest.Mock
            ).mockRejectedValueOnce(new Error());
            await current.handleLoad();
            expect(mockCLG).toHaveBeenCalled();
            expect(AlbumRepository.prototype.getAll).toHaveBeenCalled();
        });

        test('then if the hook call handleAdd, it call the repository to add a new album and dispatch an action to add the album to the state', () => {
            (AlbumRepository.prototype.create as jest.Mock).mockResolvedValue(
                mockAddAlbum
            );

            expect(current.albums).toEqual([]);
            current.handleAdd(mockAddAlbum);
            expect(AlbumRepository.prototype.create).toHaveBeenCalled();
        });

        test('handleAdd error', () => {
            (
                AlbumRepository.prototype.create as jest.Mock
            ).mockRejectedValueOnce(new Error());
            current.handleAdd(mockAddAlbum);
            expect(AlbumRepository.prototype.create).toHaveBeenCalled();
        });

        test('then if the hook call handleUpdate, it call the repository to update a album and dispatch an action to update the album in the state', () => {
            (AlbumRepository.prototype.update as jest.Mock).mockResolvedValue(
                mockUpdateAlbum
            );

            expect(current.albums).toEqual([]);
            current.handleUpdate(mockUpdateAlbum);
            expect(AlbumRepository.prototype.update).toHaveBeenCalled();
        });

        test('handleUpdate error', () => {
            (
                AlbumRepository.prototype.update as jest.Mock
            ).mockRejectedValueOnce(new Error());
            current.handleUpdate(mockUpdateAlbum);
            expect(AlbumRepository.prototype.update).toHaveBeenCalled();
        });

        test('then if the hook call handleDelete, it call the repository to delete a album and dispatch an action to delete album from state', () => {
            (AlbumRepository.prototype.delete as jest.Mock).mockResolvedValue(
                undefined
            );

            expect(current.albums).toEqual([]);
            current.handleDelete('1');
            expect(AlbumRepository.prototype.delete).toHaveBeenCalled();
        });

        test('handleDelete error', () => {
            (
                AlbumRepository.prototype.delete as jest.Mock
            ).mockRejectedValueOnce(new Error());
            current.handleDelete('1');
            expect(AlbumRepository.prototype.delete).toHaveBeenCalled();
        });
    });
});
