import { useDispatch, useSelector } from "react-redux";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";
import { LuMessageSquareText } from "react-icons/lu";
import { IoStorefrontOutline } from "react-icons/io5";
import { TbSection } from "react-icons/tb";
import { GoGoal, GoArrowUpRight } from "react-icons/go";
import { SlSettings } from "react-icons/sl";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { selectCurrentUser, clearCredentials } from "@/redux/slices/authSlice";
import { useLogoutMutation } from "@/redux/services/authApi";
// import { useGetStoreQuery } from "@/redux/services/storeApi";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const { id } = useParams<{ id: string }>();

  // const { data: singleStoreData } = useGetStoreQuery(id ?? "", { skip: !id });

  const [logout] = useLogoutMutation();

  const menuItems = [
    {
      icon: LuLayoutDashboard,
      text: "Dashboard",
      to: `/dashboard/store/${id}`,
    },
    {
      icon: BsCart2,
      text: "Products",
      to: `/dashboard/store/${id}/products`,
    },
    {
      icon: IoMdColorPalette,
      text: "Colors",
      to: `/dashboard/store/${id}/colors`,
    },
    {
      icon: TbSection,
      text: "Categories",
      to: `/dashboard/store/${id}/categories`,
    },
    {
      icon: LuMessageSquareText,
      text: "Sizes",
      to: `/dashboard/store/${id}/sizes`,
    },
    {
      icon: IoStorefrontOutline,
      text: "Orders",
      to: `/dashboard/store/${id}/orders`,
    },
    {
      icon: GoGoal,
      text: "Analytics",
      to: `/dashboard/store/${id}/analytics`,
    },
  ];

  const handleSignOut = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      navigate("/");
      toast.success("Signed out successfully.");
    } catch {
      toast.error("An error occurred while signing out. Please try again.");
    }
  };

  return (
    <div className="bg-[#f9f9f9] w-[250px] flex-col lg:flex hidden h-[100vh] px-2 sticky top-0 justify-between py-4">
      <div className="flex-1 overflow-auto">
        <div className="flex items-center w-full px-4 mb-6">
          <h4 className="text-2xl font-semibold tracking-tight">SellEasy</h4>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-[#f1f1f1] w-full flex items-center gap-3 py-2 px-4 rounded text-sm font-medium text-[#000] transition duration-200"
                  : "w-full flex items-center gap-3 py-2 px-4 rounded text-sm font-medium text-[#777] transition duration-200 hover:bg-[#f1f1f1] cursor-pointer"
              }
            >
              <item.icon className="text-xl shrink-0" />
              <span>{item.text}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="w-full px-4 flex flex-col gap-4 pt-4 mt-4">
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="text-sm font-semibold">Try Pro</h4>
            <span className="block text-xs text-[#64645f] pt-0.5">
              Upgrade for image upload, smarter AI, and more Pro Search.
            </span>
          </div>
          <button className="p-2 px-4 bg-[#f1f1f1] hover:scale-95 transition-transform flex items-center gap-2 rounded-md text-[#777] text-sm w-fit">
            <GoArrowUpRight /> Learn More
          </button>
        </div>

        <div className="flex w-full gap-2 items-center justify-between">
          <button
            onClick={handleSignOut}
            className="flex p-1 rounded-full hover:bg-[#f1f1f1] flex-1 cursor-pointer items-center gap-2"
          >
            {currentUser?.profileImage ? (
              <img
                src={currentUser.profileImage}
                alt="User"
                className="rounded-full w-[38px] h-[38px] object-cover shrink-0"
              />
            ) : (
              <div className="w-[38px] h-[38px] shrink-0 flex bg-[#004E3F] items-center text-sm text-white justify-center rounded-full">
                {currentUser?.firstName?.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="flex-1 text-left">
              <h3 className="text-sm truncate text-[#171717]">
                {currentUser?.firstName} {currentUser?.lastName}
              </h3>
              <span className="text-xs text-muted-foreground truncate block">
                {currentUser?.email}
              </span>
            </div>
          </button>

          <Link
            to={`/dashboard/store/${id}/account`}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f1f1f1] text-base"
          >
            <SlSettings />
          </Link>
        </div>
      </div>
    </div>
  );
}
