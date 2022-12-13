import { Navigate } from 'react-router-dom';
import { useUsers } from '../../../../features/user/hooks/use.users';
import { ProfileList } from '../list/profile';

function ProfilePage() {
    const { users } = useUsers();

    return (
        <>
            {users.isLogged ? (
                <>
                    <div className="h-screen px-4 pt-10 bg-gray-100">
                        <h2 className="text-4xl font-bold">
                            {users.user?.name} {users.user?.last_name}
                        </h2>
                        <ProfileList></ProfileList>
                    </div>
                </>
            ) : (
                <Navigate to="/"></Navigate>
            )}
        </>
    );
}

export default ProfilePage;
