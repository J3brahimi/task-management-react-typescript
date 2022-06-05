import React from "react";

// Style
import "./style/input-style.css";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  rows?: number;
  placeholder?: string;
};

const Textarea: React.FC<Props> = ({
  value,
  setValue,
  rows = 6,
  placeholder,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };
  return (
    <textarea
      className="input"
      rows={rows}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
