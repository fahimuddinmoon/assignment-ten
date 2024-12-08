

const Card = ({ product }) => {
    const { image, ItemName, CategoryName, Description, price, rating, Customization, ProcessingTime, StockStatus, email, UserName } = product

    return (
        <div className="card m-3 shadow-xl">
            <figure>
                <img
                    className="h-64"
                    src={image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{ItemName}</h2>
                <p className="text-lg font-semibold text-gray-500"> Category :- {CategoryName}</p>
                <p className="text-lg font-semibold text-gray-500"> Rating :- {rating}</p>
                <p className="text-lg font-semibold text-gray-500"> Stock :- {StockStatus}</p>
                <p className="text-lg font-semibold text-gray-500"> Price :- {price}</p>
            </div>

        </div>
    );
};

export default Card;