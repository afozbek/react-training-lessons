import React, { useState } from "react";

const Counter = () => {
  /* React v16.8 sonrası ile gelen özellik, fonksiyonlarda state kullanımını sağlar */
  const [counter, setCounter] = useState(0);

  const handleIncrement = (value = 1) => {
    if (counter <= 10) {
      setCounter(counter + value);
    }
  };

  const handleDecrement = (value = 1) => {
    if (counter > 0) {
      setCounter(counter - value);
    }
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => handleIncrement()}>Increment</button>{" "}
      {/* Func comp. olduğundan this kullanılmaz */}
      <button onClick={() => handleDecrement()}>Decrement</button>
    </div>
  );
};

export default Counter;
