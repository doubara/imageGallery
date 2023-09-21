// AppContext.js
import { createContext } from "react";

const AppContext = createContext({user: null, error: null, isLoading: false, displayImages: null, search: '',}); // You can provide an initial value here if needed.

export default AppContext;