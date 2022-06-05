import React, { useState, useContext, useCallback } from "react";

// Context
import Context from "../../Context/store";

// Component
import PrimaryButton from "../Button/PrimaryButton";
import NormalInput from "../Input/NormalInput";

// Types
import { ColumnType } from "../../Model";

type Props = {
  isEdit?: boolean;
  setShowEditForm?: React.Dispatch<React.SetStateAction<boolean>>;
  editingColumnInfo?: ColumnType;
};

const ColumnForm: React.FC<Props> = ({
  isEdit = false,
  setShowEditForm,
  editingColumnInfo,
}) => {
  const { addColumn, editColumn } = useContext(Context);
  const [inputValue, setInputValue] = useState<string>(
    editingColumnInfo?.name || ""
  );

  // ADD & EDIT COLUMN (Submit form)
  const handleSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // Toggle between add and edit column
    if (isEdit && editingColumnInfo && setShowEditForm) {
      editColumn({ id: Number(editingColumnInfo.id), name: inputValue });
      setShowEditForm(false);
    } else {
      setInputValue("");
      addColumn(inputValue);
    }
  };

  // Close form and show column
  const handleCancel = useCallback(() => {
    if (setShowEditForm) setShowEditForm(false);
  }, []);

  return (
    <>
      <form className="add-column-form" onSubmit={handleSubmitForm}>
        <NormalInput
          value={inputValue}
          setValue={setInputValue}
          placeholder="Enter column name"
          required={true}
        />
        <PrimaryButton>{isEdit ? "Edit column" : "Add column"}</PrimaryButton>
      </form>
      {isEdit && setShowEditForm && (
        <div style={{ marginTop: "8px" }}>
          <PrimaryButton onClick={handleCancel} background="red">
            Cancel
          </PrimaryButton>
        </div>
      )}
    </>
  );
};

export default ColumnForm;
