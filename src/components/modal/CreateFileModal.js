// import { useDispatch, useSelector } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeFileModal } from "../../slices/fileModalSlice";
import "./index.css";
import { createFile } from "../../slices/fileSlice";
import { addFileToFolder } from "../../slices/folderSlice";
import uuid from "react-uuid";

const CreateFileModal = () => {
  const { fileModal } = useSelector((state) => state.fileModal);
  const file = useSelector((state) => state.file);
  const { folders } = useSelector((state) => state.folder);
  const dispatch = useDispatch();
  const [fileNames, setFileNames] = useState({
    id: "",
    title: "",
    content: "",
  });

  const iptHandler = (event) => {
    const { id, value } = event.target;
    setFileNames((prev) => ({ ...prev, [id]: value }));
  };
  const validateFileName = () => {
    if (fileNames.title === "") {
      alert("Give name to your file");
    } else {
      return true;
    }
  };

  const clickHandler = (event) => {
    const obj = { ...fileNames, id: uuid() };
    event.preventDefault();
    if (validateFileName()) {
      dispatch(addFileToFolder(obj));
      dispatch(createFile(obj));
      dispatch(closeFileModal());
    }
    setFileNames({ id: "", title: "", content: "" });
  };

  return (
    <div
      className={`${
        fileModal ? "flex" : "hidden"
      } fixed justify-center items-center modal`}
    >
      <div className="w-1/4 bg-white p-3 flex flex-col rounded-lg sm:w-full sm:mx-2 md:w-3/4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">New File</h1>
          <button
            className="text-lg cursor-pointer"
            onClick={() => dispatch(closeFileModal())}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className="mt-8 w-full">
          <input
            type="text"
            placeholder="Enter File Name"
            className="w-full p-2 outline-none border-2 rounded-md"
            id="title"
            value={fileNames.title}
            onChange={iptHandler}
          />
        </div>

        <div>
          <button
            className="bg-gray-500 text-white p-1 mt-8 px-4 text-md rounded-md cursor-pointer"
            onClick={clickHandler}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export { CreateFileModal };
