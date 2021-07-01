import React from "react";
import ReactDOM from "react-dom";
import FileViewer from "react-file-viewer";

import "./styles.css";

// const file = "./AgileDefinitions.docx";
const file =
  "https://cats-server-dev-route-cats-dev.apps.kw.projectinnovate.sg/v1/uploads/resumes/files/1623291640620_resume4.pdf";
const type = "pdf";

const onError = (e) => {
  console.log(e, "error in file-viewer");
};

const props = {
  allowFullScreen: true,
  src:
    "https://cats-server-dev-route-cats-dev.apps.kw.projectinnovate.sg/v1/uploads/resumes/files/1623291640620_resume4.pdf"
};

function App() {
  return (
    <div className="App">
      <h1>React File Viewer Demo</h1>
      <h2>Displaying file with extension {type}</h2>
      <FileViewer
        className="file-viewer-style"
        fileType={type}
        filePath={file}
        onError={onError}
      />
    </div>
  );
}

const rootElement = document.getElementById("fileviewer");
ReactDOM.render(<App />, root);
