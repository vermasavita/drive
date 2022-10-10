import { configureStore } from "@reduxjs/toolkit";
import fileModalReducer from "../slices/fileModalSlice";
import folderModalReducer from "../slices/folderModalSlice";
import fileReducer from "../slices/fileSlice";
import folderReducer from "../slices/folderSlice";

export const store = configureStore({
  reducer: {
    fileModal: fileModalReducer,
    folderModal: folderModalReducer,
    file: fileReducer,
    folder: folderReducer
  },
});
