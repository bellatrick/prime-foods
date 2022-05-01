import { Popover } from "@headlessui/react";
import img1 from "../assets/img10.jpg";
import Fade from "react-reveal/Fade";

export default function Example() {
  return (
    <div className="relative bg-orange-600">
      <Popover className="relative bg-orange-400 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <p className="text-[800] text-gray-700 text-[36px] font-logo">
                Prime foods
              </p>
            </div>
            <div className="flex gap-8 text-white font-bold cursor-pointer  ">
              <a
                className="hover:bg-orange-600 hover:text-white w-32 py-2 text-orange-400 bg-gray-800 rounded-md"
                href="#About"
              >
                About{" "}
              </a>
              <a
                className="hover:bg-orange-600 hover:text-white w-32 py-2 text-orange-400 bg-gray-800 rounded-md"
                href="#contact-us"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </Popover>

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <Fade left opposite>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Yuca Flour</span>{" "}
              </h1>
            </Fade>
            <Fade right opposite>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-100 sm:text-xl md:mt-5 md:max-w-3xl">
                Yuca flour is a product of cassava. It is nutrient dense and
                provides all the nourishment your body needs to be fortified.
              </p>
            </Fade>

            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#About"
                  className="w-full z-10 flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md hover:bg-orange-600 hover:text-white text-orange-600 bg-gray-900  cursor-pointer md:py-4 md:text-lg md:px-10"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        <Fade bottom opposite>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={img1}
              alt=""
            />
          </div>
        </Fade>
      </main>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-full">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
