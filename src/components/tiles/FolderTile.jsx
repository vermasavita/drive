import { useNavigate } from "react-router-dom";

const FolderTile = ({ id, folderName }) => {
  const navigate = useNavigate();
  const navigateHandler = (id) => {
    navigate(`${id}`);
  };

  return (
    <div
      className="w-44 shadow-md bg-white p-2 flex flex-col rounded-lg border cursor-pointer"
      key={id}
      onClick={() => navigateHandler(id)}
    >
      <div className="text-xl flex gap-2 items-center">
        <i className="bx bxs-folder"></i>
        <p className="text-sm">{folderName}</p>
      </div>
    </div>
  );
};

export { FolderTile };
