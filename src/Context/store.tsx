import { createContext } from "react";
import { ContextInitialStateType } from "../Model";

export const initialState = {
  columns: [],
  cards: [],
  addColumn: () => {},
  editColumn: () => {},
  removeColumn: () => {},
};

const Context = createContext<ContextInitialStateType>(initialState);

export default Context;
