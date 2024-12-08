import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    
    
   

    return (
        <div className="navbar p-3 sm:p-0 sm:w-10/12 mx-auto items-center ">
            <div className="navbar-start p-0 ">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <Link to="/">Home</Link>
                        <Link to='/all equipment'>All Equipment</Link>
                        <Link to='/add equipment'>Add Equipment</Link>
                        <Link to='/my equipment'>My Equipment List</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-sm  md:text-xl lg:text-2xl font-extrabold p-0 ">Sports Equipment Store</a>
            </div>
            <div  className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-7">
                    <NavLink className='text-sm font-bold text-gray-600' to="/">Home</NavLink>
                    <NavLink className='text-sm font-bold text-gray-600' to='/all equipment'>All Equipment</NavLink>
                    <NavLink className='text-sm font-bold text-gray-600'  to='/add equipment'>Add Equipment</NavLink>
                    <NavLink className='text-sm font-bold text-gray-600' to='/my equipment'>My Equipment List</NavLink>
                </ul>
            </div>
            <div className="navbar-end pr-6">
                 
          
                {
                    user ?
                        <span className="flex justify-center items-center gap-4">
                            <img className="w-12 rounded-full h-12 object-cover" title={user.displayName
                            } src={user.photoURL} alt="" />
                            <Link onClick={logOut}>Log Out</Link>
                        </span>
                        :
                        <span className="flex gap-4">
                            <Link className="btn p-1 sm:px-3 sm:py-2" to='/login'>Login</Link>
                            <Link className="btn p-1 sm:px-3 sm:py-2" to='/register'>Register</Link>
                        </span>

                }


            </div>
        </div>
    );
};

export default NavBar;