import { FavList } from '../list/fav.list';

function FavPage() {
    return (
        <>
            <div className="h-full p-8 bg-gray-100">
                <h2 className="text-4xl font-bold">My favorites</h2>
                <FavList></FavList>
            </div>
        </>
    );
}

export default FavPage;
