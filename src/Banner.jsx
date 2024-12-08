import { Link } from "react-router-dom";
import pic1 from '../public/Seasonal-Sports-Equipment-Storage-1024x668.jpg'
import pic2 from '../public/sports-equipment-wooden-background_51195-86.avif'
import pic3 from '../public/Sports-storage.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                    src={pic1}
                    className="w-full h-96 opacity-20  p-2 " />
                <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="hidden lg:inline btn btn-circle mt-20 pt-4">❮</a>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold md:px-32 lg:px-80 md:text-center mb-3">Set Your Goals Brighten Your Future</h2>
                        <p className="hidden md:inline text-sm font-semibold text-gray-700  text-center items-center">Career counseling is the key to discovering your true potential. It helps you align your skills, <br /> passions, and goals to build a career that reflects your values and dreams.
                        </p>
                        <div className="text-center mt-6"><Link to='/all equipment' className="border-3 border-blue-500 px-3 py-2 bg-blue-400 rounded-lg">Show More</Link></div>
                    </div>
                    <a href="#slide2" className="hidden lg:inline btn btn-circle mt-20 pt-4">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={pic2}
                    className="w-full h-96 opacity-20 p-2" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="hidden lg:inline btn btn-circle mt-20 pt-4">❮</a>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold md:px-32 lg:px-80 md:text-center mb-3">Dream Big Achieve Bigger Build Your Career</h2>
                        <p className="hidden md:inline text-sm font-semibold text-gray-700   text-center">Every journey has hurdles. A career counselor provides guidance and encouragement <br /> to help you stay motivated even in tough times.
                        </p>
                        <div className="text-center mt-6"><Link to='/all equipment' className="border-3 border-blue-500 px-3 py-2 bg-blue-400 rounded-lg">Show More</Link></div>
                    </div>
                    <a href="#slide3" className="hidden lg:inline btn btn-circle mt-20 pt-4">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={pic3}
                    className="w-full h-96 opacity-20 p-2" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="hidden lg:inline btn btn-circle mt-20 pt-4">❮</a>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold md:px-32 lg:px-80 md:text-center mb-3">Find Your Path A Guide to Career Success</h2>
                        <p className="hidden md:inline text-sm font-semibold text-gray-700   text-center">True success comes from doing what you love. Counseling helps you identify careers <br /> that resonate with your passions and strengths.
                        </p>
                        <div className="text-center mt-6"><Link to='/all equipment' className="border-3 border-blue-500 px-3 py-2 bg-blue-400 rounded-lg">Show More</Link></div>
                    </div>
                    <a href="#slide1" className="hidden lg:inline btn btn-circle mt-20 pt-4">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;