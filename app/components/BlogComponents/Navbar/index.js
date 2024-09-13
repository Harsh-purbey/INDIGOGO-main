import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="W-full bg-[#232323]">
      <div className="w-full bg-[#1A1A1A] p-3 px-5 flex justify-between items-center">
        <h1 className=" text-2xl md:text-4xl text-white uppercase font-extrabold flex items-center">
          indiegogo
          {nav ? (
            <MdOutlineKeyboardArrowUp
              className="md:hidden text-xl"
              onClick={() => setNav(!nav)}
            />
          ) : (
            <MdKeyboardArrowDown
              className="md:hidden text-xl"
              onClick={() => setNav(!nav)}
            />
          )}
        </h1>

        <div
          className={
            nav
              ? 'w-full pt-4 pb-8 md:py-0 flex flex-col gap-3 md:justify-between md:items-center px-4 absolute md:static bg-[#1A1A1A]  md:bg-transparent translate-y-36 left-0 md:translate-y-0 h-[240px] md:h-fit  md:flex-row'
              : 'w-full pt-4 pb-8 md:py-0 flex flex-col gap-3 md:justify-between md:items-center px-4 absolute md:static bg-[#1A1A1A]  md:bg-transparent -translate-y-[800px] left-0 md:translate-y-0 h-[240px] md:h-fit  md:flex-row'
          }
        >
          <div className="flex gap-3 md:gap-4 cursor-pointer flex-col md:flex-row ">
            <p className="hover:border-b border-white">*NEW* Product Reviews</p>
            <p className="hover:border-b border-white">Behind The Scenes</p>
            <p className="hover:border-b border-white">Success Stories</p>
            <p className="hover:border-b border-white">IGG</p>
            <p className="hover:border-b border-white">Pitch</p>
          </div>
          <p className="hover:border-b border-white cursor-pointer ">
            Explore Indiegogo
          </p>
        </div>

        <FaSearch className=" text-sm sm:text-xl text-white" />
      </div>
    </div>
  );
};

export default Navbar;
