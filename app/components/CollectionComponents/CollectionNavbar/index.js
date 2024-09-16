import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoSearch } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
const CollectionNavbar = () => {
  return (
    // PARENT
    <div className="shadow-2xl bg-[#FFFFFF] w-full py-2 px-4 sm:py-2 sm:px-4 md:py-4 md:px-4 lg:py-4 lg:px-8">
      {/* CONTAINER */}
      <div className="flex justify-between items-center text-black">
        {/* LEFT */}
        <div className="flex sm:gap-2 md:gap-4 lg:gap-6 items-center">
          <h1 className="text-[#E51075] md:text-xl lg:text-2xl uppercase font-extrabold">
            INDIEGOGO
          </h1>
          <p className="hidden sm:block text-sm">Explore</p>
          <p className="hidden sm:block text-sm">IndieShop</p>
        </div>
        {/* LEFT END */}
        {/* CENTER */}
        <div className=" hidden sm:flex ">
          <CiSearch className="rounded-l-lg bg-gray-400 bg-opacity-25 text-white w-6 h-6 p-2  box-content font-bold" />
          <input
            type="text"
            placeholder="Search ..."
            className="outline-none sm:w-28 md:w-36 lg:w-80 bg-gray-400 bg-opacity-25 rounded-r-lg p-2"
          />
        </div>
        {/* CENTER END */}
        {/* RIGHT  DESKTOP*/}
        <div className="hidden sm:flex sm:gap-2 md:gap-4 lg:gap-6 items-center">
          <button className="font-thin text-sm">Login / Sign up</button>
          <button className="sm:p-1 sm:text-10 md:p-2 md:text-12  lg:p-3 lg:text-14 rounded-md bg-[#150423] text-white ">
            START A CAMPAIGN
          </button>
        </div>
        {/* RIGHT END DESKTOP */}
        {/* RIGHT MOBILE */}
        <div className="flex gap-2 items-center sm:hidden">
          <IoSearch />
          <GiHamburgerMenu />
        </div>
        {/* RIGHT END MOBILE */}
      </div>
      {/* CONTAINER END */}
    </div>
    // PARENT END
  );
};

export default CollectionNavbar;
