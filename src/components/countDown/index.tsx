import { useCountdown } from "../../hooks/useCountDown";
import CountDownValue from "../countDownValue";

function CountDown() {
  const [, , minutes, seconds] = useCountdown();
  return (
    <div className="flex items-center">
      <CountDownValue
        value={String(minutes).length > 1 ? String(minutes)[0] : "0"}
      />
      <CountDownValue
        value={
          String(minutes).length > 1 ? String(minutes)[1] : String(minutes)[0]
        }
      />
      <span className="text-black text-2xl mx-[1px]">:</span>
      <CountDownValue
        value={String(seconds).length > 1 ? String(seconds)[0] : "0"}
      />
      <CountDownValue
        value={
          String(seconds).length > 1 ? String(seconds)[1] : String(seconds)[0]
        }
      />  
    </div>
  );
}

export default CountDown;
