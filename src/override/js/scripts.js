// Background Refresh (Images by unsplash.com)
var totalCount = 5;
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'images/background-'+num+'.jpg';


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

var hour = (myDate.getHours()<10?'0':'') + myDate.getHours();
document.getElementById("hour").innerHTML = hour;

var mins = (myDate.getMinutes()<10?'0':'') + myDate.getMinutes();
document.getElementById("minutes").innerHTML = mins;