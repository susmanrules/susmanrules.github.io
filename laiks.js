laikadisplejs = document.getElementById("laiks")

function refreshTime() 
{
  dateString = new Date().toLocaleString("lv-LV", {timeZone: "Europe/Riga"})
  laikadisplejs.innerHTML = dateString;
}
refreshTime()
setInterval(refreshTime, 1000)