import { CdList } from '../list/cd.list';

function CdPage() {
    return (
        <>
            <div className="h-full p-8 bg-gray-100">
                <h2 className="text-4xl font-bold">CDs</h2>
                <CdList></CdList>
            </div>
        </>
    );
}

export default CdPage;
