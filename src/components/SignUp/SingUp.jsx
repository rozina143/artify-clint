import React, { useContext, useState } from 'react';
import { AuthContext } from '../../page/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const SingUp = () => {
    const { createUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

   
    const result = await createUser(email, password);


    localStorage.setItem(
      "user",
      JSON.stringify({
        email: result.user.email,
        name: name,
      })
    );


    navigate("/");
  };

    return (
       <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>

      <form onSubmit={handleSignup} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border p-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border p-2 rounded"
          required
        />

        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="border p-2 rounded w-full"
            required
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <IoEyeOff /> : <IoEye />}
          </span>
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-2 text-sm text-center">
        Already have an account?
        <Link className="text-purple-600 ml-2" to="/login">
          Login
        </Link>
      </p>
    </div>
    );
};

export default SingUp;