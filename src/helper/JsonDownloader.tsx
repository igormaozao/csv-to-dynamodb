export default function convertAndDownloadFile(
  fileName: string, 
  content: string) : void {

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `${fileName}.json`);
    element.style.display = 'none';
    
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}