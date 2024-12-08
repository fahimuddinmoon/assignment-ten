import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const AllEquipment = () => {
    const[sorted, setSorted] = useState([])
    const products = useLoaderData()
   
    useEffect(()=>{
        setSorted(products)
    },[products])
    const handleSort = () => {
        const serialData = sorted.sort((a,b) => a.price - b.price)
        setSorted([...sorted,serialData])
    }
    return (
        <div className="w-10/12 mx-auto px-4">
            <h2 className="text-2xl font-extrabold py-6 text-center">All Sports Equipment</h2>
            <div className="text-right ">
                <button onClick={handleSort} className="px-4 py-3 rounded-xl bg-blue-500 text-white text-lg font-bold my-6 "> Sort By Price</button>
            </div>
            <div>
                <div className=" ">
                    <table className="table p-0 m-0">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Photo</th>
                                <th>Name</th>
                                 
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) =>
                                   
                                    <tr key={product._id} >
                                        <th>{index + 1}</th>
                                        <img className=" w-12 h-12 sm:w-20 sm:h-24 object-cover" src={product.image} alt="" />
                                        <td>{product.ItemName}</td>
                                        
                                        <td>{product.price} tk</td>
                                        <td > <Link to={`/all equipment/${product._id}`} className="border px-1 py-1 text-sm  sm:px-3 sm:py-2 rounded-full bg-blue-500 sm:text-lg sm:font-bold text-white">Details</Link></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllEquipment;