import { MdOutlineReceiptLong } from "react-icons/md";
import { AiFillApple } from "react-icons/ai";

function Receipt() {
  return (
    <div className="text-black rounded-2xl bg-slate-100 lg:h-4/5 w-full  absolute top-[40%] lg:top-[20%] pt-52 pb-4">
      <div className="px-8 text-sm">
        <div className="flex justify-between mb-2">
          <span className="text-slate-400">Company</span>
          <span className="flex items-center font-semibold text-slate-600">
            <span className="bg-black mr-2 text-white h-5 w-5 flex items-center justify-center rounded-full">
              <AiFillApple className="white text-[12px]" />
            </span>{" "}
            Apple
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-slate-400">Order Number</span>
          <span className="flex items-center font-semibold text-slate-600">
            1266201
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-slate-400">Product</span>
          <span className="flex items-center font-semibold text-slate-600">
            MacBook Air
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-slate-400">VAT (20%)</span>
          <span className="flex items-center  font-semibold text-slate-600">
            $100.00
          </span>
        </div>
      </div>
      <div className="flex items-center relative">
        <div className="w-5 h-5 md:w-10 md:h-10 bg-white absolute -left-3 md:-left-5 rounded-full"></div>
        <div className="w-full border-t border-slate-300 my-4 border-dashed"></div>
        <div className="w-5 h-5 md:w-10 md:h-10 bg-white absolute -right-3 md:-right-5 rounded-full"></div>
      </div>
      <div className="px-8 flex justify-between items-center">
        <div>
          <span className="text-slate-400 text-sm">You have to Pay</span>
          <div className="flex align-baseline text-slate-700 items-baseline">
            <h4 className="text-2xl font-semibold">549.</h4>
            <span>99</span>
          </div>
        </div>
        <MdOutlineReceiptLong className="text-slate-700 text-3xl rotate-180" />
      </div>
    </div>
  );
}

export default Receipt;
