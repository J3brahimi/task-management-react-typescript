import React, { useReducer } from "react";

// Context store and reducer
import Context, { initialState } from "./store";
import reducer from "./reducer";

// Types
import { ADD_COLUMN, EDIT_COLUMN, REMOVE_COLUMN } from "./type";
import { ContextInitialStateType } from "../Model";

type Props = {
  children: React.ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value: ContextInitialStateType = {
    columns: state.columns,
    cards: state.cards,
    addColumn: (name) => {
      dispatch({ type: ADD_COLUMN, payload: name });
    },
    editColumn: ({ id, name }) => {
      dispatch({ type: EDIT_COLUMN, payload: { id, name } });
    },
    removeColumn: (id) => {
      dispatch({ type: REMOVE_COLUMN, payload: id });
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
