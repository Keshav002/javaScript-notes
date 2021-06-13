console.log('we will make clock');

function updateClock(){

    // Getting current date
    let currentTime = new Date();

    //Extracting Hour Minute and Second
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    //Pad 0 if minute and second less than 10
    currentMinute = (currentMinute<10?"0":"")+currentMinute;
    currentSecond = (currentSecond<10?"0":"")+currentSecond;

    currentHour = ((currentHour-12)>0?currentHour-12:currentHour);

    let timeOfDay = (currentHour<12)?"AM":"PM";
    
    let currentTimeStr = currentHour+":"+currentMinute+":"+currentSecond+" "+timeOfDay;

    document.getElementById("clock").innerHTML = currentTimeStr;
}