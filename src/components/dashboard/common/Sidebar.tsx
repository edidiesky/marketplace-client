"use client";
import { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";
import { LuMessageSquareText } from "react-icons/lu";
import { IoStorefrontOutline } from "react-icons/io5";
import { TbSection } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { useGetSingleStoreQuery } from "@/redux/services/storeApi";

export default function Sidebar() {
  const navigate = useNavigate()
  const { user } = useSelector((state: any) => state.auth);
  const { id } = useParams();
  const { data: singleStore } = useGetSingleStoreQuery({ id });
  const menuItems = [
    {
      icon: LuLayoutDashboard,
      text: "Dashboard",
      to: `/dashboard/store/${singleStore?._id}`,
      subItems: [],
    },
    {
      icon: BsCart2,
      text: "Products",
      to: `/dashboard/store/${singleStore?._id}/product`,

      subItems: [],
    },
    {
      icon: IoMdColorPalette,
      text: "Colors",
      to: `/dashboard/store/${singleStore?._id}/colors`,
    },
    {
      icon: TbSection,
      text: "Categories",
      to: `/dashboard/store/${singleStore?._id}/categories`,

      subItems: [],
    },
    {
      icon: LuMessageSquareText,
      text: "Sizes",
      to: `/dashboard/store/${singleStore?._id}/sizes`,

      subItems: [],
    },

    {
      icon: IoStorefrontOutline,
      text: "Orders",
      to: `/dashboard/store/${singleStore?._id}/orders`,

      subItems: [],
    },
    {
      icon: GoGoal,
      text: "Analytics",
      to: `/dashboard/store/${singleStore?._id}/analytics`,

      subItems: [],
    },
  ];

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(clearAuth());
      toast.error("Signed out sucessfully!!!");

      navigate("/");

    } catch (error) {
      toast.error("An error occurred while signing out. Please try again.");
    }
  };
  return (
    <div className="bg-[#f9f9f9] w-[250px] flex-col lg:flex hidden h-[100vh] px-2 sticky top-0 justify-between py-4">
      <div className="flex-1 overflow-auto ">
        <div className="flex items-center w-full space-x-2 px-4 mb-6">
          <div className="relative w-full">
            <h4 className="text-2xl font-selleasy_bold">SellEasy</h4>
          </div>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.to}
                end
                className={({ isActive, _isPending }) =>
                  isActive
                    ? "bg-[#f1f1f1] w-full block py-2 text-base font-dashboard_normal px-4 lg:px-4 rounded transition duration-200 text-[#000]"
                    : "py-2 w-full text-base block text-[#777]  font-dashboard_normal px-4 lg:px-4 rounded transition duration-200 hover:bg-[#f1f1f1] cursor-pointer"
                }
              >
                <div className="flex items-center gap-3">
                  <item.icon className="inline-block text-xl" />
                  <span>{item.text}</span>
                </div>
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
      <div className="w-full px-4 flex flex-col gap-4 pt-4 mt-4">
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-dashboard_regular">
            Try Pro
            <span className="block text-base text-[#64645f] font-dashboard_normal">
              {" "}
              Upgrade for image upload, smarter AI, and more Pro Search.
            </span>
          </h4>
          <div className="w-full flex">
            <div
              style={{ transition: "all .2s" }}
              className="p-2 px-4 bg-[#f1f1f1] cursor-pointer hover:scale-[0.9] flex items-center gap-3 rounded-md text-[#777] text-base"
            >
              <GoArrowUpRight /> Learn More
            </div>
          </div>
        </div>
        <div className="flex w-full gap-2 items-center justify-between">
          <div
            onClick={handleSignOut}
            className="flex p-1 rounded-full hover:bg-[#f1f1f1] flex-1 cursor-pointer items-center gap-2"
          >
            {user?.image ? (
              <img
                src={user?.image}
                alt="User"
                className="rounded-full w-[38px] h-[38px] object-cover"
              />
            ) : (
              <div className="w-[38px] h-[38px] flex bg-[#004E3F] items-center text-lg text-white justify-center rounded-full">
                {/* {user?.name?.split("")[0]} */}E
              </div>
            )}

            <div className="flex-1">
              <h3 className="text-sm flex flex-col text-dark">
                {/* {user?.name} */}
                Edidiong20..
              </h3>
            </div>
          </div>
          <Link
            to={`/dashboard/store/${singleStore?._id}/account`}
            className="w-10 cursor-pointer hover:bg-[#f1f1f1] text-base h-10 flex items-center justify-center rounded-full"
          >
            <SlSettings />
          </Link>
        </div>
      </div>
    </div>
  );
}
