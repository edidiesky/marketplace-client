import React from "react";
import { useSelector } from "react-redux";
import { LiaArrowsAltVSolid } from "react-icons/lia";
import { GoPlus } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { RiExternalLinkFill } from "react-icons/ri";
import { IoStorefrontOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { Link, useParams } from "react-router-dom";
import {
  useGetAllStoreQuery,
  useGetSingleStoreQuery,
} from "@/redux/services/storeApi";
import UserProfile from "@/components/common/UserProfile";
export default function Header() {
  const { user } = useSelector((state: any) => state.auth);
  const { id } = useParams();
  const [position, setPosition] = React.useState("bottom");
  const { data: stores } = useGetAllStoreQuery("");
  const { data: singleStore } = useGetSingleStoreQuery({ id });
  // useGetSingleStoreQuery
  // const storeList = [
  //   {
  //     id: "13y644u744",
  //     name: "Balenciaga Shop",
  //   },
  //   {
  //     id: "13y644u744",
  //     name: "Jeremy Shop",
  //   },
  // ];
  // console.log("stores", stores)
  // console.log("store id", id);
  // console.log("single store ", singleStore);
  return (
    <header
      style={{
        backdropFilter: "blur(54px)",
      }}
      className="bg-transparent w-full z-[40] border-b min-h-[75px] sticky left-0 top-0 flex items-center"
    >
      <div className="px-4 w-full lg:px-8">
        <div className="flex w-full items-center justify-between">
          {/* <h3 className="text-2xl font-dashboard_regular md:text-2xl">{title}</h3> */}
          <div className="flex-1">
            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                <div className="flex max-w-[280px]  p-3 py-2 border rounded-full hover:bg-[#F3F3EE] items-center gap-4 justify-between">
                  <h4
                    // onClick={handleSignOut}
                    className="text-sm font-selleasy_regular flex justify-start items-center gap-2 md:text-sm"
                  >
                    <div className="w-[30px] h-[30px] flex bg-[#004E3F] items-center text-sm text-white justify-center rounded-full">
                      {singleStore?.name?.split("")[0]}
                    </div>
                    {/* Gallery Shop */}
                    <span className='flex-1 text-xs md:text-sm'>{singleStore?.name}</span>
                  </h4>
                  <span className="text-sm lg:text-lg">
                    <LiaArrowsAltVSolid />
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[260px] border bg-white">
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <div className="w-full my-1 p-2.5 gap-2 text-lg cursor-pointer border-b flex items-center justify-center">
                    <LuSearch />
                    <input
                      type="text"
                      placeholder="Search store"
                      className="w-full font-dashboard_normal text-base bg-none border-none outline-none"
                    />
                  </div>
                  <div className="w-full py-3">
                    <span className="text-sm font-selleasy_normal text-grey p-3">
                      My Stores
                    </span>
                  </div>
                  {stores?.map(
                    (
                      market: { name: string; _id: string },
                      index: React.Key | null | undefined
                    ) => {
                      return (
                        <DropdownMenuRadioItem
                          key={index}
                          value={market?.name}
                          className="w-full cursor-pointer  py-2 hover:bg-[#F3F3EE]  gap-2"
                        >
                          <Link
                            to={`/store/${market?._id}`}
                            className="flex justify-between items-center w-full"
                          >
                            <div className="flex font-work_font text-sm font-semibold items-center gap-2">
                              <IoStorefrontOutline fontSize={"20px"} />
                              {market?.name}
                            </div>
                            <span className="text-lg">
                              <RiExternalLinkFill />
                            </span>
                          </Link>
                        </DropdownMenuRadioItem>
                      );
                    }
                  )}

                  <DropdownMenuItem className="w-full my-2 p-2 hover:bg-[#F3F3EE]  cursor-pointer border rounded-xl flex items-center justify-center">
                    <GoPlus /> Create Store
                  </DropdownMenuItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex flex-1 justify-end items-center gap-2">
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
}
