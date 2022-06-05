import React, { useState } from "react";

// Components
import PrimaryButton from "../Button/PrimaryButton";
import NormalInput from "../Input/NormalInput";
import Textarea from "../Input/Textarea";

// Style
import "./style/card-form-style.css";

const CardForm: React.FC = () => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [titleInputValue, setTitleInputValue] = useState<string>("");
  const [descriptionInputValue, setDescriptionInputValue] =
    useState<string>("");

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log("Submit");
  };
  return (
    <form className="card-form" onSubmit={handleSubmitForm}>
      <NormalInput
        value={titleInputValue}
        setValue={setTitleInputValue}
        placeholder="Enter card title"
        required={true}
      />
      {showDescription ? (
        <Textarea
          value={descriptionInputValue}
          setValue={setDescriptionInputValue}
          placeholder="Enter card description"
        />
      ) : (
        <button
          className="description-button"
          type="button"
          onClick={toggleDescription}
        >
          + Add description
        </button>
      )}

      <PrimaryButton>Add card</PrimaryButton>
    </form>
  );
};

export default CardForm;
