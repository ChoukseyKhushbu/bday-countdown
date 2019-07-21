const addDate = document.forms['add-date'];
        
addDate.addEventListener('submit', function (e) {

    e.preventDefault();
    
    // Get the name:
    var name=addDate.querySelector('input[type="text"]').value;
    
    // Set the name:
    var gett=document.getElementById("bdy_per");
    gett.innerHTML=name+"'s birthday";

    // Get the date:
    var mydte = new Date(addDate.querySelector('input[type="date"]').value);


    // Start the interval:
    startTimer();
    



    var formatdDte = (mydte.getMonth() + 1) + "/" + mydte.getDate() + "/" + mydte.getFullYear();

    var todayDate = Date.now();//mm-dd-yyyy

    // var bdDate = new Date(formatdDte).getTime();
    var bdDate = new Date(formatdDte).getTime();

    if (bdDate - todayDate > 0) {


        var sec = ~~((bdDate - todayDate) / 1000);

        var seconds = sec % 60;
        var min = ~~(sec / 60) % 60;
        var hr = ~~(sec / 3600) % 24;
        var days = ~~(sec / (3600 * 24));


        var s = document.getElementById("secnd");
        s.innerHTML = seconds;
        var m = document.getElementById("minutes");
        m.innerHTML = min;
        var h = document.getElementById("hours");
        h.innerHTML = hr;
        var d = document.getElementById("day");
        d.innerHTML = days;

        var secInterval = setInterval(updateSec, 1000);


        // function updateSec() {
        //     --seconds;
        //     s.innerHTML = seconds;

        //     if (min == 0 && hr == 0 && days == 0) {
        //         if (seconds == 0) {
        //             end();
        //         }
        //     }
        //     if (seconds == 1) {
        //         seconds = 60;
        //         setTimeout(updateMin, 1000);
        //     }
        // }
        // function updateMin() {
        //     --min;
        //     m.innerHTML = min;
        //     if (hr == 0 && days == 0) {
        //         if (min == 0)
        //             m.innerHTML = 00;
        //     }
        //     if (min == 1) {
        //         min = 60;
        //         setTimeout(updateHr, 1000 * 60);
        //     }
        // }
        // function updateHr() {
        //     --hr;
        //     h.innerHTML = hr;
        //     if (days == 0) {
        //         if (hr == 0)
        //             h.innerHTML = 00;
        //     }
        //     if (hr == 1) {
        //         hr = 24;
        //         setTimeout(updateDay, 1000 * 3600);
        //     }
        // }
        // function updateDay() {
        //     --days;
        //     d.innerHTML = days;
        //     if (days == 0) {
        //         d.innerHTML = 00;
        //     }
        // }

        // function end() {
        //     clearInterval(secInterval);
        // }
    }
    else {
        alert("Oops! birthday's gone!\nEnter next birthday");
    }
    
    document.getElementById("btn").disabled=true;
    
});

function startTimer() {
    var interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    
}

function endTimer() {
    clearInterval(secInterval);

}

