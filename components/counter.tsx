// components/Counter.tsx
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

interface CounterProps {
  min: number;
  max: number;
  onValueChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({ min, max, onValueChange }) => {
  const [value, setValue] = useState(min);

  const increment = () => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      onValueChange(newValue);
    }
  };

  const decrement = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      onValueChange(newValue);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={decrement}
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l flex items-center"
      >
        <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
      </button>
      <input
        type="number"
        value={value}
        readOnly
        className="text-center w-16 mx-2 border bg-white"
      />
      <button
        onClick={increment}
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r flex items-center"
      >
        <ChevronUpIcon className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Counter;
