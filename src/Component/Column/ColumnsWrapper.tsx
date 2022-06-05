import React, { useContext } from "react";

// Context
import Context from "../../Context/store";

// Component
import Column from "./Column";
import ColumnForm from "./ColumnForm";

// Style
import "./style/column-wrapper-style.css";

const ColumnsWrapper: React.FC = () => {
  const { columns } = useContext(Context);
  return (
    <div className="columns-wrapper">
      <div className="columns-inner">
        {columns.map((column) => (
          <div key={column.id} className="column-item">
            <Column column={column} />
          </div>
        ))}

        <div className="column-item">
          <ColumnForm />
        </div>
      </div>
    </div>
  );
};

export default ColumnsWrapper;
