//following https://www.youtube.com/watch?v=Jncoj-Gvh9o 
//showNotification() is for testing purposes of the javascript Notification API but will not be used in acutal website, just have it in here while I work on it
//Used https://www.yourtango.com/2018320275/30-motivational-quotes-memes-when-you-need-inspiration

function showNotification(){
    //paste the body of any of the notifications here to immiediately/test see what it does

}

function showHam_BfastNotification(){ //For when ham opens for Breakfast
    const notification = new Notification("HAM OPEN", { 
        body: "HAM is open for breakfast!",
        icon: "/images/ham.png"
    });
}

function showHam_Bfast_closing(){ //For when ham closes for Breakfast
    const notification = new Notification("HAM Closing Soon", { 
        body: "HAM breakfast is ending in 30 minutes!",
        icon: "/images/ham.png"
    });
}

function showHam_brunchNotification(){ //for when ham opens for brunch
    const notification = new Notification("HAM OPEN", { 
        body: "HAM is open for brunch!",
        icon: "/images/ham.png"
    });
}

function showHam_brunch_closing(){ //For when ham closes for brunch
    const notification = new Notification("HAM Closing Soon", { 
        body: "HAM brunch is ending in 30 minutes!",
        icon: "/images/ham.png"
    });
}
function showHam_lunchNotification(){ //for when ham opens for lunch
    const notification = new Notification("HAM OPEN", { 
        body: "HAM is open for lunch!",
        icon: "/images/ham.png"
    });
}

function showHam_lunch_closing(){ //For when ham closes for lunch
    const notification = new Notification("HAM Closing Soon", { 
        body: "HAM lunch is ending in 30 minutes!",
        icon: "/images/ham.png"
    });
}

function showHam_dinnerNotification(){ //for when ham opens for dinner
    const notification = new Notification("HAM OPEN", { 
        body: "HAM is open for dinner!",
        icon: "/images/ham.png"
    });
}

function showHam_dinner_closing(){ //For when ham closes for dinner
    const notification = new Notification("HAM Closing Soon", { 
        body: "HAM dinner is ending in 30 minutes!",
        icon: "/images/ham.png"
    });
}

function showWaterfrontNotification(){ //for when the waterfront opens
    const notification = new Notification("Waterfront OPEN", { 
        body: "The Caples Waterfront is now open! Come kayak on the Bay :)",
        icon: "/images/waterfront.png"
    });

    notification.onclick = (e) => { //when you click notification - it takes you to the waterfront website
        window.location.href = "https://www.ncf.edu/life-at-new/health-well-being/campusrec/waterfront-program/"
    };
}

function showBreakNotification(){ //for when the user should take a break or walk
    const notification = new Notification("Take a break", { 
        body: "Remember to take a break when working for long periods of time. Go on a walk and jog your brain",
        icon: "/images/break.png"
    });
}

function showMonday_MotivationMeme(){
    const notification = new Notification("Motivation Monday", { //add a fun image
        body: "*Incoming Motivation Meme*",
        image: "/images/monMotivation.png"
    });  
    
    notification.onclick = (e) => { //when you click notification - it takes you to the image
        window.location.href = "/images/monMotivation.png";
    };
}

function showTuesday_MotivationMeme(){
    const notification = new Notification("Motivation Tuesday", { //add a fun image
        body: "*Incoming Motivation Meme*",
        image: "/images/tuesMotivation.png"
    }); 

    notification.onclick = (e) => { //when you click notification - it takes you to the image
        window.location.href = "/images/tuesMotivation.png";
    };   
}

function showWednesday_MotivationMeme(){
    const notification = new Notification("Motivation Wednesday", { //add a fun image
        body: "*Incoming Motivation Meme*",
        image: "/images/wedMotivation.png"
    });    

    notification.onclick = (e) => { //when you click notification - it takes you to the image
        window.location.href = "/images/wedMotivation.png";
    };
}

function showThursday_MotivationMeme(){
    const notification = new Notification("Motivationv Thursday", { //add a fun image
        body: "*Incoming Motivation Meme*",
        image: "/images/thursMotivation.png"
    });    

    notification.onclick = (e) => { //when you click notification - it takes you to the image
        window.location.href = "/images/thursMotivation.png";
    };
}

function showFriday_MotivationMeme(){
    const notification = new Notification("Motivation Friday", { //add a fun image
        body: "*Incoming Motivation Meme*",
        image: "/images/friMotivation.png"
    });    

    notification.onclick = (e) => { //when you click notification - it takes you to the image
        window.location.href = "/images/friMotivation.png";
    };
}

function showSaturday_MotivationMeme(){
    const notification = new Notification("Motivation Saturday", { //add a fun image
        body: "*Incoming Motivation Meme*",
        image: "/images/satMotivation.png"
    });    

    notification.onclick = (e) => { //when you click notification - it takes you to the image
        window.location.href = "/images/satMotivation.png";
    };
}

function showSunday_MotivationMeme(){
    const notification = new Notification("Motivation Sunday", { //add a fun image
        body: "*Incoming Motivation Meme*",
        image: "/images/sunMotivation.png"
    });    

    notification.onclick = (e) => { //when you click notification - it takes you to the image
        window.location.href = "/images/sunMotivation.png";
    };
}
/*Input params: day = 0 (0-6, Sunday-Saturday) time = '16:00'; triggerThis = function() { alert('this was triggered'); }; Adapted from stack overflow answer https://stackoverflow.com/questions/6855953/fire-event-at-a-certain-time-of-the-day*/

function scheduleNotification(day, time, triggerThis) {

    // get hour and minute from hour:minute param received, ex.: '16:00'
    const hour = Number(time.split(':')[0]);
    const minute = Number(time.split(':')[1]);

    // create a Date object at the desired timepoint
    const startTime = new Date(); startTime.setHours(hour, minute);
    const now = new Date();

    //check if the day of the week matches
    if(now.getDay() === day){
        // increase timepoint by 24 hours if in the past
        if (startTime.getTime() < now.getTime()) {
            startTime.setHours(startTime.getHours() + 24);
        }
    
        // get the interval in ms from now to the timepoint when to trigger the alarm
        const firstTriggerAfterMs = startTime.getTime() - now.getTime();
    
        // trigger the function triggerThis() at the timepoint
        // create setInterval when the timepoint is reached to trigger it every day at this timepoint
        setTimeout(function(){
            triggerThis();
            setInterval(triggerThis, 24 * 60 * 60 * 1000);
        }, firstTriggerAfterMs);
  

    }
    
  }
/**This function creates all of the notifications for each day and time
 */
function createNotifications(){
        //Sunday Notifications
        scheduleNotification(0, '11:00', showHam_brunchNotification); //Ham is opening for brunch
        scheduleNotification(0, '12:30', showHam_brunch_closing); //Ham is closing for brunch soon
    
        scheduleNotification(0, '16:30', showHam_dinnerNotification); //Ham is opening for dinner
        scheduleNotification(0, '18:00', showHam_dinner_closing); //Ham is closing for dinner soon
    
        scheduleNotification(0, '12:00', showWaterfrontNotification); //The waterfront is open :)
    
        scheduleNotification(0, '14:00', showBreakNotification); //show break notification

        scheduleNotification(0, '17:00', showSunday_MotivationMeme); //show motivation meme

        //Monday Notifications
        scheduleNotification(1, '08:00', showHam_BfastNotification); //Ham is opening for breakfast
        scheduleNotification(1, '09:30', showHam_Bfast_closing); //Ham is closing for breakfast soon
    
        scheduleNotification(1, '11:00', showHam_lunchNotification); //Ham is opening for lunch
        scheduleNotification(1, '13:30', showHam_lunchNotification); //Ham is closing for lunch
    
        scheduleNotification(1, '16:30', showHam_dinnerNotification); //Ham is opening for dinner
        scheduleNotification(1, '18:30', showHam_dinner_closing); //Ham is closing for dinner soon
        
        scheduleNotification(1, '14:00', showBreakNotification); //show break notification

        scheduleNotification(1, '17:00', showMonday_MotivationMeme); //show motivation meme
    
        //Tuesday Notifications
        scheduleNotification(2, '08:00', showHam_BfastNotification); //Ham is opening for breakfast
        scheduleNotification(2, '09:30', showHam_Bfast_closing); //Ham is closing for breakfast soon
    
        scheduleNotification(2, '11:00', showHam_lunchNotification); //Ham is opening for lunch
        scheduleNotification(2, '13:30', showHam_lunchNotification); //Ham is closing for lunch
    
        scheduleNotification(2, '16:30', showHam_dinnerNotification); //Ham is opening for dinner
        scheduleNotification(2, '18:30', showHam_dinner_closing); //Ham is closing for dinner soon   
    
        scheduleNotification(2, '12:00', showWaterfrontNotification); //The waterfront is open :)

        scheduleNotification(2, '14:00', showBreakNotification); //show break notification

        scheduleNotification(2, '17:00', showTuesday_MotivationMeme); //show motivation meme
    
        //Wednesday Notifications
        scheduleNotification(3, '08:00', showHam_BfastNotification); //Ham is opening for breakfast
        scheduleNotification(3, '09:30', showHam_Bfast_closing); //Ham is closing for breakfast soon
    
        scheduleNotification(3, '11:00', showHam_lunchNotification); //Ham is opening for lunch
        scheduleNotification(3, '13:30', showHam_lunchNotification); //Ham is closing for lunch
    
        scheduleNotification(3, '16:30', showHam_dinnerNotification); //Ham is opening for dinner
        scheduleNotification(3, '18:30', showHam_dinner_closing); //Ham is closing for dinner soon   
    
        scheduleNotification(3, '12:00', showWaterfrontNotification); //The waterfront is open :)

        scheduleNotification(3, '14:00', showBreakNotification); //show break notification

        scheduleNotification(3, '17:00', showWednesday_MotivationMeme); //show motivation meme

        //Thursday Notifications
        scheduleNotification(4, '08:00', showHam_BfastNotification); //Ham is opening for breakfast
        scheduleNotification(4, '09:30', showHam_Bfast_closing); //Ham is closing for breakfast soon
    
        scheduleNotification(4, '11:00', showHam_lunchNotification); //Ham is opening for lunch
        scheduleNotification(4, '13:30', showHam_lunchNotification); //Ham is closing for lunch
    
        scheduleNotification(4, '16:30', showHam_dinnerNotification); //Ham is opening for dinner
        scheduleNotification(4, '18:30', showHam_dinner_closing); //Ham is closing for dinner soon   
    
        scheduleNotification(4, '12:00', showWaterfrontNotification); //The waterfront is open :)

        scheduleNotification(4, '14:00', showBreakNotification); //show break notification

        scheduleNotification(4, '17:00', showThursday_MotivationMeme); //show motivation meme
    
        //Friday Notifications
        scheduleNotification(5, '08:00', showHam_BfastNotification); //Ham is opening for breakfast
        scheduleNotification(5, '09:30', showHam_Bfast_closing); //Ham is closing for breakfast soon
    
        scheduleNotification(5, '11:00', showHam_lunchNotification); //Ham is opening for lunch
        scheduleNotification(5, '13:30', showHam_lunchNotification); //Ham is closing for lunch
    
        scheduleNotification(5, '16:30', showHam_dinnerNotification); //Ham is opening for dinner
        scheduleNotification(5, '18:30', showHam_dinner_closing); //Ham is closing for dinner soon   
    
        scheduleNotification(5, '12:00', showWaterfrontNotification); //The waterfront is open :)

        scheduleNotification(5, '14:00', showBreakNotification); //show break notification

        scheduleNotification(5, '17:00', showFriday_MotivationMeme); //show motivation meme
    
        //Saturday Notifications
        scheduleNotification(0, '11:00', showHam_brunchNotification); //Ham is opening for brunch
        scheduleNotification(0, '12:30', showHam_brunch_closing); //Ham is closing for brunch soon
    
        scheduleNotification(0, '16:30', showHam_dinnerNotification); //Ham is opening for dinner
        scheduleNotification(0, '18:00', showHam_dinner_closing); //Ham is closing for dinner soon
    
        scheduleNotification(0, '12:00', showWaterfrontNotification); //The waterfront is open :)

        scheduleNotification(0, '17:00', showSunday_MotivationMeme); //show motivation meme
    
}
console.log(Notification.permission); //default, granted, denied

if(Notification.permission === "granted"){
    showNotification();
    createNotifications();
}else if(Notification.permission !== "denied"){
    Notification.requestPermission().then(permission => {
        if(permission === "granted"){
            createNotifications();
        }
    });
}