import { userMock } from '../../../mock/mocks';
import { UserRepository } from './user.repository';

describe('given userRepository', () => {
    let userRepo: UserRepository;
    const error = new Error('Error');
    beforeEach(() => {
        userRepo = new UserRepository();
    });
    describe('when we use albumRepo.register()', () => {
        test('bien', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(userMock),
            });
            const result = await userRepo.register(userMock);

            expect(result).toBe(userMock);
        });

        test('then if there is any problem, it should throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });

            await userRepo.register(userMock);

            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('when we use albumRepo.login()', () => {
        test('then it should return the user and token', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(userMock),
            });
            const result = await userRepo.login(userMock);

            expect(result).toBe(userMock);
        });

        test('then if res is not true', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });

            await userRepo.login(userMock);

            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('when we use albumRepo.addFav()', () => {
        test('then it should return the user with a new fav', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(userMock),
            });
            const result = await userRepo.addFav('');

            expect(result).toBe(userMock);
        });

        test('then if there is any error, it throws an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'Error',
            });

            await userRepo.addFav('');

            expect(error).toBeInstanceOf(Error);
        });
    });

    describe('when we use albumRepo.delete()v', () => {
        test('then it should return the user without this album', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(userMock),
            });
            const result = await userRepo.deleteFav('');

            expect(result).toBe(userMock);
        });

        test('then if there is any problem, it should throw an error', async () => {
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
