import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="h-screen flex  flex-col justify-center items-center gap-10 ">
      <p className="">{count}</p>
      <div className="flex gap-5">
        <button className="btn btn-success" onClick={handleIncrease}>
          Increase
        </button>
        <button className="btn btn-warning" onClick={handleDecrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
