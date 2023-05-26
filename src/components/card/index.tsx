import "./card.css"
import { AiOutlineWifi } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import sim from "../../assets/sim.png";
import mastercard from "../../assets/mastercard.png";
function Card() {
  return (
    <div
      className="card h-full p-5 text-black w-full rounded-3xl bg-white z-30 shadow-xl "
    >
      <div className="flex justify-between items-center">
        <img src={sim} alt="logo" className=" w-8 left-3 top-[18px]" />
        <AiOutlineWifi className="text-3xl text-black" />
      </div>
      <div>
        <h5 className="font-[500] text-sm mt-24">Jonathan Michael</h5>
        <span className="flex items-center mt-2 mb-5 text-lg font-semibold">
          <BsFillCircleFill className="text-[6px] mr-1" />
          <BsFillCircleFill className="text-[6px] mr-1" />
          <BsFillCircleFill className="text-[6px] mr-1" />
          <BsFillCircleFill className="text-[6px] mr-3" />
          3456
        </span>
        <div className="flex w-full justify-between mt-2">
          <span>09/22</span>
          <div className="flex flex-col items-center">
            <img
              src={mastercard}
              alt="logo"
              className=" w-9 left-3 top-[18px]"
            />
            <p className="text-[7px]">mastercard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
