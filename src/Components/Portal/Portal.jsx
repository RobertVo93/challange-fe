import React, { useState } from "react";
import {
  generateRandomObjectsFile,
  downloadFile,
} from "../../Services/file.service";
import LoadingPage from "../loading";

const PortalPage = (props) => {
  const [alphaStrings, setAlphaStrings] = useState([]);
  const [realNumbers, setRealNumbers] = useState([]);
  const [integers, setIntegers] = useState([]);
  const [alphaNumerics, setAlphaNumerics] = useState([]);
  const [linkFile, setLinkFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Action on generate file
   */
  const onGenerateFile = () => {
    setLoading(true);
    generateRandomObjectsFile().then((response) => {
      if (response.data) {
        setLoading(false);
        setLinkFile(`${window.location.href}${response.data.href}`);
        setFileName(response.data.name);
        setRealNumbers(response.data.realNumberList);
        setAlphaStrings(response.data.alphabeticalList);
        setIntegers(response.data.integerList);
        setAlphaNumerics(response.data.alphaNumericList);
      }
    });
  };

  /**
   * Action on export file
   */
  const onExportFile = () => {
    setLoading(true);
    downloadFile(fileName).then((response) => {
      setLoading(false);
      var link = document.createElement("a");
      link.href = "data:text/plain;charset=UTF-8," + escape(response);
      link.download = fileName;
      link.click();
    });
  };

  return (
    <div>
      <LoadingPage loading={loading} />
      <div className="row">
        <button onClick={onGenerateFile}>Generate</button>
      </div>
      <div className="row">
        <label>Link: </label>
        <a href={linkFile} target="_blank">
          {linkFile}
        </a>
      </div>
      <div className="row">
        <button onClick={onExportFile}>Report</button>
      </div>
      <div className="row">
        <div>
          <label>Alphabetical strings: {alphaStrings.length}</label>
        </div>
        <div>
          <label>Real numbers: {realNumbers.length}</label>
        </div>
        <div>
          <label>Integers: {integers.length}</label>
        </div>
        <div>
          <label>Alphanumerics: {alphaNumerics.length}</label>
        </div>
      </div>
    </div>
  );
};
export default PortalPage;
