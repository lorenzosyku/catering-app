import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div className="w-full flex items-center justify-center h-screen relative ">
      <Image
        className=""
        src={"/beizh-bg.png"}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute my-6 text-center">
        <p className="max-w-4xl italic text-2xl ">
          Sandro’s approach to cooking could be described as simultaneously
          elegant and rustic, comforting yet refined. He combines locally grown
          ingridients in ways that will surprise and delight, the result being
          delicious and beautiful. Proper planning and communication are
          essential for a successful event. Our strategy when organizing the
          service aspect is to thoroughly communicate all details, have a
          comprehensive plan for service logistics and promptly address any
          issues. During an event clients and guests should have nothing to do
          but relax and enjoy.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
