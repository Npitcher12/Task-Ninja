
//showNotification() is for testing purposes of the javascript Notification API but will not be used in acutal website, just have it in here while I work on it
function showNotification(){
    const notification = new Notification("New notification", {
        body: "Hey mate, how are you"
    });
}
console.log(Notification.permission); //default, granted, denied

if(Notification.permission === "granted"){
    showNotification();
}else if(Notification.permission !== "denied"){
    Notification.requestPermission().then(permission => {
        if(permission === "granted"){
            showNotification();
        }
    });
}