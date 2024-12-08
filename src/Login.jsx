import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        loginUser(email,password)
        .then(result =>{
            toast.success('Successfully Login!')
            navigate('/')
        }).catch((error) => {
            toast.error('Login Failed . Please Try Again!')
          });
    }
    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-center text-2xl font-bold my-5">Login</h1>
            <div class="card bg-base-100 w-8/12 mx-auto my-7 shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" class="input input-bordered" required />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    
                </form>
                <p className="text-sm font-bold text-gray-600 text-center pb-6">You have no account please . <Link to='/register'className="text-lg font-bold text-red-600 "> Register </Link></p>
            </div>
            
        </div>
    );
};

export default Login;