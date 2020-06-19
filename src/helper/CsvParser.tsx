import Header from "../model/Header";
import { Put, DynamoRoot } from "../model/DynamoPut";

export function convertCsvToDynamoObjects(
  lines: string[],
  tableName: string,
  headers: Header[]) : string {

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
  
  return JSON.stringify(dynamoObj, null, '\t')
}

export function extractHeaderData(
  headersData: string) : Header[] {
  
  const regex = /([a-zA-Z]*)\s\((\w)\)/g;

  let headers: Header[] = []
  let regexMatch;
  while ((regexMatch = regex.exec(headersData)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (regexMatch.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    let header: Header = { name: regexMatch[1], type: regexMatch[2]}
    headers.push(header);
  }
  return headers;
}