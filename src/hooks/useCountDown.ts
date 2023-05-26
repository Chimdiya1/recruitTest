import { useEffect, useState } from "react";

const NOW_IN_MS = new Date().getTime();
const targetDate = NOW_IN_MS + 90000;
const useCountdown = () => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (countDownDate - new Date().getTime() > 0) {
        setCountDown(countDownDate - new Date().getTime());
      }
    }, 1000);
    // console.log(Math.floor((countDownDate % (1000 * 60)) / 1000))
    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
};

export { useCountdown };
