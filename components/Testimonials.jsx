import React from "react";
import Image from "next/image";

function Testimonials() {
  return (
    <div className="w-full h-screen relative my-6 flex flex-col items-center ">
      <Image
        className=""
        src={"/bg-flower.jpg"}
        layout="fill"
        objectFit="cover"
      />
      <div className="mt-10 absolute ">
        <h2 className="p-5 text-3xl">Testimonials</h2>
        <div className="max-w-3xl grid grid-cols-2 gap-4 items-center">
          <p className="border p-3 rounded-lg m-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quidem non harum consectetur sed voluptates dolore pariatur eaque
            repudiandae. Tenetur, qui quos aperiam aut ratione vel excepturi rem
            nulla culpa— MAI W.
          </p>
          <p className="border p-3 rounded-lg m-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quidem non harum consectetur sed voluptates dolore pariatur eaque
            repudiandae. Tenetur, qui quos aperiam aut ratione vel excepturi rem
            nulla culpa — STEPHANIE M.
          </p>
          <p className="border p-3 rounded-lg m-2">
            ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quidem non harum consectetur sed voluptates dolore pariatur eaque
            repudiandae. Tenetur, qui quos aperiam aut ratione vel excepturi rem
            nulla culpa* — DARLINE G.
          </p>
          <p className="border p-3 rounded-lg m-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quidem non harum consectetur sed voluptates dolore pariatur eaque
            repudiandae. Tenetur, qui quos aperiam aut ratione vel excepturi rem
            nulla culpa — JEAN S.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
