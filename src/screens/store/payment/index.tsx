import Banner from "@/components/store/common/Banner";
import Cart from "./Cart";
import ShippingInformation from "./ShippingInformation";
import PaymentPlaceholder from "./PaymentPlaceholder";
// ProductShortDescription
export default function StorePayment() {
  return (
    <>
      <Banner title={"Product Payment - Fineshot Good"} />
      <div className="w-full">
        <div className="w-full px-4 py-20 max-w-custom mx-auto lg:w-[90%]">
          <div className="w-full grid lg:grid-cols-custom gap-12">
            <div className="w-full flex flex-col gap-12">
              <Cart />
              <ShippingInformation />
            </div>
            <div className="w-full lg:w-[380px] flex flex-col gap-4">
              <PaymentPlaceholder />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
