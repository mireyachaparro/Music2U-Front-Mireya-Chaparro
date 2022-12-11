import { AddForm } from '../form/add.form';

function AddPage() {
    return (
        <>
            <div className="h-full p-8 bg-gray-100">
                <h2 className="text-4xl font-bold page__title">Add an album</h2>
                <AddForm></AddForm>
            </div>
        </>
    );
}

export default AddPage;
