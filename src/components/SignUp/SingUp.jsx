import React, { useContext, useState } from 'react';
import { AuthContext } from '../../page/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const SingUp = () => {
     const { register, loginWithGoogle } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must have uppercase, lowercase letters & min 6 characters");
      return;
    }

    await register(name, email, password, photoURL);
    navigate("/"); // Redirect to home after registration
  };

    return (
       <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">SignUp</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />
         <div className="relative">
        <input
          type={showPass ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
         className="input input-bordered w-full"
        />
           <span
                      className="absolute right-3 top-3 cursor-pointer"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? <IoEyeOff size={20} /> : <IoEye/>}
                    </span>
                    </div>
        <input
          type="text"
          placeholder="Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
        >
       SignUp
        </button>
      </form>
    <button onClick={loginWithGoogle} className="btn w-full flex items-center justify-center gap-2 mt-4">
          <FcGoogle size={20} /> Continue with Google
        </button>

      <p className="mt-2 text-sm text-center">
        Already have an account?{" "}
        <Link className="text-purple-600" to="/login">
          Login
        </Link>
      </p>
    </div>
    );
};

export default SingUp;