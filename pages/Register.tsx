import { useRouter } from "next/router";
import React from "react";

function Register() {

  const router = useRouter()
  return (
    <div className="min-h-screen ">
      <div className="flex justify-center items-center">
        <form className="md:flex flex-col shadow-lg rounded-md py-5 md:w-1/4">
          <div className="bg-cyan-600 h-[60px]">
            <h2 className="p-3 text-xl font-semibold text-gray-100">
              Register
            </h2>
          </div>
          <label className="block mb-5 px-5 mt-5">
            <input
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="text"
              placeholder="Name"
            />
          </label>
          <label className="block mb-5 px-5">
            <input
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="email"
              placeholder="Email"
            />
          </label>
          <label className="block mb-5 px-5">
            <input
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="password"
              placeholder="Password"
            />
          </label>
          <label className="block mb-5 px-5">
            <input
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="password"
              placeholder="Confirm password"
            />
          </label>
          <div className="flex justify-start items-center px-5">
            <p>
              Have an account??
              <span
                className="text-blue-500 px-1 cursor-pointer hover:underline"
                onClick={() => router.replace('/login')}
              >
                Login
              </span>
            </p>
          </div>
          <div className="flex justify-end p-5">
            <button className="bg-cyan-600 text-gray-100 font-semibold p-2 shadow-lg rounded-md cursor-pointer">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
