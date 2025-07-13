import { useState } from "react";

const Bulb = () => {
  const [on, setOn] = useState(false);
  return (
    <div
      className="h-screen w-screen grid place-items-center duration-1000"
      style={{ backgroundColor: on ? "black" : "white" }}
    >
      <button
        onClick={() => setOn(!on)}
        style={{ backgroundColor: on ? "white" : "black" }}
        className={`select-none grid overflow-hidden place-items-center  size-20 rounded-full transition-shadow duration-300 ${
          on
            ? "shadow-[0_0_50px_5px_rgba(255,255,255,0.8)] transition-shadow ease-in-out"
            : "shadow-[0_0_50px_5px_rgba(0,0,0,0.8)] transition-shadow ease-in-out"
        }`}
      >
        <div
          className={`relative flex flex-col transition-all ease-in-out pointer-events-none duration-300 gap-25 ${
            on ? "translate-y-7" : "-translate-y-24"
          }`}
        >
          <div className={`relative ${on && "pointer-events-auto"}`}>On</div>
          <div
            className={`relative ${!on && "pointer-events-auto"} text-white`}
          >
            Off
          </div>
        </div>
      </button>
    </div>
  );
};

export default Bulb;
