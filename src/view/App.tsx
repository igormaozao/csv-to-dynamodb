import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-tomorrow";
import "./App.scss";
import { convertCsvToDynamoObjects, extractHeaderData } from "../helper/CsvParser";
import convertAndDownloadFile from "../helper/JsonDownloader";

function App() {
  const [tableName, setTableName] = useState("");
  const [csvText, setCsvText] = useState("");
  const [jsonConverted, setJsonConverted] = useState("");

  function convertText() {
    const lines = csvText.split("\n");
    if (lines.length === 0 || tableName.trim().length === 0) return;
    
    // First line must be Headers data, Ie: "Pk (S)", "Sk (S)", "Name (S)", "Amount (N)"
    let headersArray = extractHeaderData(lines[0])
    let convertedText = convertCsvToDynamoObjects(lines, tableName, headersArray)

    setJsonConverted(convertedText)
  }

  function downloadJsonFile() {
    if (jsonConverted.trim().length === 0) return;

    convertAndDownloadFile(tableName, jsonConverted)
  }

  return (
    <div className="App">
      <header>Convert CSV to DynamoDB JSON</header>
      
      <div className="editor-boxes">
        <div className="left-editor">
          <div className="configs">
            <input type="text" placeholder="Table Name" 
              value={tableName} 
              onChange={(e) => setTableName(e.target.value)}
            />
            <button onClick={convertText}>Convert CSV</button>
          </div>
          <textarea
            value={csvText}
            onChange={(e) => setCsvText(e.target.value)}
          />
        </div>
        <div className="right-editor">
          <div className="configs">
            <button onClick={downloadJsonFile}>Download JSON</button>
          </div>
          <AceEditor
            mode="json"
            theme="tomorrow"
            readOnly={true}
            value={jsonConverted}
            width={"100%"}
            height={"100%"}
            className={"aceEditorCustom"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
