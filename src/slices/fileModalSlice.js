import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fileModal: false,
};

const fileModalSlice = createSlice({
  name: "fileModal",
  initialState,
  reducers: {
    openFileModal: (state) => {
      state.fileModal = true;
    },
    closeFileModal: (state) => {
      state.fileModal = false;
    },
  },
});

export const { openFileModal, closeFileModal } = fileModalSlice.actions;
export default fileModalSlice.reducer;
