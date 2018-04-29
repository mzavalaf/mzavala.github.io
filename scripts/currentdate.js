var month = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var wday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var f=new Date();
document.write(wday[f.getDay()] + ", " + f.getDate() + " " + month[f.getMonth()] + " " + f.getFullYear());
