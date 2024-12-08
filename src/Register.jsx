import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const Register = () => {
    const { createUser, setUser, profileUpdate, GoogleSignUp } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const url = e.target.url.value
        const email = e.target.email.value
        const password = e.target.password.value
        if (password.length < 6) {
            toast.error('Password Must Have 6 Letter!');
            return
        }

        const reg = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
        if (!reg.test(password)) {
            toast.error('invalid password')
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                const newUser = { name, email, }
                fetch('http://localhost:4000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            window.location.reload()
                            toast.success('Successfully created!');
                        }
                    })
                profileUpdate({ displayName: name, photoURL: url })
                    .then(res => {
                        <Navigate to='/'></Navigate>
                    })
                    .catch((error) => {
                    });


            })
            .catch(error => {

            })
    }
    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-center text-2xl font-bold my-5">Register</h1>
            <div class="card bg-base-100 w-8/12 mx-auto my-7 shrink-0 shadow-2xl">
                <form class="card-body" onSubmit={handleSubmit}>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="name" name="name" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="URL" name="url" class="input input-bordered" required />
                    </div>
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
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">SignUp</button>
                    </div>
                </form>
                <button onClick={GoogleSignUp} className="mb-6"><Link className="text-center text-lg font-bold  border-2 border-red-700 rounded-full px-4 py-2">Sign With Google</Link></button>
            </div>

        </div>
    );
};

export default Register;