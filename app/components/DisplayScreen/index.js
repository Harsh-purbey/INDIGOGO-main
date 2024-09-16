import React, { Fragment, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoSearch } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Slider from 'react-slick';
import { RxCross2 } from 'react-icons/rx';
import { FaArrowRight } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DisplayScreen = () => {
  const [toggle, setToggle] = useState(false);
  const [image, setImage] = useState('./images/car1.jpg');

  const arr = [
    { id: 0, img: './images/car1.jpg' },
    { id: 1, img: './images/car2.jpg' },
    { id: 2, img: './images/car3.jpg' },
    { id: 3, img: './images/car4.jpg' },
    { id: 4, img: './images/car5.jpg' },
    { id: 5, img: './images/car6.jpg' },
  ];

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
    <Fragment>
      {/* HAMBERGER START */}
      <div
        className={
          toggle
            ? 'transition-all duration-900 w-full top-0 p-2 bg-[#FFFFFF] absolute z-50 sm:hidden translate-y-0'
            : 'transition-all duration-900 w-full top-0 p-2 bg-[#FFFFFF] absolute z-50 sm:hidden -translate-y-[900px]'
        }
      >
        <div className="shadow-2xl bg-[#FFFFFF] w-full py-2 px-4 sm:py-2 sm:px-4 md:py-4 md:px-4 lg:py-4 lg:px-8">
          {/* CONTAINER */}
          <div className="flex justify-between items-center text-black">
            {/* LEFT */}
            <div className="flex sm:gap-2 md:gap-4 lg:gap-6 items-center">
              <h1 className="text-[#E51075] text-xl md:text-xl lg:text-2xl uppercase font-extrabold">
                INDIEGOGO
              </h1>
            </div>

            <div className="flex gap-2 items-center sm:hidden">
              <IoSearch className="text-xl" />
              <RxCross2
                className="text-xl"
                onClick={() => setToggle(!toggle)}
              />
            </div>
          </div>
        </div>

        <div className="text-black py-8 px-6 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center text-2xl font-bold">
              <p>Explore</p>
              <FaArrowRight />
            </div>
            <div className="flex justify-between items-center text-2xl font-bold">
              <p>IndieShop</p>
              <FaArrowRight />
            </div>
            <div className="flex justify-between items-center text-2xl font-bold">
              <p>For Innovators</p>
              <FaArrowRight />
            </div>
          </div>

          <div className="flex flex-col gap-3 text-xl font-thin">
            <p className="hover:underline">How It Works</p>
            <p className="hover:underline">In Demand</p>
            <p className="hover:underline">Education Center</p>
            <p className="hover:underline">Help & Support</p>
            <p className="hover:underline">Blog</p>
          </div>

          <div className="w-full flex flex-col gap-2">
            <button className="w-full rounded-xl p-4 border-2 border-black font-bold">
              LOGIN / SIGN UP
            </button>
            <button className="w-full rounded-xl p-4 bg-[#150423] text-white font-bold ">
              START A CAMPAIGN
            </button>
          </div>
        </div>
      </div>
      {/* HAMBERGER END */}
      <div
        className=" h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between"
        style={{ backgroundImage: `url(${image})` }}
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
            <GiHamburgerMenu onClick={() => setToggle(!toggle)} />
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
                        src={value.img}
                        className="w-full h-full rounded-lg"
                        onClick={() => setImage(value.img)}
                      />
                    </div>
                  </li>
                ))}
              </Slider>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DisplayScreen;
