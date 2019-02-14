
var IDLE_TIMEOUT = 200; //seconds
var _idleSecondsCounter = 0;
document.onclick = function() {
    _idleSecondsCounter = 0;
    // alert('j')
    console.log(_idleSecondsCounter);
};
document.onmousemove = function() {
    _idleSecondsCounter = 0;
    //console.log(_idleSecondsCounter);
};
document.onkeypress = function() {
    _idleSecondsCounter = 0;
    // console.log(_idleSecondsCounter);
};
window.setInterval(CheckIdleTime, 100);

function CheckIdleTime() {
    _idleSecondsCounter++;

    if (_idleSecondsCounter >= IDLE_TIMEOUT) {
    // alert("Time expired!");
        // document.location.href = "index.html";
        $("#indexPage").show();
        $("#welcomePage").hide();

        $("#settingsPage").hide(); $("#settings_navigation_Page").hide();
        $("#settings_Nav_App_Page").hide();
        $("#settings_Nav_Joystick_Page").hide();
        $("#settings_Nav_Keyboard_Page").hide();
        $("#face_recognition").hide();
        
        $("#counterPage").hide();
        $("#navigationPage").hide();
        $("#speechPage").hide();
        $("#videoPage").hide();
        $("#reasonForVisitingPage").hide();
        $("#others6Page").hide();
        $("#navigationPage_counter1").hide();   
        $("#navigationPage_counter2").hide(); 
        $("#navigationPage_counter3").hide();
        $("#navigationPage_counter4").hide();
        $("#navigationPage_counter5").hide();
        $("#navigationPage_counter6").hide();
    }
}