// import { useDispatch, useSelector } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { closeFolderModal } from "../../slices/folderModalSlice";
import { createFolder } from "../../slices/folderSlice";
import "./index.css";

const CreateFolderModal = () => {
  const { folderModal } = useSelector((state) => state.folderModal);
  const { folders } = useSelector((state) => state.folder);
  const [folderName, setFolderName] = useState("");
  const dispatch = useDispatch();

  const createFolderHandler = () => {
    dispatch(createFolder({ ...folders, id: uuid(), folderName: folderName }));
    dispatch(closeFolderModal())
    setFolderName("");
  };

  return (
    <div
      className={`${
        folderModal ? "flex" : "hidden"
      } fixed justify-center items-center modal`}
    >
      <div className="w-1/4 bg-white p-3 flex flex-col rounded-lg sm:w-full sm:mx-2 md:w-3/4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">New Folder</h1>
          <button
            className="text-lg cursor-pointer"
            onClick={() => dispatch(closeFolderModal())}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className="mt-8 w-full">
          <input
            type="text"
            placeholder="Enter Folder Name"
            className="w-full p-2 outline-none border-2 rounded-md"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
        </div>

        <div>
          <button
            onClick={createFolderHandler}
            className="bg-gray-500 text-white p-1 mt-8 px-4 text-md rounded-md cursor-pointer"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export { CreateFolderModal };
