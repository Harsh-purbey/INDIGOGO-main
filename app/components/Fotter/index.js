import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
//
const Fotter = () => {
  return (
    <>
      {/* STARTING */}
      <div className=" bg-[#1F0733] lg:px-[60px] lg:pt-[10px] lg:pb-[43px] pt-4 px-2">
        {/* MAIN CONTAINER */}
        <div className="border-[#410E36] border-t-2 pt-[50px] flex justify-between flex-col md:flex-row md:items-center gap-8">
          {/* LEFT SECTION START */}
          <div className="gap-20 flex flex-col  p-4 w-[100%] sm:w-[30%] md:w-[25%] ">
            <p className="text-xl ">
              Supporting entrepreneurs, creators and creative communities since
              2008
            </p>
            {/* SOCIAL MEDIA ICONS */}
            <div className="space-y-2">
              <p className="text-xl">Follow us!</p>
              <div className="flex gap-2 ">
                <FaFacebook className="text-2xl  text-[#FFA6D6]" />
                <FaSquareXTwitter className="text-2xl  text-[#FFA6D6]" />
                <FaYoutube className="text-2xl  text-[#FFA6D6]" />
                <FaInstagram className="text-2xl  text-[#FFA6D6]" />
                <FaLinkedin className="text-2xl  text-[#FFA6D6]" />
              </div>
            </div>
            {/* SOCIAL MEDIA ICONS END */}
          </div>
          {/* LEFT SECTION END */}

          {/* RIGHT SECTION START */}
          <div className="   flex gap-2 items-start md:justify-center md:flex-row flex-col md:items-center">
            <div className="  p-4 space-y-8">
              <div>
                <p className="uppercase"> discover</p>
              </div>
              <div className="space-y-2">
                <p>Start A Campaign</p>
                <p>Experts Directory</p>
                <p>Enterprise</p>
                <p>China</p>
              </div>
            </div>

            <div className=" p-4 space-y-8">
              <div>
                <p className="uppercase"> discover</p>
              </div>
              <div className="space-y-2">
                <p>Start A Campaign</p>
                <p>Experts Directory</p>
                <p>Enterprise</p>
                <p>China</p>
              </div>
            </div>

            <div className=" p-4 space-y-8">
              <div>
                <p className="uppercase"> discover</p>
              </div>
              <div className="space-y-2">
                <p>Start A Campaign</p>
                <p>Experts Directory</p>
                <p>Enterprise</p>
                <p>China</p>
              </div>
            </div>

            <div className=" p-4 space-y-8">
              <div>
                <p className="uppercase"> discover</p>
              </div>
              <div className="space-y-2">
                <p>Start A Campaign</p>
                <p>Experts Directory</p>
                <p>Enterprise</p>
                <p>China</p>
              </div>
            </div>
          </div>
          {/* RIGHT END */}
        </div>
        {/* MAIN CONTAINER END */}
        <div className="text-[#FFA6D6] uppercase text-5xl md:text-[180px] text-center font-black p-4">
          INDIEGOGO
        </div>
      </div>
      {/* ENDING */}
    </>
  );
};

export default Fotter;
