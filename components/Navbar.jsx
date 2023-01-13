import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed bg-white w-full z-20 shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-center items-center">
            <div className="flex-shrink-0">
              <h2 className="font-poppins text-xl text-shade-lightblue italic font-semibold">
                <span className="text-amber-400">Lovely & Italian</span>
              </h2>
              <h4 className="italic font-poppins font-semibold text-xs">
                Beta Version
              </h4>
            </div>
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                <div className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  <li className="cursor-pointer">Menus</li>
                </div>
                <div className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  <li className="cursor-pointer">Services</li>
                </div>
                <div className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  <li className="cursor-pointer">About Us</li>
                </div>

                <div className=" hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  <li className="cursor-pointer">Our Partners</li>
                </div>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex">
            <button
              onClick={() => router.push("/login")}
              className="cursor-pointer font-semibold bg-shade-lightblue px-3 mx-5 py-1 bg-cyan-600 text-gray-100 hover:bg-cyan-700 rounded-md"
            >
              Login
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-shade-lightblue inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-shade-darkgrayblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <MenuIcon className="h-5 w-5 text-gray-800" />
              ) : (
                <XIcon className="h-5 w-5 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(refer) => (
          <div className="md:hidden" id="mobile-menu">
            <ul refer={refer} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div>
                <li className="hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Menus
                </li>
              </div>
              <div>
                <li className="cursor-pointer hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </li>
              </div>
              <div>
                <li className="cursor-pointer hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </li>
              </div>

              <div>
                <li className="cursor-pointer hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Our Partners
                </li>
              </div>

              <div className="">
                <button
                  onClick={() => router.push("/login")}
                  className="cursor-pointer font-semibold bg-shade-lightblue px-3 mx-3 py-1 my-4 text-white bg-blue-400 hover:bg-blue-400 rounded-sm"
                >
                  Login
                </button>
              </div>
            </ul>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Header;
