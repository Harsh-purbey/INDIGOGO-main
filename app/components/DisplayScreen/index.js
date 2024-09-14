import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoSearch } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DisplayScreen = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className=" h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: 'url(./images/display1.jpg)' }}
    >
      <div className="flex justify-between py-[20px] md:px-[50px]  px-[10px] border-white border-opacity-50 items-center border-b-2 md:border-b-0 cursor-pointer ">
        <div className="flex items-center space-x-5 ">
          <h1 className="text-4xl font-bold">INDIGOGO</h1>
          <p className="hidden md:block">Explore</p>
          <p className="hidden md:block">indieShop</p>
        </div>
        <div className="md:flex hidden">
          <CiSearch className="rounded-l-lg bg-gray-400 bg-opacity-25 text-white w-6 h-6 pr-2 py-4 pl-4 box-content font-bold" />
          <input
            placeholder="Search crowdfunding... "
            className="rounded-r-lg pr-3 bg-gray-400 bg-opacity-25 w-[400px] outline-none text-sm placeholder-slate-300"
          />
        </div>
        <div className="space-x-4 md:block hidden">
          <button>Login / Sign up</button>
          <button className="md:p-3 p-1 rounded-lg border-disbtn border-2 hover:text-black hover:bg-disbtn">
            START A CAMPAIGN
          </button>
        </div>

        <div className="md:hidden flex gap-2 text-2xl">
          <IoSearch />
          <GiHamburgerMenu />
        </div>
      </div>

      <div className="md:px-[50px] px-[10px] md:py-[50px] py-[10px] space-y-8 group">
        <h1 className="mb-4 opacity-0 animate-[wiggle_2s_linear_infinite] md:text-6xl text-xl font-bold text-white w-[80%]  duration-100 translate-y-10 group-hover:">
          Litheli FrozenPack: The First Backpack Car Fridge
        </h1>
        <button className="p-3 rounded-lg border-disbtn border-2 text-black bg-disbtn text-sm font-josefin ">
          SEE CAMPAIGN
        </button>
        <div>
          <ul className="flex gap-8 overflow-y-auto no-scrollbar">
            <Slider
              {...settings}
              className="flex gap-8 overflow-y-auto no-scrollbar"
            >
              {arr.map((value, index) => (
                <li key={index} className="mx-auto">
                  <div className="md:w-[300px] md:h-[150px] w-[100px] h-[100px] bg-red-500 border-disbtn border-2 rounded-lg">
                    <img
                      src="./images/display1.jpg"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisplayScreen;
