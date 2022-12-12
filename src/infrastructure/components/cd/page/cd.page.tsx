import { Navigate } from 'react-router-dom';
import { useUsers } from '../../../../features/user/hooks/use.users';
import { CdList } from '../list/cd.list';

function CdPage() {
    const { users } = useUsers();

    return (
        <>
            {users.isLogged ? (
                <>
                    <div className="h-screen p-8 bg-gray-100">
                        <h2 className="text-4xl font-bold">CDs</h2>
                        <CdList></CdList>
                    </div>
                </>
            ) : (
                <Navigate to="/"></Navigate>
            )}
        </>
    );
}

export default CdPage;
