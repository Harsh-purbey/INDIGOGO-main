import React from 'react';

const Copyright = () => {
  return (
    <div className="bg-[#1F0733]  lg:px-[60px] ">
      <div className="border-[#410E36] border-t flex justify-between py-10">
        <div>
          <button className="p-3 rounded-xl border-[#410E36] border-2 hover:text-black hover:bg-purple-950 uppercase">
            ₹ Indian Rupee (INR)
          </button>
        </div>
        <div className="flex gap-6 text-sm">
          <div className="flex gap-6">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
          <p>Do Not Sell My Personal Information</p>
          <p>© 2024 Indiegogo, Inc. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
