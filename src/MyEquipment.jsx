import { useLoaderData } from "react-router-dom";
import ListDetail from "./ListDetail";


const MyEquipment = () => {
    const allData = useLoaderData()
    
    return (
        <div className="w-10/12 mx-auto px-4">
            <h2 className='text-4xl font-bold  p text-center py-8'>My Equipment</h2>
            <div className="sm:grid sm:grid-cols-2 gap-7">
               {
                 allData.map(data => <ListDetail key={data._id} data={data}></ListDetail>)
               }
            </div>
        </div>
    );
};

export default MyEquipment;