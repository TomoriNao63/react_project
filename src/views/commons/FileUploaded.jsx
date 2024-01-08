import React, { useRef } from "react";
import { Link } from "react-router-dom";
import upLoader from "./css/upLoader.module.css";
const FileUploader = ({ onSelectedError, onSelectedSuccess }) => {
  const fileInput = useRef();
  const handlerFileInput = (e) => {
    const file = e.target.files[0];
    if (file.size > 2048000) onSelectedError({ error: "文件大小不能大于2MB" });
    else onSelectedSuccess(file);
  };

  return (
    <div className={upLoader.fileUpLoad}>
      <input
        ref={fileInput}
        type="file"
        onChange={handlerFileInput}
        className={upLoader.fileInput}
        accept="image/*"
      />
      <Link
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className={upLoader.imgLink}
      ></Link>
    </div>
  );
};

export default FileUploader;
