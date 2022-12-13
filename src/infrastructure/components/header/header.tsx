import { useUsers } from '../../../features/user/hooks/use.users';
import { Menu } from '../menu/menu';

export function Header() {
    const { users } = useUsers();
    return (
        <>
            {users.isLogged ? (
                <>
                    <header className="flex px-4 py-5 bg-gray-300 shadow-xl drop-shadow header">
                        <Menu></Menu>
                    </header>
                </>
            ) : (
                <p></p>
            )}
        </>
    );
}
