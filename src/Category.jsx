import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Category = () => {
    const products = useLoaderData()

    return (
        <div>

             <h2 className="text-2xl font-bold text-center my-7">All Categories</h2>
            <div className="lg:flex justify-between px-5 my-6">
                {
                    products.slice(0, 5).map((product) =>   <h2 key={product._id} className=" my-3 px-7 py-3  border-blue-500 border-4 rounded-full text-lg font-bold">{product.CategoryName}</h2>)
                }
            </div>
        </div>
    );
};

export default Category;