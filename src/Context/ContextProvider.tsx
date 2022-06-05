import React, { useReducer } from "react";
import Context, { initialState } from "./store";
import reducer from "./reducer";

type Props = {
  children: React.ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value: any = {
    columns: state.columns,
    cards: state.cards,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
