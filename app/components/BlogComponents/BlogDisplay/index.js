import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const BlogDisplay = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className=" w-full h-fit bg-[#242424] ">
      <div className=" h-full px-2 md:px-16 py-8  grid md:grid-cols-3  gap-4 space-y-10 md:space-y-0">
        <div className="md:col-span-2  space-y-8 h-fit">
          {arr.map((value, index) => (
            <div key={index} className="p-1 md:py-4 md:px-28 space-y-2">
              <img
                src="./images/display1.jpg"
                className="w-full h-56 md:h-[400px]"
              />
              <p className="text-white uppercase text-sm md:text-xl">
                August 26, 2024 · IGG, Products
              </p>
              <p className="text-white hover:underline text-2xl md:text-4xl cursor-pointer font-semibold">
                Shipping. Guaranteed.
              </p>
              <p className="text-white text-sm md:text-xl">
                Two words you never thought you’d see in crowdfunding have
                arrived. Say “Oh Hello!” to Indiegogo’s Shipping Guarantee
                program – making sure your order ships on time or you get a full
                refund. (Available only on select campaigns.)
              </p>
            </div>
          ))}
        </div>
        <div className=" p-4  space-y-10 h-fit">
          <div className="flex flex-col gap-2">
            <p className="uppercase font-semibold">Categories</p>
            <p className="cursor-pointer hover:border-b w-fit border-white font-thin transition-all duration-500">
              Behind The Scenes
            </p>
            <p className="cursor-pointer hover:border-b w-fit border-white font-thin  transition-all duration-500">
              IGG
            </p>
            <p className="cursor-pointer hover:border-b w-fit border-white font-thin transition-all duration-500">
              In The News
            </p>
            <p className="cursor-pointer hover:border-b w-fit border-white font-thin transition-all duration-500">
              Lists
            </p>
            <p className="cursor-pointer hover:border-b w-fit border-white font-thin transition-all duration-500">
              Product Reviews
            </p>
            <p className="cursor-pointer hover:border-b w-fit border-white font-thin transition-all duration-500">
              Products
            </p>
            <p className="cursor-pointer hover:border-b w-fit border-white font-thin transition-all duration-500">
              Success Stories
            </p>
            <p className="cursor-pointer hover:border-b w-fit border-white font-thin transition-all duration-500">
              Tips & Insights
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">TAGS</h3>
            <div className="flex flex-wrap gap-4">
              <button className="p-2 border-white border text-sm  hover:underline">
                A Day In The Life why
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life why
              </button>

              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm  hover:underline">
                A Day In The Life why
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life why
              </button>

              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm  hover:underline">
                A Day In The Life why
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life why
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm  hover:underline">
                A Day In The Life why
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life why
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm  hover:underline">
                A Day In The Life why
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life why
              </button>

              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm  hover:underline">
                A Day In The Life why
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life why
              </button>

              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm  hover:underline">
                A Day In The Life why
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life why
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm  hover:underline">
                A Day In The Life why
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
              <button className="p-2 border-white border text-sm hover:underline">
                A Day In The Life
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDisplay;
