import { useState } from "react";

const Bulb = () => {
  const [on, setOn] = useState(false);
  return (
    <div
      className="h-screen w-screen grid place-items-center duration-300"
      style={{ backgroundColor: on ? "black" : "white" }}
    >
      <button
        onClick={() => setOn(!on)}
        style={{ backgroundColor: on ? "white" : "black" }}
        className={`select-none grid overflow-hidden place-items-center size-20 rounded-full transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] active:scale-90 hover:scale-105 hover:ring-1

 ${
   on
     ? "shadow-[0_0_50px_5px_rgba(255,255,255,0.8)] ring-black"
     : "shadow-[0_0_50px_5px_rgba(0,0,0,0.8)] ring-white"
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
