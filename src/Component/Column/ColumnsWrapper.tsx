import React from "react";

// Components
import Column from "./Column";

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
      </div>
    </div>
  );
};

export default ColumnsWrapper;
