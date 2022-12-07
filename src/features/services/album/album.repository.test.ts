import { AlbumRepository } from './album.repository';
import { AlbumModel } from '../../models/album/album.model';

describe('given AlbumRepository', () => {
    let albumRepo: AlbumRepository;
    beforeEach(() => {
        albumRepo = new AlbumRepository('https://test');
    });
    const mockAlbum = new AlbumModel('', '', '', 1, '', '', 1, false);
    describe('when we use albumRepo.getAll()', () => {
        test('then it should return a Promise of an Array of Album', async () => {
            const res = {
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            };
            global.fetch = jest.fn().mockResolvedValue(res);
            const result = await albumRepo.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        test('then if there is any problem, it should throw an error', async () => {
            const res = {
                ok: false,
                status: 500,
                statusText: 'Server Error',
            };
            global.fetch = jest.fn().mockResolvedValue(res);
            expect(async () => {
                await albumRepo.getAll();
            }).rejects.toThrow();
        });
    });

    describe('when we use albumRepo.create()', () => {
        test('then it should return the new album', async () => {
            const res = {
                ok: true,
                json: jest.fn().mockResolvedValue(mockAlbum),
            };

            global.fetch = jest.fn().mockResolvedValue(res);
            const result = await albumRepo.create(mockAlbum);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockAlbum);
        });

        test('then if res is not true', async () => {
            const res = {
                ok: false,
                status: 500,
                statusText: 'Server Error',
            };
            global.fetch = jest.fn().mockResolvedValue(res);
            expect(async () => {
                await albumRepo.create(mockAlbum);
            }).rejects.toThrow();
        });
    });

    describe('when we use albumRepo.update()', () => {
        const mockUpdate = { id: '1', name: 'pepe' };
        const mockFinal = {
            ...new AlbumModel('', '', '', 1, '', '', 1, false),
            id: '1',
        };
        test('then it should return the updated album', async () => {
            const res = {
                ok: true,
                json: jest.fn().mockResolvedValue(mockFinal),
            };
            global.fetch = jest.fn().mockResolvedValue(res);
            const result = await albumRepo.update(mockUpdate);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockFinal);
        });

        test('then if there is any error, it throws an error', async () => {
            const res = {
                ok: false,
                status: 503,
                statusText: 'Server Error',
            };
            global.fetch = jest.fn().mockResolvedValue(res);
            expect(async () => {
                await albumRepo.create(mockUpdate);
            }).rejects.toThrow();
        });
    });

    describe('when we use albumRepo.delete()', () => {
        test('then it should return avoid Promise', async () => {
            const res = { ok: true };
            global.fetch = jest.fn().mockResolvedValue(res);
            const result = await albumRepo.delete('1');
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });

        test('then if there is any problem, it should throw an error', async () => {
            const res = {
                ok: false,
                status: 503,
                statusText: 'Server Error',
            };
            global.fetch = jest.fn().mockResolvedValue(res);
            expect(async () => {
                await albumRepo.delete('8');
            }).rejects.toThrow();
        });
    });
});
