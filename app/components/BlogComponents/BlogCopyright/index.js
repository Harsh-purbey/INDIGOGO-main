import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const BlogCopyright = () => {
  return (
    <div className="bg-[#1A1A1A]  ">
      <div className="flex justify-center gap-6 md:hidden  w-full py-5">
        <FaFacebook className="text-xl  text-white" />
        <FaSquareXTwitter className="text-xl  text-white" />
        <FaYoutube className="text-xl  text-white" />
        <FaInstagram className="text-xl  text-white" />
        <FaLinkedin className="text-xl  text-white" />
      </div>
      <div className="py-4 w-[90%] m-auto flex md:justify-end gap-4 flex-wrap justify-center text-sm md:py-8 md:px-20 font-thin ">
        <p className="text-center">Terms of Use</p>
        <p className="text-center">Privacy Policy</p>
        <p className="text-center">Cookie Policy</p>
        <p className="text-center">Do Not Sell My Personal Information</p>
        <p className="text-center">Accessibility</p>
        <p className="text-center">
          © 2024 Indiegogo, Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default BlogCopyright;
