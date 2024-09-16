import React, { Fragment } from 'react';

const CollectionCards = () => {
  const arr = [
    { id: 0, img: './images/car5.jpg' },
    { id: 1, img: './images/car6.jpg' },
    { id: 2, img: './images/car5.jpg' },
    { id: 3, img: './images/car6.jpg' },
    { id: 4, img: './images/car5.jpg' },
    { id: 5, img: './images/car6.jpg' },
    { id: 6, img: './images/car5.jpg' },
    { id: 7, img: './images/car6.jpg' },
    { id: 8, img: './images/car5.jpg' },
    { id: 9, img: './images/car6.jpg' },
  ];
  return (
    <Fragment>
      <div className="w-full  py-5 px-3 sm:py-10 sm:px-28 md:px-48 bg-[#F5F5F5]">
        <div className="grid xl:grid-cols-2 gap-8 ">
          {arr.map((value, index) => {
            return (
              <div key={index} className=" shadow-2xl ">
                <div className="p-2 text-center bg-black rounded-full w-10 h-10 relative left-4 top-4 text-white">
                  {value.id + 1}
                </div>
                <img className="w-full " src={value.img} />
                <div className="p-6 flex flex-col gap-20 ">
                  <div className="space-y-1">
                    <p className="text-[#35CA97] font-bold">FUNDING</p>
                    <div className="w-full bg-gray-300 h-0.5 opacity-40  rounded-lg"></div>
                    <p className="text-xl font-bold text-black hover:underline cursor-pointer">
                      LIVALL PikaBoost 2: Electrify Your Rides with Ease
                    </p>
                    <p className="text-gray-600">
                      The project team has begun turning their prototype into
                      the final product. Their ability to ship the products may
                      be affected by product{' '}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-black">
                      <div className="  sm:text-2xl font-bold">
                        $3,668,800{' '}
                        <span className=" sm:text-xl font-thin opacity-50">
                          USD raised
                        </span>
                      </div>
                      <div>7,737%</div>
                    </div>
                    <div className="w-full bg-[#35CA97] h-2   rounded-lg"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full bg-[#1F0733] p-6"></div>
    </Fragment>
  );
};

export default CollectionCards;
