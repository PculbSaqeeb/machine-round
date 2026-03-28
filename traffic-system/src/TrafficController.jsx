import { useEffect, useState, useMemo } from "react";
import Light from "./Light";

const TrafficController = ({ data }) => {
  const displayOrder = useMemo(() => 
    [...data].toSorted((a, b) => a.displayColorOrder - b.displayColorOrder),
    [data]
  );
  const sequenceOrder = useMemo(() => 
    [...data].toSorted((a, b) => a.order - b.order),
    [data]
  );

  const [activeColor, setActiveColor] = useState(sequenceOrder[0]);
  const [timeLeft, setTimeLeft] = useState(
    Math.floor(sequenceOrder[0].timer / 1000) - 1,
  );

  useEffect(() => {
    const startTime = Date.now();
    const duration = activeColor.timer;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = duration - elapsed;

      if (remaining <= 0) {
        clearInterval(timer);
        const currentIndex = sequenceOrder.findIndex(
          (c) => c.color === activeColor.color,
        );
        const nextIndex = (currentIndex + 1) % sequenceOrder.length;
        const nextColor = sequenceOrder[nextIndex];

        setActiveColor(nextColor);
        setTimeLeft(Math.floor(nextColor.timer / 1000) - 1);
      } else {
        setTimeLeft(Math.max(0, Math.ceil(remaining / 1000) - 1));
      }
    }, 100);

    return () => clearInterval(timer);
  }, [activeColor, sequenceOrder]);

  return (
    <div className="max-w-fit p-10 bg-black flex flex-col gap-10 items-center justify-center rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {displayOrder.map((c) => (
        <Light
          key={c.color}
          color={c.color}
          activeColor={activeColor.color}
          timeLeft={timeLeft}
        />
      ))}
    </div>
  );
};

export default TrafficController;