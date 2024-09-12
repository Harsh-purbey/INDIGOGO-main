import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Fotter = () => {
  return (
    <>
      <div className="bg-[#1F0733]  lg:px-[60px] lg:pt-[10px] lg:pb-[43px]">
        <div className="border-[#410E36] border-t pt-[50px] flex justify-between items-center">
          <div className="w-[25%]  h-[300px]  flex flex-col justify-evenly p-2">
            <p className="text-xl w-[95%]">
              Supporting entrepreneurs, creators and creative communities since
              2008
            </p>
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
          </div>

          <div className="w-[50%] h-[300px]  flex gap-2 justify-center items-center">
            <div className="h-[80%] w-[23%]  p-4 space-y-8">
              <div>
                <p className="uppercase"> discover</p>
              </div>
              <div className="space-y-1">
                <p>Start A Campaign</p>
                <p>Experts Directory</p>
                <p>Enterprise</p>
                <p>China</p>
              </div>
            </div>

            <div className="h-[80%] w-[23%]  p-4 space-y-8">
              <div>
                <p className="uppercase"> discover</p>
              </div>
              <div className="space-y-1">
                <p>Start A Campaign</p>
                <p>Experts Directory</p>
                <p>Enterprise</p>
                <p>China</p>
              </div>
            </div>

            <div className="h-[80%] w-[23%] p-4 space-y-8">
              <div>
                <p className="uppercase"> discover</p>
              </div>
              <div className="space-y-1">
                <p>Start A Campaign</p>
                <p>Experts Directory</p>
                <p>Enterprise</p>
                <p>China</p>
              </div>
            </div>

            <div className="h-[80%] w-[23%] p-4 space-y-8">
              <div>
                <p className="uppercase"> discover</p>
              </div>
              <div className="space-y-1">
                <p>Start A Campaign</p>
                <p>Experts Directory</p>
                <p>Enterprise</p>
                <p>China</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1F0733] h-[280px] pb-0 border-[#410E36]   flex items-center justify-center">
        <h1 className=" uppercase text-[#FFA6D6] text-center text-[200px] font-extrabold  ">
          indigogo
        </h1>
      </div>
    </>
  );
};

export default Fotter;
