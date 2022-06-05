import React from "react";

// Components
import Column from "./Column";
import ColumnForm from "./ColumnForm";

// Style
import "./style/column-wrapper-style.css";

const ColumnsWrapper: React.FC = () => {
  return (
    <div className="columns-wrapper">
      <div className="columns-inner">
        <div className="column-item">
          <Column />
        </div>

        <div className="column-item">
          <Column />
        </div>

        <div className="column-item">
          <ColumnForm />
        </div>
      </div>
    </div>
  );
};

export default ColumnsWrapper;
