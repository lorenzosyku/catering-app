import { useRouter } from "next/router";
import React from "react";

function login() {
  const router = useRouter()
  const resetPassRouter = useRouter()
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center">
        <form className="md:flex flex-col shadow-lg rounded-md py-5 md:w-1/4">
          <div className="bg-cyan-600 h-[60px]">
            <h2 className="p-3 text-xl text-gray-100 font-semibold">Login</h2>
          </div>
          <label className="block mb-5 px-5 mt-5">
            <input
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="email"
              placeholder="email"
            />
          </label>
          <label className="block mb-5 px-5">
            <input
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="password"
              placeholder="password"
            />
          </label>
          <div className="flex flex-col justify-center items-center px-5">
            <p>
              No account??{" "}
              <span
                onClick={() => router.replace('/Register')}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Create one
              </span>
            </p>
            <div className="">
              <p
                onClick={() => router.replace('/resetPassword')}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Reset Password
              </p>
            </div>
          </div>
          <div className="flex justify-end p-5">
            <button className="bg-cyan-600 font-semibold text-gray-100 p-2 shadow-lg rounded-md">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
