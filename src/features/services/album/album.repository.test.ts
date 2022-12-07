import { AlbumRepository } from './album.repository';
import { AlbumModel } from '../../models/album/album.model';

describe('given AlbumRepository', () => {
    let albumRepo: AlbumRepository;
    beforeEach(() => {
        albumRepo = new AlbumRepository('https://test');
        const mockAlbum = new AlbumModel('', '', '', 1, '', '', 1, false);
    });

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

    //     describe('when we use albumRepo.create()', () => {
    //         test('then it should return ');
    //     });
});
