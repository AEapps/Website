var StartYear = 2013;
var ThisYear = new Date().getFullYear();

function LoadUpValues() {
    //Get Progress Bars
    var ProgressBars = document.getElementsByClassName("tox-progress");

    //Write Out Expirience
    var TotalExirience = ThisYear - StartYear;
    var ExpirienceLBL = document.getElementById("ExpirienceLBL");
    ExpirienceLBL.innerText = TotalExirience + " Years Expirience Among Many Languages";

    //Set Progress Bar Values
    for (var i = 0; i < ProgressBars.length; i++) {

        var YearsActive = (ThisYear - ProgressBars[i].getAttribute("introyear"));
        var TotalFilled = (YearsActive / TotalExirience) * 100;

        ProgressBars[i].setAttribute("data-progress", TotalFilled);
    }
}

function GetExpirencePercentage(IntroYear)
{
    ThisYear - IntroYear;
}