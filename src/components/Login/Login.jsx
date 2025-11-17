import React, { useContext } from 'react';
import { AuthContext } from '../../page/AuthProvider/AuthProvider';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';


const Login = () => {
      const { login, loginWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
    const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate(from, { replace: true });
  };
    return (
            <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="relative">
        <input
          type={showPass ? "text" : "password"}
          placeholder="Password"
          
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
         <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <IoEyeOff size={20} /> : <IoEye/>}
            </span>
            </div>
        <button type="submit" className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
          Login
        </button>
      </form>
        <button onClick={loginWithGoogle} className="btn w-full flex items-center justify-center gap-2 mt-4">
                <FcGoogle size={20} /> Continue with Google
              </button>
      <p className="mt-2 text-sm text-center">
        Don't have an account? <Link className="text-purple-600" to="/signup">SignUp</Link>
      </p>
    </div>
    );
};

export default Login;