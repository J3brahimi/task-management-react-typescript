import React, { useState, useContext, useCallback } from "react";

// Context
import Context from "../../Context/store";

// Component
import CardForm from "./CardForm";

// Types
import { CardType } from "../../Model";

// Style
import "./style/card-style.css";

type Props = {
  card: CardType;
};

const Card: React.FC<Props> = ({ card }) => {
  const { columns, editCard, removeCard } = useContext(Context);

  const [editingCard, setEditingCard] = useState<boolean>(false);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const handleMoveCard = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      editCard({ ...card, columnId: Number(e.target.value) });
    },
    []
  );

  return (
    <>
      {editingCard ? (
        <CardForm
          columnId={card.columnId}
          isEdit={true}
          setEditingCard={setEditingCard}
          editingCard={card}
        />
      ) : (
        <div className="single-card">
          <h5 onClick={() => setShowDescription(!showDescription)}>
            {card.description && <span>{showDescription ? "-" : "+"}</span>}
            {card.title}
          </h5>
          <p style={{ display: showDescription ? "block" : "none" }}>
            {card.description}
          </p>
          <div className="single-card-footer">
            {columns.length > 1 && (
              <select defaultValue="default" onChange={handleMoveCard}>
                <option value="default" disabled={true} hidden>
                  Move card...
                </option>
                {columns
                  .filter((column) => column.id !== card.columnId)
                  .map((column) => (
                    <option key={column.id} value={column.id}>
                      {column.name}
                    </option>
                  ))}
              </select>
            )}

            <button onClick={() => setEditingCard(true)}>Edit</button>
            <button
              onClick={() => {
                removeCard(card.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
