var dayOfWeek = new Array();
dayOfWeek[0] = "Sunday";
dayOfWeek[1] = "Monday";
dayOfWeek[2] = "Tuesday";
dayOfWeek[3] = "Wednesday";
dayOfWeek[4] = "Thursday";
dayOfWeek[5] = "Friday";
dayOfWeek[6] = "Saturday";
var myDate = new Date();

var weekDay = dayOfWeek[myDate.getDay()];
document.getElementById("day").innerHTML = weekDay;

var url = 'https://unsplash.it/' + window.innerWidth + '/' + window.innerHeight + '/?random';
var body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = 'url(' + url + ')';

function formatAMPM() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? '<span class="ampm">pm</span>' : '<span class="ampm">am</span>';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}

document.getElementById("time").innerHTML = formatAMPM();