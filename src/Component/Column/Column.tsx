import React from "react";

// Components
import Card from "../Card/Card";
import CardForm from "../Card/CardForm";

// Style
import "./style/column-style.css";

const Column: React.FC = () => {
  return (
    <div className="single-column">
      <div className="column-header">
        <h4 className="column-name">Column name</h4>
        <div>
          <button>Edit name</button>
          <button>Delete</button>
        </div>
      </div>
      <Card />
      <Card />
      <Card />
      <CardForm />
    </div>
  );
};

export default Column;
