// import Image from 'next/image'

import React from "react";
import AnimateTextWord from "@/components/common/AnimateTextWord";

const TopIdeas = () => {
  return (
    <div className="flex w-full py-32 bg-white flex-col gap-32">
      <div className="max-w-custom mx-auto w-[90%] flex flex-col gap-12 md:gap-20">
        <div className="w-full grid md:grid-cols-2 gap-8">
          <div className="w-full p-8 lg:p-10 py-12 border min-h-[610px] flex justify-between flex-col gap-8 rounded-[20px]">
            <div className="w-full flex flex-col gap-1">
              <h3 className="text-4xl lg:text-[55px] leading-[1.2] font-selleasy_normal">
                <span className="block text-xs uppercase pb-2">
                  This is how we do it
                </span>
                The next-gen’ <br /> shop builder.
              </h3>
              <p className="text-base text-grey font-normal">
                {/* {data?.description} */}
              </p>
            </div>
          </div>
          <div className="w-full p-8 lg:p-10 py-12 border min-h-[610px] text-white bg-[#40413A] flex justify-between flex-col gap-8 rounded-[20px]">
            <div className="w-full flex flex-col gap-1">
              <img
                src="https://www.nextstore.com/_next/image?url=%2Fhow--plug-play--desk%402x.png&w=2048&q=75"
                alt=""
                className="w-full"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <h3 className="text-4xl lg:text-[55px] leading-[1.2] font-selleasy_normal">
                <span className="block text-xs uppercase pb-2">
                  This is how we do it
                </span>
                Plug your backend, play with your frontend.
              </h3>
              <p className="text-base text-[rgb(207,208,197)] font-normal">
                You can be on Shopify, BigCommerce or any other e-commerce
                platform or CMS. It's a 'plug your backend and play with your
                frontend' solution
              </p>
              <div className="flex">
                <div className="btn btn_4 text-sm">Get Started </div>
              </div>
            </div>
          </div>
          {/* #40413A */}
          <div className="w-full p-8 lg:p-10 py-12 border min-h-[610px] text-dark bg-[#F4F3EE] flex justify-between flex-col gap-8 rounded-[20px]">
            <div className="w-full flex flex-col gap-1">
              <h3 className="text-4xl lg:text-[55px] leading-[1.2] font-selleasy_normal">
                <span className="block text-xs uppercase pb-2">
                  This is how we do it
                </span>
                Set pages live in seconds
              </h3>
              <p className="text-base text-grey font-normal">
                Our workflow allows you to test changes on a staging environment
                so nothing brakes and publish everything live right after
              </p>
              <div className="flex">
                <div className="btn btn_4 text-sm">Get Started </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <img
                src="https://www.nextstore.com/_next/image?url=%2Fhow--publish--desk%402x.png&w=1920&q=75"
                alt=""
                className="w-full"
              />
            </div>
          </div>

          <div className="w-full p-8 lg:p-10 py-12 border min-h-[610px] text-dark bg-[#CAE2E6] flex justify-between flex-col gap-8 rounded-[20px]">
            <div className="w-full flex flex-col gap-1"></div>
            <div className="w-full flex flex-col gap-1">
              <h3 className="text-4xl lg:text-[55px] leading-[1.2] font-selleasy_normal">
                Access ready-to-use mobile-first components
              </h3>
              <p className="text-base text-grey font-normal">
                From powerful native like blocks (Drawers, Bottom Navigation) to
                advanced gestures (Swipe, Pinch Tiktok like navigation),
                leverage the power of mobile through our extensive library.
              </p>
              <div className="flex">
                <div className="btn btn_4 text-sm">Get Started </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopIdeas;
