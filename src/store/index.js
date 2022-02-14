import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    disable: false,
    reset: false,
  },
  reducers: {
    setFalse(state) {
      state.disable = false;
    },
    setTrue(state) {
      state.disable = true;
    },
    toggle(state) {
      state.reset = !state.reset;
    },
  },
});

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});
export default store;
export const uiActions = uiSlice.actions;
