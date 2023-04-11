import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./messageSlice";
import buttonReducer from "./buttonSlice";
import profileReducer from "./profileSlice";

export default configureStore({
  reducer: {
    message: messageReducer,
    button: buttonReducer,
    profile: profileReducer,
  },
});
