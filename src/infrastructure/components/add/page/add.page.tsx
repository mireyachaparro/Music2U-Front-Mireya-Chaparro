import { Navigate } from 'react-router-dom';
import { useUsers } from '../../../../features/user/hooks/use.users';
import { AddForm } from '../form/add.form';

function AddPage() {
    const { users } = useUsers();
    return (
        <>
            {users.isLogged ? (
                <>
                    <div className="h-screen p-8 bg-gray-100">
                        <h2 className="text-4xl font-bold page__title">
                            Add an album
                        </h2>
                        <AddForm></AddForm>
                    </div>
                </>
            ) : (
                <Navigate to="/"></Navigate>
            )}
        </>
    );
}

export default AddPage;
