import { createContext } from "react";
import { ContextInitialStateType } from "../Model";

export const initialState = {
  columns: [],
  cards: [],
  addColumn: () => {},
  editColumn: () => {},
  removeColumn: () => {},
  addCard: () => {},
  editCard: () => {},
  removeCard: () => {},
};

const Context = createContext<ContextInitialStateType>(initialState);

export default Context;
