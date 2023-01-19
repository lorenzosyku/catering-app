import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Banner() {
  const router = useRouter();
  return (
    <div className="w-full h-screen relative">
      <Image
        className=""
        src={"/autumn-setup.jpg"}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <div className=" bg-indigo-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
          <h1 className="text-6xl font-bold">
            Welcome to <span className="text-green-400">Sandro's Catering</span>
          </h1>

          <p className="mt-3 text-2xl">Get started by specifying your event </p>
          <button
            onClick={() => router.push("/Register")}
            className="text-cyan-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 cursor-pointer hover:shadow-xl active:scale-90 transition duration-150"
          >
            Book Your Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
