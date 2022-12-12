import { Navigate } from 'react-router-dom';
import { useUsers } from '../../../../features/user/hooks/use.users';
import { VinylList } from '../list/vinyl.list';

function VinylPage() {
    const { users } = useUsers();
    return (
        <>
            {users.isLogged ? (
                <>
                    <div className="h-screen p-8 bg-gray-100">
                        <h2 className="text-4xl font-bold">Vinyls</h2>
                        <VinylList></VinylList>
                    </div>
                </>
            ) : (
                <Navigate to="/"></Navigate>
            )}
        </>
    );
}

export default VinylPage;
