import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = {
  folders: [
    { id: uuid(), folderName: "desktop", files: [] },
  ],
};

const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    createFolder: (state, action) => {
      state.folders.push(action.payload);
    },
    addFileToFolder: (state, action) => {
      state.folders[0].files.push(action.payload);
    },
  },
});

export const { createFolder, addFileToFolder } = folderSlice.actions;
export default folderSlice.reducer;
