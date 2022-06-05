import {
  ADD_COLUMN,
  EDIT_COLUMN,
  REMOVE_COLUMN,
  ADD_CARD,
  EDIT_CARD,
  REMOVE_CARD,
} from "../Context/type";

export type CardType = {
  id: number;
  columnId: number;
  title: string;
  description: string;
};

export type ColumnType = {
  id: number;
  name: string;
};

export type ActionTypes =
  | { type: typeof ADD_COLUMN; payload: string }
  | {
      type: typeof EDIT_COLUMN;
      payload: { id: number; name: string };
    }
  | { type: typeof REMOVE_COLUMN; payload: number }
  | {
      type: typeof ADD_CARD;
      payload: {
        title: string;
        description: string;
        columnId: number;
      };
    }
  | {
      type: typeof EDIT_CARD;
      payload: {
        id: number;
        title: string;
        description: string;
        columnId: number;
      };
    }
  | { type: typeof REMOVE_CARD; payload: number };

export type ContextInitialStateType = {
  columns: ColumnType[];
  cards: CardType[];
  addColumn: (name: string) => void;
  editColumn: ({ id, name }: { id: number; name: string }) => void;
  removeColumn: (id: number) => void;
  addCard: ({
    title,
    description,
    columnId,
  }: {
    title: string;
    description: string;
    columnId: number;
  }) => void;
  editCard: ({
    id,
    title,
    description,
    columnId,
  }: {
    id: number;
    title: string;
    description: string;
    columnId: number;
  }) => void;
  removeCard: (id: number) => void;
};
