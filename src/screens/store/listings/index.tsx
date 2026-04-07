import ProductCard from "@/components/store/common/ProductCard";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";
import { useGetAllStoreProductQuery } from "@/redux/services/productApi";
import { useParams } from "react-router-dom";
import { productDataType } from "@/constants/types";
import CardLoader from "@/components/common/loader/CardLoader";
import { useGetSingleStoreQuery } from "@/redux/services/storeApi";
export default function StoreListing() {
  const { id } = useParams();
  const { data: storeProduct, isLoading } = useGetAllStoreProductQuery({
    storeid: id,
  });

  const { data: store } = useGetSingleStoreQuery({
    id,
  });
  const categoriesList = [
    "Casual collection",
    "Deals",
    "Men",
    "Women",
    "Spring collection",
    "Streetwear",
    "Uncategorized",
    "Military",
  ];
  // console.log("id", id);
  // console.log("storeProduct", storeProduct);
  return (
    <>
      <div className="w-full max-w-custom mx-auto flex flex-col ">
        {/* banner */}
        <div className="w-full h-[320px] relative">
          <img
            src="https://avada.website/retail/wp-content/uploads/sites/113/2021/02/banner-11-scaled.jpg"
            alt="banner_cover"
            className="w-full absolute top-0 left-0 object-cover z-10 h-full"
          />
          <div className="w-full absolute top-0 left-0 object-cover h-full bg-[rgba(0,0,0,.3)] z-10"></div>
          <div className="w-full h-full p-4 lg:p-8 flex z-30 relative items-center">
            <h2 className="text-4xl lg:text-6xl text-white font-dashboard_regular font-normal">
              {store?.name}'s Shop
              <span className="block pt-3 max-w-[700px] font-work_font text-sm lg:text-lg text-[#c4c4c4]">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, dolor earum. Voluptatibus eligendi tempora odit
                pariatur molestiae numquam nam est. */}
                {store?.description}
              </span>
            </h2>
          </div>
        </div>
        {/* filtering section */}
        {/* product list and filter */}
        <div className="w-full px-4 md:px-4 grid gap-12 py-12 items-start lg:grid-cols-custom">
          {isLoading ? (
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              {new Array(7).fill("1").map((_, index) => {
                return <CardLoader key={index} />;
              })}
            </div>
          ) : (
            <>
              <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                {storeProduct?.map((data: productDataType, index: any) => {
                  return <ProductCard product={data} key={index} />;
                })}
              </div>
            </>
          )}
          {/* <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
             {
               isLoading? 
             }
            {storeProduct.map((data: productDataType, index: any) => {
              return <ProductCard product={data} key={index} />;
            })}
          </div> */}
          <div className="w-full lg:w-[300px]">
            <div className="w-full flex flex-col p-3 gap-10">
              {/* Search */}
              <label
                htmlFor="search"
                className="w-full h-[60px] p-3 border rounded-md text-base flex items-center gap-3"
              >
                <ImSearch />
                <input
                  type="text"
                  placeholder="Search ...."
                  id="search"
                  className="border-none outline-none bg-transpa"
                />
              </label>
              {/* Filter Categories */}
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-xl">Categories</h4>
                <div className="w-full flex flex-col">
                  {categoriesList?.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full cursor-pointer py-4 font-selleasy_normal text-sm border-b gap-2 "
                      >
                        <h5
                          style={{ transition: "all .2s" }}
                          className="w-full hover:translate-x-2 flex items-center"
                        >
                          <HiOutlineChevronRight />
                          {data}
                        </h5>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
