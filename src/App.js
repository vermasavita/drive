import "./App.css";
import { CreateFileModal } from "./components/modal/CreateFileModal";
import { CreateFolderModal } from "./components/modal/CreateFolderModal";
import { File } from "./components/file/File";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Folder } from "./components/folder/Folder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="file/:fileId" element={<File />} />
          <Route path=":folderId" element={<Folder />} />
        </Routes>
        <CreateFileModal />
        <CreateFolderModal />
      </BrowserRouter>
    </div>
  );
}

export default App;
