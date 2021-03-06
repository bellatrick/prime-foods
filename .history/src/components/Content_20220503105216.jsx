import img1 from "../assets/img1.jpg";
import Fade from "react-reveal/Fade";
export default function Example() {
  return (
    <div className="relative bg-gray-800 py-16 sm:py-24 overflow-x-hidden">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-700 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <Fade left>
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-100"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
              </Fade>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <Fade right>
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={img1}
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-100 mix-blend-multiply" />
              </div>
            </Fade>
          </div>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <Fade left>
              <h2 className="text-3xl text-gray-300 text-left font-extrabold tracking-tight sm:text-4xl">
                How to prepare Yuca Flour
              </h2>
            </Fade>
            <Fade right>
              <div className="mt-6 text-gray-100 space-y-2 text-left">
                <p className="text-base flex flex-col leading-6">
                  <span>
                    {" "}
                    1. Pour about 500ml of water into a clean pot and leave to
                    boil on high heat.
                  </span>
                  <br />
                  <span>
                    {" "}
                    2.After t a bowl, pour a cup of Yuca flour in it and add cold water
                    into the bowl. Use a wooden spatula to stir the water and
                    Yuca flour continuously until a smooth consistency is
                    achieved.
                  </span>
                  <br />
                  <span>
                    3. When the water in the pot is boiling, reduce the heat
                    of the stove to medium heat and then, pour the mixed Yuca
                    flour into the boiling water.{" "}
                  </span>
                  <br />
                  <span>
                    {" "}
                    4. Continue stirring for a couple of minutes and then allow to cook
                    on low heat for about a minute.
                  </span>
                  <br />
                  <span>
                    5. Stir again until the texture is consistent and then turn
                    off the heat.
                  </span>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
