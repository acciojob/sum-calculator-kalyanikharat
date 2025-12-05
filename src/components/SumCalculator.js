import React, { useState, useEffect } from "react";

export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    }, 0);
    return () => clearTimeout(timer);
  }, [numbers]);

  const handleAddNumber = () => {
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed)) {
      setNumbers([...numbers, parsed]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleAddNumber}>Add Number</button>
      {/* ✅ Fix: match Cypress expectation */}
      <p>Sum: {sum}</p>
    </div>
  );
}
