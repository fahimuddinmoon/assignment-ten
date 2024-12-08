
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const info = useLoaderData()
    const { _id,image, ItemName, CategoryName, Description, price, rating, Customization, ProcessingTime, StockStatus, email, UserName } = info
    const handleAddCurt = () => {
        fetch('http://localhost:4000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "woooowww...",
                        text: "Successfully Added Your List!",
                    });

                }
            })
    }
    return (
        <div>


            <div className="w-10/12 mx-auto p-4 ">
                <div className=" text-center  z-10">
                    <h1 className='text-4xl font-bold  py-4'>
                        Product Details
                    </h1>
                    <p className='text-sm font-semibold lg:px-60 py-4'>
                        Explore the latest product that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
                <div className=" w-10/12 lg:w-6/12 lg:grid lg:grid-cols-2 gap-9 p-5 bg-slate-200 mx-auto   rounded-lg ">
                    <div className="">
                        <img className="w-full h-full rounded-lg" src={image} alt="" />
                    </div>
                    <div >
                        <h2 className="text-2xl font-bold mb-2">Name :- {ItemName}</h2>
                        <p className="text-lg font-bold mb-2">Category :- {CategoryName}</p>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Information :- {Description.slice(0, 149)}</p>
                        <p className="text-xl font-bold mb-2">Price :- {price} tk</p>
                        <p className="text-xl font-bold mb-2"> Customization :- {Customization} </p>
                        <p className="text-xl font-bold mb-2">ProcessingTime :- {ProcessingTime} </p>
                        <p className="text-xl font-bold mb-2">Available :- {StockStatus} </p>

                        <p className="text-lg font-bold mb-2">Rating :- {rating}</p>
                        <div className="flex items-center gap-4">
                            <button onClick={handleAddCurt} className="bg-pink-700 py-1 px-3 border-2 border-gray-800 rounded-full text-white font-semibold text-lg">Add TO MyList</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;