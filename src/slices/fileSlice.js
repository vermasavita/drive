import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  title: "",
  content: "",
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    createFile: (state, action) => {
      state = action.payload
    },
  },
});


export const { createFile } = fileSlice.actions;
export default fileSlice.reducer;
