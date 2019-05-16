var ThisYear = new Date().getFullYear();

function UpdateProgrammingLabels() {
    var HTMLLBL = document.getElementById("HTMLLBL");
    var JavaLBL = document.getElementById("JavaLBL");
    var CSharpLBL = document.getElementById("CSharpLBL");
    var CPlusPlusLBL = document.getElementById("CPlusPlusLBL");
    var JavascriptLBL = document.getElementById("JavascriptLBL");
    var labelArray = [HTMLLBL, JavaLBL, CSharpLBL, CPlusPlusLBL, JavascriptLBL];

    for (var i = 0; i < labelArray.length; i++) {
        var introYear = labelArray[i].getAttribute("introyear");
        var timeElapsed = ThisYear - introYear;

        labelArray[i].innerText = timeElapsed + " Years";
    }
};