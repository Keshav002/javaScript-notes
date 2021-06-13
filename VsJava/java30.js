console.log("We are creating a Alarm clok");
const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click', setAlarm);
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
function ringBell(){
   audio.play();
}

function setAlarm(e){
    e.preventDefault();  //Prevent the dafault behaviour of button
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();
    let timeToAlarm = alarmDate-now
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing Now...");
           ringBell(); 
        }, timeToAlarm);
    }

}