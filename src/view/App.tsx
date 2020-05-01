import React, { useState } from "react";
import AceEditor from "react-ace";
import Header from "../model/Header";
import { Put, DynamoRoot } from "../model/DynamoPut";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-tomorrow";
import "./App.scss";

function App() {
  const [tableName, setTableName] = useState("");
  const [csvText, setCsvText] = useState("");
  const [jsonConverted, setJsonConverted] = useState("");
  const [headers, setHeaders] = useState<Header[]>([]);

  function convertText() {
    const lines = csvText.split("\n");
    if (lines.length === 0 || tableName.trim().length === 0) return;

    extractHeaderData(lines[0]);

    let dynamoObj: DynamoRoot[] = []

    const data = lines.slice(1);
    data.forEach((d, i) => {
      // Regex: Split all commas, ignoring the ones inside strings
      const regex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/g;
      const lineData = d.split(regex);
      let put: Put = { Item: {}, TableName: tableName}
      lineData.forEach((l, index) => {
        
        const value = l.trim() ? JSON.parse(l).trim() : ''
        if (value.length === 0) return;
        
        const header = headers[index]
        put.Item[header.name] = {[header.type]: value}
      });
      
      if(Object.keys(put.Item).length > 0)
        dynamoObj[i] = { Put: put }
    });
    
    setJsonConverted(JSON.stringify(dynamoObj, null, '\t'))
  }

  function extractHeaderData(headerData: string) {
    const regex = /([a-zA-Z]*)\s\((\w)\)/g;

    let regexMatch;
    while ((regexMatch = regex.exec(headerData)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (regexMatch.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      let header: Header = { name: regexMatch[1], type: regexMatch[2]}
      headers.push(header);
      setHeaders(headers);
    }
  }

  return (
    <div className="App">
      <header>Convert CSV to DynamoDB JSON</header>
      <div className="configs">
        <input type="text" placeholder="Table Name" 
          value={tableName} 
          onChange={(e) => setTableName(e.target.value)}
        />
        <button onClick={convertText}>Convert CSV</button>
      </div>
      <div className="editor-boxes">
        <div className="left-editor">
          <textarea
            value={csvText}
            onChange={(e) => setCsvText(e.target.value)}
          />
        </div>
        <div className="right-editor">
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
