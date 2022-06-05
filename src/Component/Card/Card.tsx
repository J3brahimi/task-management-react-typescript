import React, { useState } from "react";

// Style
import "./style/card-style.css";

const Card: React.FC = () => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <div className="single-card">
      <h5 onClick={() => setShowDescription(!showDescription)}>
        <span>+</span>
        Card title
      </h5>
      <p style={{ display: showDescription ? "block" : "none" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem.
      </p>
      <div className="single-card-footer">
        <select defaultValue="default">
          <option value="default" disabled={true} hidden>
            Move card...
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Card;
