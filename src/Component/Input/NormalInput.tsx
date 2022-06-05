import React from "react";

// Style
import "./style/input-style.css";

type Props = {
  type?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
};

const NormalInput: React.FC<Props> = ({
  type = "text",
  value,
  setValue,
  min,
  max,
  placeholder,
  required = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <input
      className="input"
      required={required}
      type={type}
      max={max}
      min={min}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default NormalInput;
