function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let t = today.getDate();
    let mo = today.getUTCMonth();
    let y = today.getFullYear();
    mo += 1;
    let d = " year: " + y + " month: " + mo + " day: " + t + " Seconds: " + s + " Minutes: " + m + " Hours: " + h;
    document.getElementById('txt').innerHTML =  d;
    setTimeout(startTime, 1000);
  }