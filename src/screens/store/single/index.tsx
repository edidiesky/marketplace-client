import ProductImage from "./ProductImage";
import ProductShortDescription from "./ProductShortDescription";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import SimiliarProduct from "./SimiliarProduct";
import Banner from "@/components/store/common/Banner";
import { useGetSingleProductQuery } from "@/redux/services/productApi";
import { useParams } from "react-router-dom";
// ProductShortDescription

export default function StoreSingleProduct() {
  const { productid } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(productid);
  // console.log("product Data", data);
  return (
    <>
      <Banner title={`Home / Store / ${data?.name}`} />
      <div className="w-full px-4 pt-20 max-w-custom mx-auto lg:w-[90%]">
        <div className="w-full grid lg:grid-cols-custom gap-12">
          <div className="w-full">
            <ProductImage data={data} />
          </div>
          <div className="w-full lg:w-[500px] flex flex-col gap-4">
            <ProductShortDescription data={data} />
          </div>
        </div>
        <ProductDescription />
        <ProductReview />
        <SimiliarProduct />
      </div>
    </>
  );
}
