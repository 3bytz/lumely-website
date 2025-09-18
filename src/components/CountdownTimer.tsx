import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const now = new Date();
    const target = new Date(now);
    target.setDate(now.getDate() + 50);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center space-x-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white px-4 py-2 rounded-4">
      <div className="text-sm font-fredoka">Our App will be live In:</div>
      <div className="flex space-x-2 font-fredoka">
        <div className="text-center">
          <span className="font-bold">{timeLeft.days}</span>
          <span className="text-xs">d</span>
        </div>
        <div className="text-center">
          <span className="font-bold">{timeLeft.hours}</span>
          <span className="text-xs">h</span>
        </div>
        <div className="text-center">
          <span className="font-bold">{timeLeft.minutes}</span>
          <span className="text-xs">m</span>
        </div>
        <div className="text-center">
          <span className="font-bold">{timeLeft.seconds}</span>
          <span className="text-xs">s</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
