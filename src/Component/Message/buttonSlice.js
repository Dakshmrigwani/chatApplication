import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clicked: false
};

export const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    setClicked: (state, action) => {
      state.clicked = action.payload;
    }
  }
});

export const { setClicked } = buttonSlice.actions;
export const selectClicked = state => state.button.clicked;

export default buttonSlice.reducer;
