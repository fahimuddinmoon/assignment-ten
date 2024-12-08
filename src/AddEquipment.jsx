import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const AddEquipment = () => {
    const { user } = useContext(AuthContext)



    const handleSubmit = (e) => {
        e.preventDefault()
        const image = e.target.image.value
        const ItemName = e.target.ItemName.value
        const CategoryName = e.target.CategoryName.value
        const Description = e.target.Description.value
        const price = e.target.price.value
        const rating = e.target.rating.value
        const Customization = e.target.Customization.value
        const ProcessingTime = e.target.ProcessingTime.value
        const StockStatus = e.target.StockStatus.value
        const email = e.target.email.value
        const UserName = e.target.UserName.value
        const products = { image, ItemName, CategoryName, Description, price, rating, Customization, ProcessingTime, StockStatus, email, UserName }

        fetch('http://localhost:4000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then((data) => {
                if(data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: "woooowww...",
                        text: "Successfully Added!",
                      });
                    
                }
            })
    }
    return (
        <div className="w-10/12 mx-auto px-4">
            <h2 className="text-center text-2xl font-bold my-6">Add Equipment</h2>
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">

                    <div className="sm:flex justify-between gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="Image" name="image" className="input input-bordered" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" placeholder="Item Name" name="ItemName" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="sm:flex justify-between gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <select name="CategoryName" id="cars" className="h-11 rounded-lg border-gray-300 border">
                                <option value="Cricket">Cricket</option>
                                <option value="Football">Football</option>
                                <option value="Badminton">Badminton</option>
                                <option value="Tennis">Tennis</option>
                                <option value="Pool">Pool</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Description" name="Description" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="sm:flex justify-between gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" name="price" className="input input-bordered" required />

                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" placeholder="Rating" name="rating" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="sm:flex justify-between gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" placeholder="Customization" name="Customization" className="input input-bordered" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input type="text" placeholder="Processing Time" name="ProcessingTime" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="sm:flex justify-between gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input type="number" placeholder="Stock Status" name="StockStatus" className="input input-bordered" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" placeholder="User email" value={user?.email} name="email" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" placeholder="User Name" value={user?.displayName} name="UserName" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Added Item</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default AddEquipment;