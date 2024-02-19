import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function MenuItems() {
  let [categories] = useState({
    Main_dishes: [
      {
        title: `Oatmeal with honey and nuts`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Scrambled eggs with toast`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Smoothie`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Fresh fruit salad`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Yogurt with fruit and granola`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Waffle`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Threatens to promote `,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Chicken Caesar Salad`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `From looking bare`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Turkey Club Sandwich`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
    ],
    Salads: [
      {
        title: `Yogurt with fruit and granola`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Waffle`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Threatens to promote `,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Chicken Caesar Salad`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `From looking bare`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Turkey Club Sandwich`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Oatmeal with honey and nuts`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Scrambled eggs with toast`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Smoothie`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Fresh fruit salad`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
    ],
    Deserts: [
      {
        title: `Oatmeal with honey and nuts`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Scrambled eggs with toast`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Yogurt with fruit and granola`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Waffle`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Threatens to promote `,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Chicken Caesar Salad`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `From looking bare`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Turkey Club Sandwich`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Smoothie`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Fresh fruit salad`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
    ],
    Drinks: [
      {
        title: `Threatens to promote `,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Chicken Caesar Salad`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Oatmeal with honey and nuts`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Scrambled eggs with toast`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Yogurt with fruit and granola`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Waffle`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `From looking bare`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Turkey Club Sandwich`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Smoothie`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Fresh fruit salad`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
    ],
    Alcohol: [
      {
        title: `Yogurt with fruit and granola`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Waffle`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `From looking bare`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Threatens to promote `,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Chicken Caesar Salad`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Oatmeal with honey and nuts`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Scrambled eggs with toast`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Turkey Club Sandwich`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Smoothie`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
      {
        title: `Fresh fruit salad`,
        price: `29$`,
        description: `The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.`,
      },
    ],
  });

  return (
    <div className="container xl:px-0 lg:px-4 px-2 sm:px-5 mb-[100px]">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded md:rounded-xl bg-blue-900/20 p-2">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-md md:rounded-lg py-2.5 px-1 text-sm leading-5 sm:text-2xl font-medium sm:leading-8 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="mt-[50px] gap-[30px] flex flex-row flex-wrap justify-between">
                {posts.map((post: any, i: any) => (
                  <div
                    key={i}
                    className="lg:w-[470px] xl:w-[540px] rounded-md hover:bg-gray-100"
                  >
                    <div className="flex flex-row justify-between">
                      <h3 className="text-lg leading-7 sm:text-2xl font-medium sm:leading-8 text-[#1C1715]">
                        {post.title}
                      </h3>
                      <p className="text-lg leading-7 sm:text-2xl font-medium sm:leading-8 text-[#1C1715]">
                        {post.price}
                      </p>
                    </div>
                    <p className="mt-[14px] text-base leading-6 text-[#1C1715]">
                      {post.description}
                    </p>
                    {/* <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    /> */}
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
export default MenuItems;
