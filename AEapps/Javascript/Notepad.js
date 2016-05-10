function DownloadText(TextBox) {
    var CurrentDate = new Date();
    var Day = CurrentDate.getDate();
    var Month = CurrentDate.getMonth() + 1;
    var Year = CurrentDate.getFullYear();
    var DateText = Day + "/" + Month + "/" + Year;

    SaveTextAsFile("Note", TextBox.value);
}

function SaveTextAsFile(fileNameToSaveAs, textToWrite) {
    var ie = navigator.userAgent.match(/MSIE\s([\d.]+)/),
        ie11 = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/),
        ieEDGE = navigator.userAgent.match(/Edge/g),
        ieVer = (ie ? ie[1] : (ie11 ? 11 : (ieEDGE ? 12 : -1)));

    if (ie && ieVer < 10) {
        //Internet Explorer Version Is Less Than 10
        alert("Cannot Download On Internet Explorer Version Less Than 10.")
        return;
    }

    var textFileAsBlob = new Blob([textToWrite], {type: 'text/plain'});

    if (ieVer > -1) {
        window.navigator.msSaveBlob(textFileAsBlob, fileNameToSaveAs);

    }

    else {
        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = function (e) { document.body.removeChild(e.target); };
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function NotepadKeyEvents(textArea, event) {
    //Allow CTRL+S
    if (event.keyCode == 83 && event.ctrlKey) {
        event.preventDefault();
        DownloadText(textArea);
    }
}