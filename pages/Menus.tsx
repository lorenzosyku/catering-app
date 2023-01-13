import Image from "next/image";
import React from "react";

function Menus() {
  return (
    <div className="w-full h-screen relative">
      <Image className="" src={"/menus.jpeg"} layout="fill" objectFit="cover" />
      <div className="absolute flex flex-col left-1/4 justify-center items-center text-center">
        <h2 className="p-5 text-3xl">Party Menus</h2>
        <div className="max-w-3xl grid grid-cols-2 gap-5 items-center">
          <div className="flex flex-col justify-center items-center space-y-3 bg-slate-200 shadow-md rounded-md p-5">
            <h1 className="text-2xl italic">Menu 1 (45$pp)</h1>
            <h2 className="font-semibold">Hot & Cold appetazires </h2>
            <p className="">
              eggplant rolattini, fresh mozzarella, fried calamari
            </p>
            <h2 className="font-semibold">Main course</h2>
            <p className="">Chicken Marsala, Sole Franchese, Veal Scaloppini</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-3 bg-slate-200 shadow-md rounded-md p-5">
            <h1 className="text-2xl italic">Menu 2(65$pp)</h1>
            <h2 className="font-semibold">Hot & Cold appetazires </h2>
            <p className="">
              eggplant rolattini, fresh mozzarella, fried calamari, chopped
              salad, baked clams
            </p>
            <h2 className="font-semibold">Main course</h2>
            <p className=""> Sole Franchese, Veal Scaloppini, NY Strip</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-3 bg-slate-200 shadow-md rounded-md p-5">
            <h1 className="text-2xl italic">Menu 3(85$pp)</h1>
            <h2 className="font-semibold">Hot & Cold appetazires </h2>
            <p className="">
              eggplant rolattini, fresh mozzarella, fried calamari, cesar salad,
              baked clams, jumbo shrimps, bacon
            </p>
            <h2 className="font-semibold">Main course</h2>
            <p className="">Branzino, NY Strip, Ribeye, Chicken Scarpariello</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-3 bg-slate-200 shadow-md rounded-md p-5">
            <h1 className="text-2xl italic">Menu 4(105$pp)</h1>
            <h2 className="font-semibold">Hot & Cold appetazires </h2>
            <p className="">
              fresh mozzarella, fried calamari, cesar salad, baked clams, jumbo
              shrimps, bacon, seafood salad
            </p>
            <h2 className="font-semibold">Main course</h2>
            <p className="">Branzino, Porter House for 2, Rack of Lamb, Ribeye</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menus;
