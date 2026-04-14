import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TfiArrowDown } from "react-icons/tfi";
import { selectCurrentUser } from "@/redux/slices/authSlice";
import { useGetAllStoresQuery } from "@/redux/services/storeApi";

const Hero = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const { data: storesData } = useGetAllStoresQuery(
    {},
    { skip: !currentUser }
  );

  const firstStore = storesData?.data?.[0];

  const handleCta = () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    if (firstStore) {
      navigate(`/dashboard/store/${firstStore._id}`);
      return;
    }
    navigate("/onboarding");
  };

  return (
    <div className="py-12 w-full gap-8 justify-center">
      <div className="max-w-custom mx-auto z-20 relative overflow-hidden w-[90%] flex flex-col gap-8">
        <div className="w-full grid lg:grid-cols-custom gap-8">
          <div className="w-full flex flex-col gap-10">
            <div className="p-12 min-h-[380px] rounded-xl items-start gap-8 bg-[var(--dark-1)] justify-end flex flex-col w-full">
              <h3 className="font-normal max-w-[700px] leading-[1.4] text-4xl lg:text-6xl text-white">
                One platform, <br /> multiple stores, <br /> real-time control.
              </h3>
              <div className="flex items-center gap-4">
                <button onClick={handleCta} className="btn btn_2">
                  <span>
                    {currentUser ? "Proceed to Dashboard" : "Get Started"}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-end flex-col md:flex-row gap-8">
              <div className="w-24 text-2xl bg-white h-24 rounded-full border flex items-center justify-center">
                <TfiArrowDown />
              </div>
              <div className="flex items-center flex-col md:flex-row flex-1">
                <div className="p-8 md:p-10 min-h-[180px] rounded-xl items-start gap-8 bg-[var(--grey-1)] justify-center flex flex-col flex-1">
                  <h3 className="font-normal leading-[1.4] text-sm lg:text-base text-grey">
                    SellEasy, the website builder that turns your frontend into
                    a conversion-oriented machine
                  </h3>
                </div>
                <div className="w-8 h-[2px] bg-[var(--grey-1)]" />
                <div className="p-8 md:p-10 min-h-[180px] bg-white rounded-xl items-start gap-8 border justify-center flex flex-col flex-1">
                  <h3 className="font-normal leading-[1.4] text-sm lg:text-base text-grey">
                    SellEasy, the website builder that turns your frontend into
                    a conversion-oriented machine
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[270px] flex flex-col gap-4">
            <div className="p-6 w-full min-h-[400px] rounded-xl bg-[var(--grey-1)]" />
            <button onClick={handleCta} className="btn btn_2">
              <span className="text-sm">Start Building your store</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full relative -mt-12 z-10">
        <img
          src="https://www.nextstore.com/_next/image?url=%2Fbanner-with-brand.png&w=1920&q=75"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;