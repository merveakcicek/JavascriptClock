//Saat bölümü
function showTime() {
    var date = new Date(); 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour); 
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("myClock").innerText = hour + " : " + min + " : " + sec; 
      var time = setTimeout(function(){ showTime() }, 1000); 
}
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  showTime();

let userName = prompt("Lütfen Adınızı Giriniz") 
let myName = document.querySelector('#myName') 
myName.innerHTML = `${userName}` 