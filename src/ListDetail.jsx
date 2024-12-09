

const ListDetail = ({ data }) => {
    
    const { _id, image, ItemName, CategoryName, Description, price, rating, Customization, ProcessingTime, StockStatus, email, UserName } = data
    return (
        <div className="card  shadow-xl">
            <figure className="">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-2xl font-bold mb-2">Name :- {ItemName}</h2>
                <p className="text-lg font-bold mb-2">Category :- {CategoryName}</p>
                <p className="text-sm font-semibold text-gray-700 mb-2">Information :- {Description}</p>
                <p className="text-xl font-bold mb-2">Price :- {price} tk</p>
                <p className="text-xl font-bold mb-2"> Customization :- {Customization} </p>
                <p className="text-xl font-bold mb-2">ProcessingTime :- {ProcessingTime} </p>
                <p className="text-xl font-bold mb-2">Available :- {StockStatus} </p>

                <p className="text-lg font-bold mb-2">Rating :- {rating}</p>
                <div className="card-actions flex justify-around">
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ListDetail;