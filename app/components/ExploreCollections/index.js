import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { CiStar } from 'react-icons/ci';
import { GiWatch } from 'react-icons/gi';
import { PiGameControllerLight, PiBicycleLight } from 'react-icons/pi';
import { CiBookmark } from 'react-icons/ci';

const ExploreCollections = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className=" w-full bg-expbg lg:px-[93px] lg:pt-[100px] lg:pb-[43px] py-10 px-1">
      <div className="space-y-12 ">
        <h1 className="text-center text-black md:text-6xl text-4xl md:font-bold font-medium">
          Explore our top collections
        </h1>
        <div className="text-black flex md:justify-between md:font-normal font-thin text-sm md:text-xl uppercase cursor-pointer overflow-scroll space-x-10 no-scrollbar px-4">
          <div className=" border-black hover:underline-offset-4 hover:underline ">
            <p className=" flex justify-center">
              <CiSearch />
            </p>
            <p className="text-center"> clever finds</p>
          </div>
          <div className="hover:underline-offset-4 hover:underline  border-black ">
            <p className=" flex justify-center">
              <CiStar />
            </p>

            <p className="text-center">team favorites</p>
          </div>
          <div className="hover:underline-offset-4 hover:underline  border-black ">
            <p className=" flex justify-center">
              <GiWatch />
            </p>

            <p className="text-center">wearable innovations</p>
          </div>
          <div className="hover:underline-offset-4 hover:underline  border-black ">
            <p className=" flex justify-center">
              <PiGameControllerLight />
            </p>

            <p className="text-center">fun & games</p>
          </div>
          <div className="hover:underline-offset-4 hover:underline  border-black ">
            <p className=" flex justify-center">
              <PiBicycleLight />
            </p>

            <p className="text-center">health & wellness</p>
          </div>
        </div>

        <hr className="border-black border-b-0 text-black" />
        <div className=" flex md:grid grid-cols-4 md:gap-3 gap-6 overflow-x-scroll md:overflow-hidden  no-scrollbar p-4 md:p-0">
          {arr.map((value, index) => (
            <div
              className={`${
                0 === index
                  ? 'col-span-2 bg-red-400 md:h-[350px]  rounded-lg bg-cover bg-center group p-3 hover:contrast-50  transition-all duration-100'
                  : 'bg-red-400 md:h-[350px]  rounded-lg bg-cover bg-center group p-3 hover:contrast-50 transition-all duration-100'
              }`}
              key={index}
              style={{ backgroundImage: 'url(./images/display1.jpg)' }}
            >
              <div className="flex justify-between flex-col h-full w-full">
                <div className="flex justify-between">
                  <button className=" opacity-0 group-hover:opacity-100   uppercase bg-white text-black p-2 text-sm rounded-sm">
                    gopo pack
                  </button>
                  <button className=" opacity-0 group-hover:opacity-100   uppercase bg-white text-black p-3 text-sm rounded-sm font-bold">
                    <CiBookmark />
                  </button>
                </div>

                <div className="translate-y-20 group-hover:translate-y-7">
                  {/* <p className="uppercase font-thin">Starting at</p> */}
                  <h3 className="text-xl">LIVALL PikaBoost 2</h3>
                  <div className="space-x-3">
                    {' '}
                    <span className="text-xl font-bold">₹32,583</span>{' '}
                    <span className="text-sm font-thin line-through text-white ">
                      ₹47,699 INR
                    </span>{' '}
                    <span className="text-sm font-thin line-through text-disbtn ">
                      (31% OFF)
                    </span>{' '}
                  </div>
                  <div className="pt-2 text-sm space-x-3">
                    <span className="pr-4 border-r-[2px] border-gray-200">
                      ₹47,023,178 raised
                    </span>
                    <span>11199% funded</span>
                  </div>
                </div>

                <button className="duration-200 translate-y-10 w-full opacity-0 group-hover:opacity-100  group-hover:translate-y-0  uppercase bg-white text-black p-3 text-xl rounded-sm ">
                  VIEW CAMPAIGN
                </button>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
        <div className="text-center text-black">
          <button className="md:px-8 md:py-4 px-4 py-2 border-gray-300 border-2 rounded-lg hover:bg-gray-200">
            EXPLORE ALL CAMPAIGNS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCollections;
