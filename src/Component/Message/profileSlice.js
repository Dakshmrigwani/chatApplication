import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: "",
  text: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
      state.text = action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export const selectProfile = (state) => state.profile.profile;
export const selectText = (state) => state.profile.text;

export default profileSlice.reducer;
