import { AlbumModel } from './album.model';

describe('Given AlbumModel', () => {
    describe('when we instanciate it', () => {
        const album = new AlbumModel('', '', '', 1, '', '', 1, false);
        test('then we should have an object of the class', () => {
            expect(album).toBeInstanceOf(AlbumModel);
        });
    });
});
