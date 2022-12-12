import { VinylList } from '../list/vinyl.list';

function VinylPage() {
    return (
        <>
            <div className="h-screen p-8 bg-gray-100">
                <h2 className="text-4xl font-bold">Vinyls</h2>
                <VinylList></VinylList>
            </div>
        </>
    );
}

export default VinylPage;
