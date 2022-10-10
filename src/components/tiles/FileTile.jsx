import { useNavigate } from "react-router-dom";

const FileTile = ({ id, title }) => {
  const navigate = useNavigate();

  const navigateHandler = (id) => {
    navigate(`file/${id}`)
  }

  return (
    <div
      className="w-44 shadow-md bg-white p-3 flex flex-col rounded-lg border cursor-pointer"
      key={id}
      onClick={() => navigateHandler(id)}
    >
      <div className="text-xl flex gap-2 items-center">
        <i className="bx bx-file"></i>
        <p className="text-sm">{title.toUpperCase()}</p>
      </div>
    </div>
  );
};

export { FileTile };
