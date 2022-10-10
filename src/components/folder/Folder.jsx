import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { openFileModal } from "../../slices/fileModalSlice";

const Folder = () => {
  const folderId = useParams();
  const { folders } = useSelector((state) => state.folder);
  const [folderName, setFolderName] = useState("");

  useEffect(() => {
    setFolderName(folders.find((item) => item.id === folderId.folderId));
  }, [folders, folderId]);

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Link className=" font-bold my-4 cursor-pointer" to="/">
        {"< "}Home
      </Link>
      <div className="w-3/4 h-64  rounded-md mt-8" key={folderName?.id}></div>
      <main className="flex flex-col">
        <div className="flex gap-8 flex-wrap m-12 items-center justify-center sm:m-8 text-lg">
          Folder is empty
        </div>
      </main>
    </div>
  );
};

export { Folder };
