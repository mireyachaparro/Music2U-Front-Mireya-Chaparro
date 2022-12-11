import { Link } from 'react-router-dom';

export function Menu() {
    const menuOptions = [
        { id: '1', path: 'albums', label: 'Home' },
        { id: '2', path: 'favorites', label: 'Fav' },
        { id: '3', path: 'profile', label: 'Profile' },
    ];
    return (
        <nav className="nav">
            <ul className="nav__list">
                <div>
                    <li className="nav__listitem" key={menuOptions[0].id}>
                        <Link to={menuOptions[0].path}>
                            <img
                                src="./assets/favicon.png"
                                alt="logo"
                                width="40px"
                            />
                        </Link>
                    </li>
                </div>
                <div>
                    <li className="nav__listitem" key={menuOptions[1].id}>
                        <Link to={menuOptions[1].path}>
                            <img
                                src="./assets/heart-empty-black.png"
                                alt="heart-empty"
                                width="35px"
                            />
                        </Link>
                    </li>
                    <li className="nav__listitem" key={menuOptions[2].id}>
                        <Link to={menuOptions[2].path}>
                            <img
                                src="./assets/profile.png"
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
