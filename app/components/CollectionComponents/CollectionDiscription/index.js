import React from 'react';
import { ImFacebook2 } from 'react-icons/im';
import { TfiTwitter } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa6';

const CollectionDiscription = () => {
  return (
    // PARENT
    <div className="w-full p-10 bg-[#F5F5F5]">
      {/* CONTAINER */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-[150px] h-1 bg-[#E51075]"></div>
        <h1 className="p-6 text-4xl font-bold text-center text-black">
          10 Cool & Clever Finds
        </h1>
        <p className="text-black text-center text-xl md:px-40  lg:px-60 xl:px-80">
          Discover your next a-ha moment in our roundup of standout projects,
          from live crowdfunding & InDemand campaigns to innovative products
          shipping now.
        </p>
        <div className="flex gap-2 sm:gap-4 justify-center items-center px-2 py-4 sm:p-4 flex-shrink ">
          <button className="bg-[#405D9D] p-1 sm:p-2 flex items-center gap-1 sm:gap-2">
            <ImFacebook2 /> SHARE
          </button>
          <button className="bg-[#2C99D7] p-1 sm:p-2 flex items-center gap-1 sm:gap-2">
            <TfiTwitter /> TWEET
          </button>
          <button className="text-[#E51075] p-1 sm:p-2 border-2 border-[#E51075] flex items-center gap-1 sm:gap-2">
            <FaRegHeart /> FOLLOW
          </button>
        </div>
        <div></div>
      </div>
      {/* CONTAINER END */}
    </div>
    //   PARENT END
  );
};

export default CollectionDiscription;
