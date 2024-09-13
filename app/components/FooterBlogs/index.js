import React from 'react';
import { useNavigate } from 'react-router-dom';

const FooterBlogs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#1F0733]  lg:px-[93px] lg:pt-[100px] lg:pb-[43px] ">
        <div className="bg-[#2A133D] w-full h-screen rounded-t-xl pt-[100px]">
          <h3 className="text-6xl font-semibold text-white text-center">
            Latest from the Blog
          </h3>
          <div className="w-full flex h-full gap-8 justify-center pt-10">
            <div
              className="rounded-lg p-8 w-[44%] h-[80%] bg-contain bg-center bg-no-repeat flex items-end"
              style={{ backgroundImage: 'url(./images/display1.jpg)' }}
            >
              <div>
                <h4 className="text-normal uppercase text-[#97F036] mb-4">
                  see more
                </h4>
                <p className="text-white text-xl w-[70%] font-semibold">
                  Welcome to a Bigger and Bolder Indiegogo: Watch the
                  announcement from Indiegogo’s CEO, Becky Center.
                </p>
              </div>
            </div>
            <div className="w-[44%] h-[80%] p-10 space-y-2">
              <div className="w-full h-[30%] border-b border-gray-400 flex justify-between items-center">
                <div className="w-[65%] h-[90%] space-y-4">
                  <p className="text-white font-semibold text-xl">
                    Unboxing: HOVERAir X1 PRO & PROMAX: Which is right for you?
                  </p>
                  <h4 className="text-normal uppercase text-[#97F036] mb-4">
                    read the review
                  </h4>
                </div>
                <div className="h-[80%] w-[25%] bg-gray-800 rounded-lg">
                  <img
                    src="./images/display1.jpg"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>

              <div className="w-full h-[30%] border-b border-gray-400 flex justify-between items-center">
                <div className="w-[65%] h-[90%] space-y-4">
                  <p className="text-white font-semibold text-xl">
                    Unboxing: HOVERAir X1 PRO & PROMAX: Which is right for you?
                  </p>
                  <h4 className="text-normal uppercase text-[#97F036] mb-4">
                    read the review
                  </h4>
                </div>
                <div className="h-[80%] w-[25%] bg-gray-800 rounded-lg">
                  <img
                    src="./images/display1.jpg"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>

              <div className="w-full h-[30%] flex justify-between items-center">
                <div className="w-[65%] h-[90%] space-y-4">
                  <p className="text-white font-semibold text-xl">
                    Unboxing: HOVERAir X1 PRO & PROMAX: Which is right for you?
                  </p>
                  <h4 className="text-normal uppercase text-[#97F036] mb-4">
                    read the review
                  </h4>
                </div>
                <div className="h-[80%] w-[25%] bg-gray-800 rounded-lg">
                  <img
                    src="./images/display1.jpg"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-[#2A133D] p-10 rounded-b-lg ">
          <button
            className="p-3 rounded-xl border-disbtn border-2 hover:text-black hover:bg-disbtn"
            onClick={() => navigate('/blog')}
          >
            EXPLORE THE BLOG
          </button>
        </div>
      </div>
      {/* <hr className="w-[88%] h-[2px] bg-purple-500 m-auto"></hr> */}
    </>
  );
};

export default FooterBlogs;
