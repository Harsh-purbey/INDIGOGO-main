import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const BlogFotter = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="flex justify-evenly p-6 flex-col md:flex-row gap-10 md:gap-0">
        <div className="space-y-2">
          <h3 className="uppercase">Blog</h3>
          <div>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="uppercase">Blog</h3>
          <div>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="uppercase">Blog</h3>
          <div>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="uppercase">Blog</h3>
          <div>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
            <p className="hover:underline cursor-pointer">
              The Indiegogo Review
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex gap-8 hidden pl-52 p-6">
        <FaFacebook className="text-2xl  text-white" />
        <FaSquareXTwitter className="text-2xl  text-white" />
        <FaYoutube className="text-2xl  text-white" />
        <FaInstagram className="text-2xl  text-white" />
        <FaLinkedin className="text-2xl  text-white" />
      </div>
      <hr className="md:w-[78%] w-[82%] bg-white h-[.5px] mt-2 m-auto opacity-50"></hr>
    </div>
  );
};

export default BlogFotter;
