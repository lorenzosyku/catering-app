import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="w-full h-screen relative">
      <Image
        className=""
        src={"/smoked-salmon-unsplash.jpg"}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Catering
          </a>
        </h1>

        <p className="mt-3 text-2xl">Get started by specifying your event </p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 cursor-pointer hover:shadow-xl active:scale-90 transition duration-150">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Banner;
