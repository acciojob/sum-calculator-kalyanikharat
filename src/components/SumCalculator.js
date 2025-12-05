import React, { useState, useEffect } from "react";

export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  // Recalculate sum whenever numbers change
  useEffect(() => {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    setSum(total);
  }, [numbers]);

  // Handler: update numbers array on every input change
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      // Add the new number to the array
      setNumbers([...numbers, value]);
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <p>Sum: {sum}</p>
    </div>
  );
}
