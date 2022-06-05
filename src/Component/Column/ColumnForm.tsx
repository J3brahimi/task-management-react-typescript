import React, { useState } from "react";

// Component
import PrimaryButton from "../Button/PrimaryButton";
import NormalInput from "../Input/NormalInput";

const ColumnForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  // ADD & EDIT COLUMN (Submit form)
  const handleSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log("Submitted");
  };

  return (
    <form className="add-column-form" onSubmit={handleSubmitForm}>
      <NormalInput
        value={inputValue}
        setValue={setInputValue}
        placeholder="Enter column name"
        required={true}
      />
      <PrimaryButton>Add column</PrimaryButton>
    </form>
  );
};

export default ColumnForm;
