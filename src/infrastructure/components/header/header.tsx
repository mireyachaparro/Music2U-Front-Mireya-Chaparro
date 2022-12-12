import { useUsers } from '../../../features/user/hooks/use.users';
import { Menu } from '../menu/menu';

export function Header() {
    const { users } = useUsers();
    return (
        <>
            {users.isLogged ? (
                <>
                    <header className="flex flex-row px-2 py-3 bg-gray-300 header">
                        <Menu></Menu>
                    </header>
                </>
            ) : (
                <p></p>
            )}
        </>
    );
}
