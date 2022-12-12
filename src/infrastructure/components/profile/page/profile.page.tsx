import { useUsers } from '../../../../features/user/hooks/use.users';
import { ProfileList } from '../list/profile';

function ProfilePage() {
    const { users } = useUsers();

    return (
        <>
            <div className="h-full p-8 bg-gray-100">
                <h2 className="text-4xl font-bold">
                    {users.user?.name} {users.user?.last_name}
                </h2>
                <ProfileList></ProfileList>
            </div>
        </>
    );
}

export default ProfilePage;
