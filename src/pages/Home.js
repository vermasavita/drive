import { useDispatch, useSelector } from "react-redux";
import { FileTile } from "../components/tiles/FileTile";
import { FolderTile } from "../components/tiles/FolderTile";
import { openFileModal } from "../slices/fileModalSlice";
import { openFolderModal } from "../slices/folderModalSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { folders } = useSelector((state) => state.folder);
  let desktopFiles = folders.find((item) => item.folderName === "desktop");
  let filterFolder = folders.filter((item) => item.folderName !== "desktop");

  return (
    <div className="w-screen h-screen">
      <header className="flex gap-6 justify-center mt-4">
        <button
          className="bg-blue-500 shadow-lg text-white p-2 px-4 text-md rounded-md cursor-pointer"
          onClick={() => dispatch(openFileModal())}
        >
          New File
        </button>
        <button
          className="bg-blue-500 shadow-lg text-white p-2 px-4 text-md rounded-md cursor-pointer"
          onClick={() => dispatch(openFolderModal())}
        >
          New Folder
        </button>
      </header>
        <main className="flex flex-col">
          <div className="flex gap-8 flex-wrap m-12 items-center justify-center sm:m-8">
            {desktopFiles?.files.map((item) => (
              <FileTile key={item.id} {...item} />
            ))}
          </div>
          <div className="flex gap-8 flex-wrap m-12 items-center justify-center sm:m-8">
            {filterFolder.map((item) => (
              <FolderTile key={item.id} {...item} />
            ))}
          </div>
        </main>
    </div>
  );
};

export { Home };
