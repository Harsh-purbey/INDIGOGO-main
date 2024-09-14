import React from 'react';

const FooterForm = () => {
  return (
    <div className=" bg-[#1F0733] text-white py-[80px] lg:px-[93px] space-y-8 text-3xl font-bold ">
      <h1 className="text-center p-2">
        Get the newest campaigns in your inbox
      </h1>
      <p className="text-center text-[18px] font-normal p-2">
        Exclusive weekly updates with new products, drops, and special offers.
      </p>
      <form className=" flex justify-center md:flex-row flex-col gap-4 p-4">
        <input
          type="text"
          placeholder="Your email address"
          className="outline-none py-[2px] px-[24px] rounded  w-full  md:w-[500px] md:text-[1.125rem] text-[1rem] text-white bg-fotter-input placeholder-white"
        />
        <button
          type="submit"
          className=" w-full md:w-[200px] text-[1rem] md:text-[1.25rem] bg-fotter-button py-[2px] md:py-[16px] px-[24px] rounded"
        >
          SIGN ME UP
        </button>
      </form>

      <p className="text-[14px] text-center font-normal p-2">
        By clicking “Sign me up” I have read and agree to Indiegogo’s{' '}
        <span className="underline">Terms of Use</span> and{' '}
        <span className="underline">Privacy Policy</span> .
      </p>
    </div>
  );
};

export default FooterForm;
