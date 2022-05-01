import { Popover } from "@headlessui/react";
import img1 from "../assets/img7.jpg";
import img2 from "../assets/img8.jpg";
import img3 from "../assets/img9.jpg";
import logo from "../assets/prime.jpg";
import Fade from "react-reveal/Fade";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function Example() {
  const images = [img1, img2, img3];
  return (
    <div className="relative bg-gray-800">
      <Popover className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6  md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <img
                src={logo}
                alt=""
                className="h-12 w-auto sm:h-12 object-fill"
              />
            </div>
            <div className="flex gap-8 text-white font-bold cursor-pointer  ">
              <a
                className="hover:bg-gray-400 hover:text-white w-32 py-2 text-white bg-gray-800 rounded-md"
                href="#About"
              >
                About{" "}
              </a>
              <a
                className="hover:bg-gray-400 hover:text-white w-32 py-2 text-white bg-gray-800 rounded-md"
                href="#contact-us"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </Popover>

      {images.map}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="h-48  z-0"
        >
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
