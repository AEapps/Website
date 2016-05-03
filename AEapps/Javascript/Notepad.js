function DownloadText(TextBoxID) {
    var textToWrite = document.getElementById(TextBoxID).value;
    var TextFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
    var FileName = "Note.txt";

    var downloadLink = document.createElement("a");
    downloadLink.download = FileName;
    downloadLink.innerHTML = "Hidden Link";

    window.URL = window.URL || window.webkitURL;

    downloadLink.href = window.URL.createObjectURL(TextFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}