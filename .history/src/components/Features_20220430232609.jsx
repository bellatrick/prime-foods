import img1 from "../assets/img2.jpg";
import img2 from "../assets/img3.png";
import img3 from "../assets/img4.jfif";
import Fade from "react-reveal/Fade";
const posts = [
  {
    title: "Yuca flour is as healthy as it can get",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Yuca does not contain trans fatty acids, saturated fats or cholesterol. This helps to greatly reduce the risk of high cholesterol as well as heart disease.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: img2,
    readingTime: "6 min",
  },
  {
    title: " Low in Calories and Gives energy",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Carbohydrates are the body’s main source of energy and at least, a third of your diet should include carb-rich foods like Yuca flour",
    imageUrl: img1,

  },
  {
    title: "Protects the heart",
    description:
      "Yuca is rich in nutrients like fiber, folate, and magnesium – all of which boost heart function and may reduce your risk of heart disease",
    imageUrl: img3,
  },
];

export default function Example() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-orange-600 sm:text-4xl">
            About Yuca Flour
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <Fade cascade opposite left>
                <div
                  key={post.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt="feature img"
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <a href={post.href} className="block mt-2">
                        <p className="text-xl font-semibold text-orange-600">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center"></div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </>
      </div>
    </div>
  );
}
