import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate = new Date("2025-11-28T14:00:00-03:00").getTime();

  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = targetDate - new Date().getTime();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-center">
        <p className="text-2xl font-bold text-gradient mb-4">
          Evento em andamento — FlashClip 28/11/2025
        </p>
      </div>
    );
  }

  const timeUnits = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center gap-2 min-w-[80px]"
        >
          <div className="bg-card border-2 border-primary rounded-lg p-4 w-full glow-neon">
            <span className="text-4xl font-bold text-gradient">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
