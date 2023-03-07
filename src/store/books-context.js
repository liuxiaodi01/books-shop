import { createContext } from "react";
const booksContext = createContext({
  mealsList: [],
  addOrSubHandler: () => {},
});
export default booksContext;
