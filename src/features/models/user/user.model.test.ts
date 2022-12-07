import { UserModel } from './user.model';

describe('Given UserModel', () => {
    describe('when we instantiate it', () => {
        const user = new UserModel('', '', '', '', '', '');
        test('then we should have an object of the class', () => {
            expect(user).toBeInstanceOf(UserModel);
        });
    });
});
