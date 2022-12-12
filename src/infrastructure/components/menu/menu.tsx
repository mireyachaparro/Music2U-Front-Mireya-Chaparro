import { Link } from 'react-router-dom';

export function Menu() {
    const menuOptions = [
        { id: '1', path: 'albums', label: 'Home' },
        { id: '2', path: 'favorites', label: 'Fav' },
        { id: '3', path: 'profile', label: 'Profile' },
    ];
    return (
        <nav className="flex nav">
            <ul className="flex nav__list ">
                <div className="flex items-center ">
                    <li className="px-2 nav__listitem" key={menuOptions[0].id}>
                        <Link to={menuOptions[0].path}>
                            <img
                                src="/assets/favicon.png"
                                alt="logo"
                                width="40px"
                            />
                        </Link>
                    </li>
                </div>
                <div className="absolute right-0 flex items-center justify-end pr-4 ">
                    <li className="px-2 nav__listitem" key={menuOptions[1].id}>
                        <Link to={menuOptions[1].path}>
                            <img
                                src="/assets/heart-empty-black.png"
                                alt="heart-empty"
                                width="35px"
                            />
                        </Link>
                    </li>
                    <li className="px-2 nav__listitem" key={menuOptions[2].id}>
                        <Link to={menuOptions[2].path}>
                            <img
                                src="/assets/profile.png"
                                alt="profile"
                                width="45px"
                            />
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}
