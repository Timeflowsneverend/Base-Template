import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  console.log(start);

  useEffect(() => {
    console.log("useEffect");
    // Runs once when the component mounts
    if (start) {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);

      // Cleanup function when the component unmounts
      return () => clearInterval(interval);
    }
  }, [start]); // Empty dependency array → only runs once

  return (
    <>
      <h1>Time: {seconds}s</h1>{" "}
      <button onClick={() => setStart(!start)}>Start</button>
    </>
  );
}

export default Timer;
