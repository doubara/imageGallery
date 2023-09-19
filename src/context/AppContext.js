// AppContext.js
import { createContext } from "react";

const AppContext = createContext({user: {}, error: null, isLoading: false}); // You can provide an initial value here if needed.

export default AppContext;