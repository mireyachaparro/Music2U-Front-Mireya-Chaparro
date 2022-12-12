import { Navigate } from 'react-router-dom';
import { useUsers } from '../../../../features/user/hooks/use.users';
import { FavList } from '../list/fav.list';

function FavPage() {
    const { users } = useUsers();
    return (
        <>
            {users.isLogged ? (
                <>
                    <div className="h-screen p-8 bg-gray-100">
                        <h2 className="text-4xl font-bold">My favorites</h2>
                        <FavList></FavList>
                    </div>
                </>
            ) : (
                <Navigate to="/"></Navigate>
            )}
        </>
    );
}

export default FavPage;
