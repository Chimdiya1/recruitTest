import { IoIosCard } from "react-icons/io";
function Logo() {
  return (
    <div className="flex text-black items-center">
      <div className="bg-blue-600 h-8 w-8 md:h-12 md:w-12 rounded-full mr-3 flex relative items-center justify-center">
        <IoIosCard className="text-white -rotate-[20deg] text-xl z-20" />
        <div className="bg-blue-500 -rotate-[20deg] w-[20px] h-[16px] rounded-sm z-10 top-[13px] absolute" ></div>
      </div>
      <h3 className="text-xl md:text-2xl">
        <span className="font-semibold">Zeus</span>Pay
      </h3>
    </div>
  );
}

export default Logo;
