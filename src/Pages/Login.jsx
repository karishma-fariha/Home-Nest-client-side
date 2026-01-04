import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { FaEye, FaEyeSlash, FaUserShield } from 'react-icons/fa'; // Added icon for demo
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const { login, googleLogin, setEmailForReset } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleForgetPassword = () => {
        setEmailForReset(email);
        navigate("/auth/forget-password");
    }

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.log(error);
            });
    }

    // --- NEW DEMO LOGIN HANDLER ---
    const handleDemoLogin = (e) => {
        e.preventDefault();
        login("user@gmail.com", "User10")
            .then(() => {
                toast.success("Logged in as Demo User");
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                setError(error.code);
                toast.error(error.code);
            });
    }

    const handleTogglePasswordShow = (e) => {
        e.preventDefault();
        setShowPass(!showPass);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(() => {
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);
                toast(errorCode);
            });
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className='font-bold text-2xl text-center text-primary'>Login Your Account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email"
                            className="input"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name='email' required />
                        {/* pass */}
                        <div className="relative">
                            <label className="label">Password</label>
                            <input
                                type={showPass ? 'text' : 'password'} // Fixed: 'text' when showPass is true
                                className="input"
                                placeholder="Password"
                                name='password' required />
                            <button
                                type="button" // Prevent form submission
                                onClick={handleTogglePasswordShow}
                                className='btn btn-xs absolute bottom-1 right-6'>
                                {showPass ? <FaEyeSlash /> : <FaEye size={14} />}
                            </button>
                        </div>

                        <div>
                            <Link onClick={handleForgetPassword} className="link link-hover">
                                Forgot password?</Link>
                        </div>
                        {
                            error && <p className='text-primary'>{error}</p>
                        }
                        <button className="btn btn-primary mt-4 hover:bg-secondary">Login</button>
                        
                        <button
                            type="button" // Prevent form submission
                            onClick={handleGoogleSignIn}
                            className="btn border-2 border-primary mt-4 hover:bg-secondary">
                            <FcGoogle size={24} /> Login With Google
                        </button>

                        {/* --- NEW DEMO LOGIN BUTTON --- */}
                        <button
                            type="button"
                            onClick={handleDemoLogin}
                            className="btn btn-secondary mt-4 variant-outline">
                            <FaUserShield size={20} /> Login as Demo User
                        </button>

                        <p className='text-center font-semibold pt-5'>Already Have an Account?<Link className='text-primary' to="/auth/register">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;