import React, { useState, useContext, useCallback } from "react";

// Context
import Context from "../../Context/store";

// Types
import { CardType } from "../../Model";

// Component
import PrimaryButton from "../Button/PrimaryButton";
import NormalInput from "../Input/NormalInput";
import Textarea from "../Input/Textarea";

// Style
import "./style/card-form-style.css";

type Props = {
  columnId: number;
  isEdit?: boolean;
  setEditingCard?: React.Dispatch<React.SetStateAction<boolean>>;
  editingCard?: CardType;
};

const CardForm: React.FC<Props> = ({
  columnId,
  isEdit,
  setEditingCard,
  editingCard,
}) => {
  const { addCard, editCard } = useContext(Context);

  const convertDescriptionToBoolean = editingCard?.description ? true : false;
  const [showDescription, setShowDescription] = useState<boolean>(
    convertDescriptionToBoolean || false
  );
  const [titleInputValue, setTitleInputValue] = useState<string>(
    editingCard?.title || ""
  );
  const [descriptionInputValue, setDescriptionInputValue] = useState<string>(
    editingCard?.description || ""
  );

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // Toggle between add and edit card
    if (isEdit && editingCard && setEditingCard) {
      editCard({
        id: editingCard?.id,
        title: titleInputValue,
        description: descriptionInputValue,
        columnId,
      });
      setEditingCard(false);
    } else {
      addCard({
        title: titleInputValue,
        description: descriptionInputValue,
        columnId,
      });
      setTitleInputValue("");
      setDescriptionInputValue("");
    }
  };

  // Close form and show card
  const handleCancel = useCallback(() => {
    if (setEditingCard) setEditingCard(false);
  }, []);

  return (
    <>
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

        <PrimaryButton>{isEdit ? "Edit card" : "Add Card"}</PrimaryButton>
      </form>
      {isEdit && setEditingCard && (
        <div style={{ margin: "0 12px" }}>
          <PrimaryButton onClick={handleCancel} background="red">
            Cancel
          </PrimaryButton>
        </div>
      )}
    </>
  );
};

export default CardForm;
