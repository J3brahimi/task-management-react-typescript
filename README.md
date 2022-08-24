## Run project

1.  Clone this repository
2.  Install dependencies with `yarn` or `npm install`
3.  Use `yarn start` or `npm start` to run project in development mode

## About project

In this project you have the ability to create unlimited columns, edit their name and even delete columns. You can add card to columns and feel free to edit, delete and move cards between columns.

- I used a combination of `Context` and `useReducer`, To manage state in this project.
- Each columns and cards data saved in `localStorage` so that it is not lost after the refresh
- A separate `layout` was created to be able to add headers, footers, etc. in the future
- Functions that are used in several files can be found at `Utils/helper-functions.ts`
- You can find all the types used in the project at `Model/index.ts`

* Styling is not the goal of this project

## Released as a real app

- Register and login for users
- Make UI much better
- Attach files and photos to cards
- Prioritize with due dates on cards
- Assign card to member
- Add reporting and analytics
- Allows the user to customize cards, and columns UI
