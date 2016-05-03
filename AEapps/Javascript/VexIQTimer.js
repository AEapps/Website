var TimerVariable;
var TimeTotal = 60;
var TimePassed = 0;
var TotalLapAmount = 1;
var TotalTapAmount = 0;

var ChangeControllerSound = new Audio('IQTimerSounds/ChangeControllerSound.mp3');
var StartGameSound = new Audio('IQTimerSounds/StartGameSound.mp3');
var EndGameSound = new Audio('IQTimerSounds/EndGameSound.mp3');
window.addEventListener("keypress", KeyBoardEvent, false);

function KeyBoardEvent(e) {
    if (e.keyCode == "114" && TimePassed > 0) {
        StartTimer();
    }

    if (e.keyCode == "32") {
        if (TimePassed <= 0) {
            StartTimer();
        }

        else {
            StopTimer();
        }
    }
}

function UpdateTimeTotal() {
    TotalTapAmount = 0
    TimePassed = 0;
    clearInterval(TimerVariable);
    document.getElementById("LapList").innerHTML = "Lap List:";
    TimeTotal = document.getElementById("TimeValue").value;
    ResetTimeLabel();
}

function ResetTimeLabel() {
    document.getElementById("TimerText").innerHTML = "";
    if (TimeTotal >= 60) {
        document.getElementById("TimerText").innerHTML += TimeTotal / 60 + ":00";
    }
    else {
        document.getElementById("TimerText").innerHTML = "0:";
        document.getElementById("TimerText").innerHTML += TimeTotal;
    }

    ChangeControllerSound = new Audio('IQTimerSounds/ChangeControllerSound.mp3');
    StartGameSound = new Audio('IQTimerSounds/StartGameSound.mp3');
    EndGameSound = new Audio('IQTimerSounds/EndGameSound.mp3');
}

function LapTimer() {
    if (TimePassed > 0 && TimePassed < 60 && document.getElementById("PauseButton").innerHTML != "Resume") {
        document.getElementById("LapList").innerHTML += "<br />";
        document.getElementById("LapList").innerHTML += TotalLapAmount;
        document.getElementById("LapList").innerHTML += ". Time: ";
        document.getElementById("LapList").innerHTML += TimePassed;
        document.getElementById("LapList").innerHTML += "sec.";
        TotalLapAmount++;
    }
}

function PageLoad() {
    ChangeControllerSound.load();
    StartGameSound.load();
    EndGameSound.load();
    ResetTimeLabel();
}

function Timer() {
    TimePassed++;
    var TimeRemaining = TimeTotal - TimePassed;
    if (TimeRemaining >= 0) {
        if (TimeRemaining < 60 && TimeRemaining >= 10) {
            document.getElementById("TimerText").innerHTML = "0:";
            document.getElementById("TimerText").innerHTML += TimeRemaining;
        }
        else {
            document.getElementById("TimerText").innerHTML = "0:0";
            document.getElementById("TimerText").innerHTML += TimeRemaining;
        }
    }

    if (TimeRemaining == 0) {
        EndGameSound.play();
    }

    if (TimeRemaining == 35 || TimeRemaining == 25) {
        ChangeControllerSound.play();
    }

    if (TimeRemaining < 0) {
        if (Math.abs(TimeRemaining) >= 10) {
            document.getElementById("TimerText").innerHTML = "<span style='color:#ff0000;'> -0:" + Math.abs(TimeRemaining);
        }
        else {
            document.getElementById("TimerText").innerHTML = "<span style='color:#ff0000;'> -0:0" + Math.abs(TimeRemaining);
        }
        document.getElementById("TimerText").innerHTML += "</span>";
    }

    if (TimeRemaining == -10) {
        clearInterval(TimerVariable);
    }
}

function StopTimer() {
    if (TimePassed < TimeTotal + 10) {
        if (TotalTapAmount == 1) {
            if (document.getElementById("PauseButton").innerHTML == "Resume") {
                TimerVariable = setInterval(function () { Timer() }, 1000);
                document.getElementById("PauseButton").innerHTML = "<span style='color: #ff0000;'>Pause</span>";
            }

            else {
                clearInterval(TimerVariable);
                document.getElementById("PauseButton").innerHTML = "Resume";
            }
        }
    }
}

function StartTimer() {
    TotalLapAmount = 1;
    TotalTapAmount = 1;
    clearInterval(TimerVariable);
    document.getElementById("LapList").innerHTML = "Lap List:";
    document.getElementById("PauseButton").innerHTML = "<span style='color: #ff0000;'>Pause</span>";

    if (TimePassed <= 0) {
        TimerVariable = setInterval(function () { Timer() }, 1000);
        StartGameSound.play();
    }
    else {
        TimePassed = 0;
        TimeRemaining = 60;
        TotalTapAmount = 0;
        clearInterval(TimerVariable);

        ResetTimeLabel();
    }
}