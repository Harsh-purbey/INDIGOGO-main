import React from 'react';

const Copyright = () => {
  return (
    // COPYRIGHT START
    <div className=" bg-[#1F0733] lg:px-[60px] px-10 ">
      {/* MAIN BOX */}
      <div className="border-[#410E36] border-t  flex md:justify-between  flex-wrap justify-center py-10 items-center gap-6">
        <div>
          <button className="p-3 md:rounded-xl border-white border-opacity-20 hover:text-white border-2 hover:bg-purple-950 uppercase">
            ₹ Indian Rupee (INR)
          </button>
        </div>

        <div className="flex gap-6 text-sm flex-wrap justify-center">
          {/* <div className="flex gap-6"> */}
          <p className="text-center">Terms of Use</p>
          <p className="text-center">Privacy Policy</p>
          <p className="text-center">Cookie Policy</p>
          {/* </div> */}
          <p className="text-center">Do Not Sell My Personal Information</p>
          <p className="opacity-50 md:opacity-100 text-center">
            © 2024 Indiegogo, Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
