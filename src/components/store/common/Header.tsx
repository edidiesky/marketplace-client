"use client";
import { onLoginModal, onRegisterModal } from "@/redux/slices/modalSlice";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store: { auth?: any }) => store.auth);
  // console.log(currentUser);
  return (
    <div className="w-full flex bg-transparent">
      <div className="w-full ">
        <div className="flex relative flex-col w-full">
          <div className="w-full p-1">
            <div className="w-full py-1 border-b max-w-custom mx-auto flex items-center gap-4 justify-between">
              <h5 className="text-xs flex-1 font-work_font">
                Viverra quis quam nec cursus lorem egestas venenatis diam sed
                cursus.
              </h5>
              <div className="flex items-center justify-end">
                <Link
                  to={"cart/36364374"}
                  className="p-3 rounded-full text-xl hover:bg-[#fafafa]"
                >
                  <TiSocialFacebook />
                </Link>
                <Link
                  to={"cart/36364374"}
                  className="p-3 rounded-full text-lg  hover:bg-[#fafafa]"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  to={"cart/36364374"}
                  className="p-3 rounded-full text-lg  hover:bg-[#fafafa]"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to={"cart/36364374"}
                  className="p-3 rounded-full text-lg  hover:bg-[#fafafa]"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{
              backdropFilter: "blur(54px)",
            }}
            className="w-full sticky top-0 p-4 py-3 bg-[#ffffffa0]"
          >
            <div className="w-full max-w-custom mx-auto flex items-center gap-4 justify-between">
              <div className="flex items-center gap-8 lg:gap-12">
                <Link
                  to={"/"}
                  className="text-lg lg:text-2xl text-[var(--dark-1)] font-selleasy_bold"
                >
                  <img src="/images/logo.svg" alt="" className="w-full" />
                </Link>
              </div>
              <div className="hidden lg:flex flex-1 justify-center items-center gap-4">
                <Link
                  to={"#"}
                  className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font font-normal"
                >
                  Shoes
                </Link>
                <Link
                  to={"#"}
                  className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font font-normal"
                >
                  Bags
                </Link>
                <Link
                  to={"#"}
                  className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font font-normal"
                >
                  Jackets
                </Link>
                <Link
                  to={"#"}
                  className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font font-normal"
                >
                  About Shop
                </Link>
              </div>
              <div className="flex items-center justify-end gap-8 md:gap-12">
                <Link
                  to={"cart/36364374"}
                  className="p-4 rounded-full text-xl h hover:bg-[#fafafa]"
                >
                  <BsCart />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
