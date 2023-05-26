import "./App.css";
import { GrClose } from "react-icons/gr";
import Logo from "./components/logo";
import CountDown from "./components/countDown";
import CardForm from "./components/cardForm";
import Card from "./components/card";
import Receipt from "./components/receipt";
function App() {
  return (
    <div className=" lg:p-14 bg-blue-500 xl:flex xl:flex-col xl:items-center min-h-screen">
      <div className="bg-white xl:max-w-7xl  pb-[300px] md:pb-[300px] pt-14  p-4 md:pt-14 md:p-8 lg:p-14 relative">
        <div className="w-14 h-12 bg-gray-100 flex items-center justify-center absolute top-0 right-0 cursor-pointer">
          <GrClose className="text-lg" />
        </div>
        <div className="flex flex-col bg-white lg:flex-row justify-between">
          <div className="lg:w-2/3 bg-white">
            <div className="flex justify-between items-center mb-10 flex-wrap">
              <Logo />
              <CountDown />
            </div>
            <CardForm />
          </div>
          <div className="mt-10 lg:mt-0 lg:w-[28%] bg-white flex flex-col items-center relative ">
            <div className="w-[70%] flex flex-col items-center">
              <div className="h-1 w-16 rounded-sm shadow-2xl shadow-blue-800 bg-blue-600 z-40  "></div>
              <div className="h-2 absolute w-16 mt-1 blur-lg bg-blue-600  z-40"></div>
              <Card />
            </div>
            <Receipt />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
