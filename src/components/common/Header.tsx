"use client";
import { onLoginModal, onRegisterModal } from "@/redux/slices/modalSlice";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "./UserProfile";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store: { auth?: any }) => store.auth);
  // console.log(currentUser);
  return (
    <div className="w-full p-4 bg-transparent">
      <div className="w-full lg:px-6 bg-[#FFFFFF] max-w-custom mx-auto rounded-full py-2 min-h-[55px] flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link
            to={"/"}
            className="text-lg lg:text-2xl text-[var(--dark-1)] font-selleasy_bold"
          >
            SellEasy
          </Link>
        </div>
        {/* <div className="hidden lg:flex flex-1 justify-center items-center gap-4">
          <Link
            to={"#"}
            className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font"
          >
            Features
          </Link>
          <Link
            to={"#"}
            className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font"
          >
            App
          </Link>
          <Link
            to={"#"}
            className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font"
          >
            Pricing
          </Link>
          <Link
            to={"#"}
            className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font"
          >
            Integration
          </Link>
        </div> */}
        <div className="flex items-center justify-end gap-8 md:gap-12">
          <div className="hidden lg:flex flex-1 justify-center items-center gap-4">
            <Link
              to={"#"}
              className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font"
            >
              Features
            </Link>
            <Link
              to={"#"}
              className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font"
            >
              App
            </Link>
            <Link
              to={"#"}
              className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font"
            >
              Pricing
            </Link>
            <Link
              to={"#"}
              className="text-base p-2 px-4 rounded-full hover:bg-[var(--grey-1)] text-[var(--dark-1)] font-work_font"
            >
              Integration
            </Link>
          </div>
          <div className="flex items-center justify-end">
            {currentUser ? (
              <div className="flex items-center justify-end gap-2 md:gap-4">
                <Link
                  to={"/dashboard/user"}
                  className="btn text-base font-work_font font-semibold text-[var(--dark-1)] bg-[#3e3aff] shadows"
                >
                  Go to Dashboard
                </Link>

                <UserProfile />
              </div>
            ) : (
              <div className="flex items-center font-work_font justify-end gap-2 md:gap-4">
                <button
                  onClick={() => dispatch(onLoginModal(""))}
                  className="btn btn_small"
                >
                  <span className="p-1">Sign in</span>
                </button>
                <button
                  onClick={() => dispatch(onRegisterModal(""))}
                  className="btn btn_small_2"
                >
                  <span className="p-1">Sign Up</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
