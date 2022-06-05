// Types
import { ColumnType, CardType, ContextInitialStateType } from "../Model";
import { ActionTypes } from "../Model";
import {
  ADD_COLUMN,
  EDIT_COLUMN,
  REMOVE_COLUMN,
  ADD_CARD,
  EDIT_CARD,
  REMOVE_CARD,
} from "./type";

// Utils
import { createId } from "../Utils/helper-functions";

const reducer = (state: ContextInitialStateType, action: ActionTypes) => {
  switch (action.type) {
    case ADD_COLUMN:
      const newColumnItem = {
        id: createId(),
        name: action.payload,
      };
      return {
        ...state,
        columns: [...state.columns, newColumnItem],
      };
    case EDIT_COLUMN:
      return {
        ...state,
        columns: state.columns.map((column: ColumnType) =>
          column.id === action.payload.id
            ? { ...column, name: action.payload.name }
            : column
        ),
      };
    case REMOVE_COLUMN:
      return {
        ...state,
        columns: state.columns.filter(
          (column: ColumnType) => column.id !== action.payload
        ),
        cards: state.cards.filter(
          (card: CardType) => card.columnId !== action.payload
        ),
      };
    case ADD_CARD:
      const newCardItem = {
        id: createId(),
        title: action.payload.title,
        description: action.payload.description,
        columnId: action.payload.columnId,
      };
      return {
        ...state,
        cards: [...state.cards, newCardItem],
      };
    case EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map((card: CardType) =>
          card.id === action.payload.id
            ? {
                ...card,
                title: action.payload.title,
                description: action.payload.description,
                columnId: action.payload.columnId,
              }
            : card
        ),
      };
    case REMOVE_CARD:
      return {
        ...state,
        cards: state.cards.filter(
          (card: CardType) => card.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
