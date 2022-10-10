import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folderModal: false,
};

const folderModalSlice = createSlice({
  name: "folderModal",
  initialState,
  reducers: {
    openFolderModal: (state) => {
      state.folderModal = true;
    },
    closeFolderModal: (state) => {
      state.folderModal = false;
    },
  },
});

export const { openFolderModal, closeFolderModal } = folderModalSlice.actions;
export default folderModalSlice.reducer;
