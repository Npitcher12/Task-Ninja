//following https://www.youtube.com/watch?v=Jncoj-Gvh9o 
//showNotification() is for testing purposes of the javascript Notification API but will not be used in acutal website, just have it in here while I work on it
function showNotification(){
    const notification = new Notification("New notification", {
        body: "Hey mate, how are you"
    });
}

function showHam_BfastNotification(){ //For when ham opens for Breakfast
    const notification = new Notification("HAM OPEN", { 
        body: "HAM is open for breakfast!"
    });
}

function showHam_brunchNotification(){ //for when ham opens for brunch
    const notification = new Notification("HAM OPEN", { 
        body: "HAM is open for brunch!"
    });
}

function showHam_lunchNotification(){ //for when ham opens for lunch
    const notification = new Notification("HAM OPEN", { 
        body: "HAM is open for lunch!"
    });
}

function showHam_dinnerNotification(){ //for when ham opens for dinner
    const notification = new Notification("HAM OPEN", { 
        body: "HAM is open for dinner!"
    });
}

function showWaterfrontNotification(){ //for when the waterfront opens
    const notification = new Notification("Waterfront OPEN", { //maybe this can open to the water front page when clicked
        body: "The Caples Waterfront is now open! Come kayak on the Bay :)"
    });
}

function showBreakNotification(){ //for when the user should take a break or walk
    const notification = new Notification("Take a break", { //add a fun image
        body: "Remember to take a break when working for long periods of time. Go on a walk and jog your brain"
    });
}

function showMotivationMeme(){
    const notification = new Notification("Motivation", { //add a fun image
        body: "*Incoming Motivation Meme*" //add motivation meme
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