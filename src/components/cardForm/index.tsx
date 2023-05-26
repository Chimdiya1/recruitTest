import { MdEdit } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { IoIosKeypad } from "react-icons/io";
import mastercard from "../../assets/mastercard.png";
import { useRef } from "react";
import CardInputGroup from "../cardInputGroup";
function CardForm() {
  const first = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    console.log("first");
    first?.current?.focus();
  };
  return (
    <div className=" text-black">
      <form>
        <div className="flex items-center w-full justify-between mb-7">
          <div>
            <h5 className="font-semibold text-lg mb-1">Card Number</h5>
            <span className="text-gray-400 text-sm">
              Enter the 16-digit card number on the card
            </span>
          </div>
          <div
            className="flex items-center text-blue-600 cursor-pointer"
            onClick={handleClick}
          >
            <MdEdit className="text-xl mr-2" />
            <span className="font-semibold" onClick={handleClick}>
              Edit
            </span>
          </div>
        </div>

        <div className="w-full relative mb-7">
          <img
            src={mastercard}
            alt="logo"
            className="absolute w-10 left-3 top-[18px]"
          />
          <input
            ref={first}
            className="w-full pl-20 pr-20 bg-gray-50 p-4 rounded-lg border-[2px] border-gray-200
          placeholder:font-semibold placeholder:text-gray-300 placeholder:text-[12px] placeholder:lg:text-lg"
            placeholder="2412      -      7512      -      3412      -      3456"
            type="text"
          />
          <BsFillPatchCheckFill className="text-blue-400 absolute text-2xl right-4 top-[18px]" />
        </div>
        <CardInputGroup
          title="Cvv Number"
          description="Enter the 3 or 4 digit number on the card"
        >
          <div className="md:w-2/4 relative ">
            <input
              className="w-full pl-20 pr-20 bg-white p-4 rounded-lg border-[2px] border-gray-200 placeholder:font-semibold placeholder:text-gray-300 placeholder:text-center"
              placeholder="327"
              type="text"
            />
            <IoIosKeypad className="text-gray-400 absolute text-2xl right-4 top-[18px]" />
          </div>
        </CardInputGroup>
        <CardInputGroup
          title="Expiry Date"
          description="Enter the 3 or 4 digit number on the card"
        >
          <div className="md:w-2/4 flex gap-5 items-center">
            <input
              className="w-1/2 lg:pl-10 text-center lg:pr-10 bg-white p-4 rounded-lg border-[2px] border-gray-200 placeholder:font-semibold placeholder:text-gray-300 placeholder:text-center"
              placeholder="327"
              type="text"
            />
            <span className="text-xl font-bold">/</span>
            <input
              className="w-1/2 lg:pl-10 lg:pr-10 bg-white p-4 rounded-lg border-[2px] border-gray-200 placeholder:font-semibold placeholder:text-gray-300 placeholder:text-center"
              placeholder="327"
              type="text"
            />
          </div>
        </CardInputGroup>
        <CardInputGroup
          title="Password"
          description="Enter your Dynamic password"
        >
          <div className="md:w-2/4 relative ">
            <input
              className="w-full pl-20 pr-20 bg-white p-4 rounded-lg border-[2px] border-gray-200 placeholder:font-semibold placeholder:text-gray-300 placeholder:text-center"
              placeholder="************ "
              type="text"
            />
            <IoIosKeypad className="text-gray-400 absolute text-2xl right-4 top-[18px]" />
          </div>
        </CardInputGroup>
        <button className="w-full flex items-center justify-center text-white bg-blue-600 p-4 rounded-lg">
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default CardForm;
