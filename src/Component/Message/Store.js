import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./messageSlice";
import buttonReducer from "./buttonSlice";

export default configureStore({
  reducer: {
    message: messageReducer,
    button: buttonReducer,
  },
});
