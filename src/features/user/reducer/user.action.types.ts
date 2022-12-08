export const actionTypes = {
    startLogin: 'users@startLogin',
    // el reducer hace esto:
    // isLogged: false,
    // islogging: true,
    // user: null,
    // token: ""

    login: 'users@login',
    // el reducer hace esto:
    // isLogged: true,
    // islogging: false,
    // user: User,
    // token: "asdf"

    logout: 'users@logout',
    // el reducer hace esto:
    // isLogged: false,
    // islogging: false,
    // user: null,
    // token: ""

    addFav: 'users@addFav',
    // user: User,
    deleteFav: 'users@deleteFav',
    // user: User,
};
