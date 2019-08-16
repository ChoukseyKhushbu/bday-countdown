const addDate = document.forms['add-date'];
        
addDate.addEventListener('submit', function (e) {

    e.preventDefault();
    
    // Get the name:
    var name=addDate.querySelector('input[type="text"]').value;
    
    // Set the name:
    var gett=document.getElementById("bdy_per");
    gett.innerHTML+=" "+name+"'s birthday!!";

    // Get the datefrom the user:
    var mydte = new Date(addDate.querySelector('input[type="date"]').value);
    

    //to convert that date into mm/dd/yy format
    var formatdDte = (mydte.getMonth() + 1) + "/" + mydte.getDate() + "/" + mydte.getFullYear();


    //to find time elapsed upto bdday date
    var bdDate = new Date(formatdDte).getTime();

    
    var secInterval = setInterval(updateSec, 1000);
    
    function updateSec(){
        
        //to get time elapsed since today's date and time
        var todayDate = Date.now();
       
        var timeleft=bdDate-todayDate;

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
        
        if(timeleft<0)
        {
            clearInterval(secInterval);
        }
    }


    document.getElementById("btn").disabled=true;

});

