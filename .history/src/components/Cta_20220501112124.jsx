import img1 from "../assets/img9.jpg";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
export default function Example() {
  return (
    <div className="bg-white relative z-10" id="contact-us">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-6 pb-12 px-6 sm:pt-10 sm:px-16 lg:py-16 lg:pr-0 xl:py-16 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
                <Fade left>
                  <span className="block">Ready to dive in?</span>
                </Fade>
                <Fade right>
                  {" "}
                  <span className="block text-gray-300">Contact us today!</span>
                </Fade>
              </h2>
              <Slide left>
                {" "}
                <p className="mt-4 text-lg leading-6 text-white">
                  Delivery is speedy and arrives at your doorstep in no time!
                </p>
              </Slide>
              <Slide left>
                <div className="mt-4 rounded-md shadow sm:mt-8 sm:ml-3 cursor-pointer">
                  <a
                    href={`https://wa.me/${'+2348108932677'}/?text=${'Hello, i just got off your website and i would like to...'}`}
                    rel="noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer md:py-4 md:text-lg md:px-10"
                  >
                    Contact us
                  </a>
                </div>
              </Slide>
            </div>
          </div>{" "}
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <Slide right>
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={img1}
                alt="App screenshot"
              />
            </Slide>
          </div>
        </div>
      </div>
   
    </div>
  );
}
