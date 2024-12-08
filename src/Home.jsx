import { Link, Outlet, useLoaderData } from "react-router-dom";
import Banner from "./banner";
import NavBar from "./NavBar";
import Card from "./Card";
import Category from "./Category";


const Home = () => {
    const products = useLoaderData()
    return (
        <div className="w-10/12 mx-auto p-4">
            <Banner></Banner>
            <div className="text-center my-9">
                <h2 className='text-4xl font-bold  py-4'>All Category Equipment</h2>
               
            </div>
            <div className="sm:grid  lg:grid-cols-3 md:grid-cols-2 gap-7 my-8">
                  {
                    products.slice(0,6).map((product) => <Card key={product._id} product={product}></Card>)
                  }
            </div>
            <button className="my-6 mx-auto block"><Link to='/all equipment' className="px-4 py-3 rounded-full bg-blue-500 text-white text-lg font-bold ">View More</Link></button>

          <Category></Category>

        </div>
    );
};

export default Home;