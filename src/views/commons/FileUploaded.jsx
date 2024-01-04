import React, { useRef } from "react";
import upLoader from "./css/upLoader.module.css";
export default function FileUploader(onFileSelectSuccess, onFileSelectError) {
  const fileInput = useRef();

  const handlerFileInput = (e) => {
    const file = e.target.file[0];
    if (file.size > 10240)
      onFileSelectError({ error: "File size cannot exceed more than 10MB" });
    else onFileSelectSuccess(file);
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
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className={upLoader.fileSelect}
      >
        选择图片
      </button>
    </div>
  );
}
