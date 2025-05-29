import React, { ChangeEvent } from "react";

interface InputProps {
  type?: string;
  value?: string;
  placeholder: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ type, value, placeholder, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange!(e.target.value);
  };

  return (
    <input
      type={type!}
      className="py-2.5 text-lg bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-white placeholder:text-white"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
