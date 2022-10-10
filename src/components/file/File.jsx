import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const File = () => {
  const fileId = useParams();
  const [fileData, setFileData] = useState({});
  const { folders } = useSelector((state) => state.folder);

  useEffect(() => {
    setFileData(folders[0]?.files?.find((item) => item.id === fileId.fileId));
  }, [folders, fileId]);

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Link className=" font-bold my-4 cursor-pointer" to="/">
        {"< "}Home
      </Link>
      <div className="w-3/4 h-64 border-2 rounded-md mt-8" key={fileData?.id}>
        <h1 className="text-2xl font-bold text-center mt-4">
          {fileData?.title}
        </h1>
        <p className="mt-4 px-4">File is Empty</p>
      </div>
    </div>
  );
};

export { File };
