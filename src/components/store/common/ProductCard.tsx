import React from "react";
import { BsCart2 } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Product } from "@/types/api";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/store/${product?.store}/product/${product?._id}`}
      className="w-full px-3 pt-4 border rounded-md relative"
    >
      <div className="w-full cursor-pointer rounded-md overflow-hidden relative">
        <img
          src={product?.images? product?.images[0]:""}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full py-4 flex flex-col">
        <div className="w-full flex flex-col">
          <h4 className="text-lg font-dashboard_regular">{product?.name}</h4>
          <div className="flex  text-[#FFCE78] text-base items-center gap-1">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <h4 className="text-lg font-work_font">${product?.price}</h4>
        <div className="w-full pt-2 mt-4 border-t flex items-center justify-between">
          <div className="w-full pt-3 border-t flex items-center justify-between">
            <h5 className="flex text-base cursor-pointer font-k_font font-normal items-center gap-2">
              <BsCart2 /> <span className="text-sm">Add to Cart</span>
            </h5>
            <h5 className="flex text-base cursor-pointer font-k_font font-normal items-center gap-2">
              <ImSearch /> <span className="text-sm">Quick View</span>
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
}
