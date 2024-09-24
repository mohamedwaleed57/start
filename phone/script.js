let permission = Notification.permission;

if(permission === "granted"){
   showNotification();
} else if(permission === "default"){
   requestAndShowPermission();
} else {
  alert("Use normal alert");
}

function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            showNotification();
        }
    });
}
function showNotification() {
  //  if(document.visibilityState === "visible") {
  //      return;
  //  }
   let title = "I love Educative.io";
   let icon = 'body.jpg'; //this is a large image may take more time to show notifiction, replace with small size icon
   let body = "gf";

   let notification = new Notification(title, { body, icon });

   notification.onclick = () => {
          notification.close();
          window.parent.focus();
   }
   
}