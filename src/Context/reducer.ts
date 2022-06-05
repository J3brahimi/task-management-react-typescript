// Types
import { ColumnType, CardType, ContextInitialStateType } from "../Model";
import { ActionTypes } from "../Model";
import { ADD_COLUMN, EDIT_COLUMN, REMOVE_COLUMN } from "./type";

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
    default:
      return state;
  }
};

export default reducer;
