/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import img1 from "../assets/img10.jpg";
const features = [
  {
    name: "Analytics",
    href: "#",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    href: "#",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    href: "#",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    href: "#",
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    href: "#",
    description:
      "Build strategic funnels that will drive your customers to convert",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative bg-orange-700">
      <Popover className="relative bg-orange-400 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
            <p className="text-bolder text-gray-700 text-xl font-inter">Prime foods</p>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-orange-400 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-50",
                        "group bg-orange-400 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-50"
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-50"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-orange-400 px-5 py-6 sm:gap-8 sm:p-8">
                            {features.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-gray-900"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-50">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="#go"
                className="text-base font-medium text-gray-50 hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-50 hover:text-gray-900"
              >
                Docs
              </a>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-50",
                        "group bg-orange-400 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-50"
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-50"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-orange-400 px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-gray-900"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-50">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-sm tracking-wide font-medium text-gray-50 uppercase">
                                Recent Posts
                              </h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((item) => (
                                  <li
                                    key={item.id}
                                    className="text-base truncate"
                                  >
                                    <a
                                      href={item.href}
                                      className="font-medium text-gray-900 hover:text-gray-700"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a
                                href="#"
                                className="font-medium text-gray-600 hover:text-gray-50"
                              >
                                {" "}
                                View all posts{" "}
                                <span aria-hidden="true">&rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
           
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-[#FB923C] divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>Prime foods</div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-orange-400 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {features.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-gray-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Docs
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-orange-400 bg-gray-900 hover:bg-gray-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-50">
                    Existing customer?
                    <a href="#" className="text-gray-600 hover:text-gray-50">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Data to enrich your</span>{" "}
              <span className="block text-orange-200 xl:inline">
                online business
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-100 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-400 bg-gray-900 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-orange-400 hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={img1}
            alt=""
          />
        </div>
      </main>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FB923C"
            fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
