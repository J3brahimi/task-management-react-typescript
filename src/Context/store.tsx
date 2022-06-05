import { createContext } from "react";
import { ColumnType, CardType, ContextInitialStateType } from "../Model";

// get columns and cards data from localStorage
const columnsFromLoaclStorage: ColumnType[] = JSON.parse(
  localStorage.getItem("columns") || ""
);
const cardsFromLoaclStorage: CardType[] = JSON.parse(
  localStorage.getItem("cards") || ""
);

export const initialState = {
  columns: columnsFromLoaclStorage || [],
  cards: cardsFromLoaclStorage || [],
  addColumn: () => {},
  editColumn: () => {},
  removeColumn: () => {},
  addCard: () => {},
  editCard: () => {},
  removeCard: () => {},
};

const Context = createContext<ContextInitialStateType>(initialState);

export default Context;
