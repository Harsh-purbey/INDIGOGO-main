import React from 'react';
import { useNavigate } from 'react-router-dom';
//
const FooterBlogs = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* START */}
      <div className=" bg-[#1F0733] lg:px-[93px] lg:pt-[100px] lg:pb-[43px] py-2 ">
        {/* MAIN COMPONENT */}
        <div className="bg-[#2A133D] w-[95%]  rounded-t-xl mx-auto ">
          {/* HEADING */}
          <h3 className=" text-5xl font-medium px-4 md:text-8xl  text-white text-center py-4 md:py-8">
            Latest from the Blog
          </h3>
          {/* HEADING END */}

          {/* AFTER HEADING */}
          <div className="w-full flex h-full gap-8 md:justify-center md:flex-row flex-col pt-10">
            {/* LEFT */}

            <div
              className="rounded-lg p-4 w-[95%] mx-auto md:mx-0 md:w-[44%] h-52 md:h-96  bg-cover bg-center bg-no-repeat flex items-end"
              style={{ backgroundImage: 'url(./images/display1.jpg)' }}
            >
              <div>
                <h4 className="text-normal uppercase text-[#97F036] mb-4">
                  see more
                </h4>
                <p className="text-white md:text-xl w-[90%] md:font-semibold text-sm font-thin">
                  Welcome to a Bigger and Bolder Indiegogo: Watch the
                  announcement from Indiegogo’s CEO, Becky Center.
                </p>
              </div>
            </div>
            {/* LEFT END */}

            {/* RIGHT */}
            <div className=" w-full md:w-[44%] h-[80%]  space-y-2 py-0 md:py-4">
              <div className="w-[90%] mx-auto h-[30%] border-b border-gray-400 flex justify-between items-center pb-4">
                <div className="w-[70%] h-[90%] space-y-2">
                  <p className="text-white md:font-semibold md:text-xl text-sm font-thin">
                    Unboxing: HOVERAir X1 PRO & PROMAX: Which is right for you?
                  </p>
                  <h4 className="text-normal uppercase text-[#97F036] mb-4 md:text-xl text-sm">
                    read the review
                  </h4>
                </div>

                <div className="h-[100%] w-[35%] md:w-[25%] bg-gray-800 rounded-lg">
                  <img
                    src="./images/display1.jpg"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>

              <div className="w-[90%] mx-auto h-[30%] border-b border-gray-400 flex justify-between items-center pb-4">
                <div className="w-[70%] h-[90%] space-y-2">
                  <p className="text-white md:font-semibold md:text-xl text-sm font-thin">
                    Unboxing: HOVERAir X1 PRO & PROMAX: Which is right for you?
                  </p>
                  <h4 className="text-normal uppercase text-[#97F036] mb-4 md:text-xl text-sm">
                    read the review
                  </h4>
                </div>

                <div className="h-[100%] w-[35%] md:w-[25%] bg-gray-800 rounded-lg">
                  <img
                    src="./images/display1.jpg"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>

              <div className="w-[90%] mx-auto h-[30%]  border-gray-400 flex justify-between items-center pb-4">
                <div className="w-[70%] h-[90%] space-y-2">
                  <p className="text-white md:font-semibold md:text-xl text-sm font-thin">
                    Unboxing: HOVERAir X1 PRO & PROMAX: Which is right for you?
                  </p>
                  <h4 className="text-normal uppercase text-[#97F036] mb-4 md:text-xl text-sm">
                    read the review
                  </h4>
                </div>

                <div className="h-[100%] w-[35%] md:w-[25%] bg-gray-800 rounded-lg">
                  <img
                    src="./images/display1.jpg"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT END */}
        </div>
        {/* AFTER HEADING END */}

        {/* BUTTON */}
        <div className="text-center bg-[#2A133D] p-10 rounded-b-lg w-[95%] mx-auto ">
          <button
            className="p-3 rounded-xl border-disbtn border-2 hover:text-black hover:bg-disbtn"
            onClick={() => navigate('/blog')}
          >
            EXPLORE THE BLOG
          </button>
        </div>
        {/* BUTTON END */}

        {/* MAIN COMPONENT END */}
      </div>
      {/* END */}

      {/* <hr className="w-[88%] h-[2px] bg-purple-500 m-auto"></hr> */}
    </>
  );
};

export default FooterBlogs;
