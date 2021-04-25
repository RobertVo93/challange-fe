import React, { useEffect, useState } from "react";
import { downloadFile } from "../../Services/file.service";

const DownloadPage = (props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    let fileName = window.location.hash.split("/uploads/")[1];
    downloadFile(fileName).then((response) => {
      var link = document.createElement("a");
      link.href = "data:text/plain;charset=UTF-8," + escape(response);
      link.download = fileName;
      link.click();
      setContent(response);
    });
  }, []);

  return <div>{content}</div>;
};
export default DownloadPage;
