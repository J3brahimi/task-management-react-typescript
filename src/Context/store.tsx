import { createContext } from "react";

export const initialState = {
  columns: [],
  cards: [],
};

const Context = createContext(initialState);

export default Context;
