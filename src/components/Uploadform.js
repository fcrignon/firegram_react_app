import React, { useState } from "react";
import ProgresseBar from "./ProgresseBar";

const Uploadform = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    console.log("changed");
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a valid image file type (png or jpeg).");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler}></input>
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgresseBar file={file} setFile={setFile}></ProgresseBar>}
      </div>
    </form>
  );
};

export default Uploadform;
