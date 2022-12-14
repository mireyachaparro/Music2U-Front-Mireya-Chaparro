import { userMock } from '../../../mock/mocks';
import { AlbumModel } from '../../album/model/album.model';
import { UserRepository } from './user.repository';

describe('given AlbumRepository', () => {
    let userRepo: UserRepository;
    const error = new Error('Error');
    beforeEach(() => {
        userRepo = new UserRepository();
    });
    const mockAlbum = new AlbumModel('', '', '', 1, '', '', 1, false);
    describe('reister', () => {
        test('bien', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(userMock),
            });
            const result = await userRepo.register(userMock);

            expect(result).toBe(userMock);
        });

        test('mal', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });

            await userRepo.register(userMock);

            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('login', () => {
        test('bien', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(userMock),
            });
            const result = await userRepo.login(userMock);

            expect(result).toBe(userMock);
        });

        test('mal', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });

            await userRepo.login(userMock);

            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('addfav', () => {
        test('bien', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(userMock),
            });
            const result = await userRepo.addFav('');

            expect(result).toBe(userMock);
        });

        test('mal', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });

            await userRepo.addFav('');

            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('delete fav', () => {
        test('bien', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(userMock),
            });
            const result = await userRepo.deleteFav('');

            expect(result).toBe(userMock);
        });

        test('mal', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });

            await userRepo.deleteFav('');

            expect(error).toBeInstanceOf(Error);
        });
    });
});
