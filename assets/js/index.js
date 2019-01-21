$(document).ready(function(){



    const NewUserdata = JSON.parse(localStorage.getItem('newUser'));
    // console.log(NewUserdata.username)
    
    if(NewUserdata == null){

        $("#newuserSlide").hide();

    }else{

        $("#newuserSlide").show();
        $("#newuser").text(NewUserdata.username);
        
    }
  
/////////////// theme change when page load
var bi = localStorage.getItem('background_image');

if( bi == '1'){
    $(".background-image").css("background-image", "url('background-pattern4.png')");
  }else if(bi == '2'){
    localStorage.setItem('background_image',t);
    $(".background-image").css("background-image", "url('background-pattern.png')");
  }else if(bi == '3'){
    $(".background-image").css("background-image", "url('background-pattern8.png')");
  }else if(bi == '4'){
    $(".background-image").css("background-image", "url('background-pattern6.png')");
  }


///////////////hide pages//////
$("#welcomePage").hide();

$("#settingsPage").hide(); $("#settings_navigation_Page").hide();
$("#settings_Nav_App_Page").hide();
$("#settings_Nav_Joystick_Page").hide();
$("#settings_Nav_Keyboard_Page").hide();

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

///////////////////////////first page ////
    $(".valid").hide();

  
  
    
  
/////////////////welcome page

   $("#welcomePage").on('click',function(){
      // alert();
   })

   $("#settingsBtn1").on('click',function(){
    //    alert();
   
    
   });
  
///////////////counter page//////
$("#settingsBtn3").on('click',function(){
    // alert();
}) ;

$('input[size="200"]').each(function () {

    var style = $(this).attr('style'),
        textbox = $(document.createElement('textarea')).attr('style', style);
        console.log(textbox)
        textbox.attr('id','textarea')
    $(this).replaceWith(textbox);
});
////////////////////reason for visit data save
// $("#saveVisitData").on('click',function(){

//     var data ={
//         "name": $("#visiter_name").val(),
//         "age": $("#visiter_age").val(),
//         "reason": $("#Visite_reason").val()
//     }
//     console.log(data);
// });
/////////////////////langChange

var langChange= localStorage.getItem('langChange');
        if(langChange == '1'){
            $("#langChange").attr('checked', true);
                ///Counter page
        $("#choiceText").text('अपनी पसंद के विकल्प पर टैप करें');
        $("#choiceText1").text('अपनी पसंद के विकल्प पर टैप करें');
        $("#navigation").text('पथ प्रदर्शन')
        $("#reasonText").text('आने का कारण')
        $("#speechText").text('भाषण')
        $("#othersText1").text('अन्य लोग 1')
        $("#othersText2").text('अन्य लोग 2')
        $("#videoText").text('वीडियो कॉल करना')
        //// navigation page
        $("#counter1").text('काउंटर 1');
        $("#counter2").text('काउंटर 2');
        $("#counter3").text('काउंटर 3');
        $("#counter4").text('काउंटर 4');
        $("#counter5").text('काउंटर 5');
        $("#counter6").text('काउंटर 6');

        //////counter number session
        $("#counterNumnerText").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField").text('पथ प्रदर्शन');
       $("#counterNumnerText1").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField1").text('पथ प्रदर्शन');

       $("#counterNumnerText2").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField2").text('पथ प्रदर्शन');

       $("#counterNumnerText3").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField3").text('पथ प्रदर्शन');

       $("#counterNumnerText4").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField4").text('पथ प्रदर्शन');
       
       $("#counterNumnerText5").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField5").text('पथ प्रदर्शन');

       /////reasonForVisitingPage
       $("#othersChoise").text('अपनी पसंद के विकल्प पर टैप करें');
       $("#re_other1").text('अन्य लोग 1');
       $("#re_other2").text('अन्य लोग 2');
       $("#re_other3").text('अन्य लोग 3');
       $("#re_other4").text('अन्य लोग 4');
       $("#re_other5").text('अन्य लोग 5');
       $("#re_reason").text('कारण');
       //////visiter form page
       $("#visitHead").text('आने का कारण');
       $("#vName").text('नाम');
       $("#vAge").text('आयु');
       $("#vReason").text('आने का कारण');
       $("#saveVisitData").text('बचाना');
           
        }else{
          
            $("#langChange").attr('checked', false);
             ///Counter page
         $("#choiceText").text('Tap on the Option of your Choice');
         $("#choiceText1").text('Tap on the Option of your Choice');
         $("#navigation").text('Navigation')
         $("#reasonText").text('Reason for visiting')
         $("#speechText").text('Speech')
         $("#othersText1").text('Others 1')
         $("#othersText2").text('Others 2')
         $("#videoText").text('Video Calling')
         /////navigation page
         $("#counter1").text('Counter 1');
         $("#counter2").text('Counter 2');
         $("#counter3").text('Counter 3');
         $("#counter4").text('Counter 4');
         $("#counter5").text('Counter 5');
         $("#counter6").text('Counter 6');

                 //////counter number session
        $("#counterNumnerText").text('Please Proceed to Counter Number')
        $("#textField").text('Navigation');
        
        $("#counterNumnerText1").text('Please Proceed to Counter Number')
        $("#textField1").text('Navigation');

        $("#counterNumnerText2").text('Please Proceed to Counter Number')
        $("#textField2").text('Navigation');

        $("#counterNumnerText3").text('Please Proceed to Counter Number')
        $("#textField3").text('Navigation');

        $("#counterNumnerText4").text('Please Proceed to Counter Number')
        $("#textField4").text('Navigation');

        $("#counterNumnerText5").text('Please Proceed to Counter Number')
        $("#textField5").text('Navigation');

               /////reasonForVisitingPage
       $("#othersChoise").text('Tap on the Option of your Choice');
       $("#re_other1").text('others 1');
       $("#re_other2").text('others 2');
       $("#re_other3").text('others 3');
       $("#re_other4").text('others 4');
       $("#re_other5").text('others 5');
       $("#re_reason").text('Reason');

        //////visiter form page
        $("#visitHead").text('Reason For Visit');
        $("#vName").text('Name');
        $("#vAge").text('Age');
        $("#vReason").text('Reason For Visit');
        $("#saveVisitData").text('Save');
        }


$('#langChange').click(function(){
 
    if($(this).prop("checked") == true){
        localStorage.setItem('langChange','1');
        // alert("Checkbox is checked.");
        ///Counter page
        $("#choiceText").text('अपनी पसंद के विकल्प पर टैप करें');
        $("#choiceText1").text('अपनी पसंद के विकल्प पर टैप करें');
        $("#navigation").text('पथ प्रदर्शन')
        $("#reasonText").text('आने का कारण')
        $("#speechText").text('भाषण')
        $("#othersText1").text('अन्य लोग 1')
        $("#othersText2").text('अन्य लोग 2')
        $("#videoText").text('वीडियो कॉल करना')
        //// navigation page
        $("#counter1").text('काउंटर 1');
        $("#counter2").text('काउंटर 2');
        $("#counter3").text('काउंटर 3');
        $("#counter4").text('काउंटर 4');
        $("#counter5").text('काउंटर 5');
        $("#counter6").text('काउंटर 6');

        //////counter number session
        $("#counterNumnerText").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField").text('पथ प्रदर्शन');
       $("#counterNumnerText1").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField1").text('पथ प्रदर्शन');

       $("#counterNumnerText2").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField2").text('पथ प्रदर्शन');

       $("#counterNumnerText3").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField3").text('पथ प्रदर्शन');

       $("#counterNumnerText4").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField4").text('पथ प्रदर्शन');
       
       $("#counterNumnerText5").text('कृपया काउंटर नंबर पर आगे बढ़ें')
       $("#textField5").text('पथ प्रदर्शन');

       /////reasonForVisitingPage
       $("#othersChoise").text('अपनी पसंद के विकल्प पर टैप करें');
       $("#re_other1").text('अन्य लोग 1');
       $("#re_other2").text('अन्य लोग 2');
       $("#re_other3").text('अन्य लोग 3');
       $("#re_other4").text('अन्य लोग 4');
       $("#re_other5").text('अन्य लोग 5');
       $("#re_reason").text('कारण');
       //////visiter form page
       $("#visitHead").text('आने का कारण');
       $("#vName").text('नाम');
       $("#vAge").text('आयु');
       $("#vReason").text('आने का कारण');
       $("#saveVisitData").text('बचाना');
    } 
    else if($(this).prop("checked") == false){

        localStorage.removeItem('langChange');
        // alert("Checkbox is unchecked.");
         ///Counter page
         $("#choiceText").text('Tap on the Option of your Choice');
         $("#choiceText1").text('Tap on the Option of your Choice');
         $("#navigation").text('Navigation')
         $("#reasonText").text('Reason for visiting')
         $("#speechText").text('Speech')
         $("#othersText1").text('Others 1')
         $("#othersText2").text('Others 2')
         $("#videoText").text('Video Calling')
         /////navigation page
         $("#counter1").text('Counter 1');
         $("#counter2").text('Counter 2');
         $("#counter3").text('Counter 3');
         $("#counter4").text('Counter 4');
         $("#counter5").text('Counter 5');
         $("#counter6").text('Counter 6');

                 //////counter number session
        $("#counterNumnerText").text('Please Proceed to Counter Number')
        $("#textField").text('Navigation');
        
        $("#counterNumnerText1").text('Please Proceed to Counter Number')
        $("#textField1").text('Navigation');

        $("#counterNumnerText2").text('Please Proceed to Counter Number')
        $("#textField2").text('Navigation');

        $("#counterNumnerText3").text('Please Proceed to Counter Number')
        $("#textField3").text('Navigation');

        $("#counterNumnerText4").text('Please Proceed to Counter Number')
        $("#textField4").text('Navigation');

        $("#counterNumnerText5").text('Please Proceed to Counter Number')
        $("#textField5").text('Navigation');

               /////reasonForVisitingPage
       $("#othersChoise").text('Tap on the Option of your Choice');
       $("#re_other1").text('others 1');
       $("#re_other2").text('others 2');
       $("#re_other3").text('others 3');
       $("#re_other4").text('others 4');
       $("#re_other5").text('others 5');
       $("#re_reason").text('Reason');

        //////visiter form page
        $("#visitHead").text('Reason For Visit');
        $("#vName").text('Name');
        $("#vAge").text('Age');
        $("#vReason").text('Reason For Visit');
        $("#saveVisitData").text('Save');
}
});


///////////////////setting page enable/disable
var navPagedisbale= localStorage.getItem('navPagedisbale');
        if(navPagedisbale == '1'){
            $("#navPagedisbale").attr('checked', true);
            $("#choice_cash_withdrawal").removeAttr('onclick');
        }else{
            document.getElementById('choice_cash_withdrawal').setAttribute('onclick','navigation()')
            $("#navPagedisbale").attr('checked', false);
        }

$('#navPagedisbale').click(function(){
 
    if($(this).prop("checked") == true){
        localStorage.setItem('navPagedisbale','1');

        $("#choice_cash_withdrawal").removeAttr('onclick');
       
    }  else if($(this).prop("checked") == false){
 
        localStorage.removeItem('navPagedisbale');
        document.getElementById('choice_cash_withdrawal').setAttribute('onclick','navigation()')
       
    }
});

//////reasonForVisiting
var reasonPageDisable= localStorage.getItem('reasonPageDisable');
        if(reasonPageDisable == '1'){
            $("#reasonPageDisable").attr('checked', true);
            $("#choice_cash_deposit").removeAttr('onclick');
        }else{
            document.getElementById('choice_cash_deposit').setAttribute('onclick','reasonForVisiting()')
            $("#reasonPageDisable").attr('checked', false);
        }
$('#reasonPageDisable').click(function(){
 
    if($(this).prop("checked") == true){
        localStorage.setItem('reasonPageDisable','1');
        $("#choice_cash_deposit").removeAttr('onclick')
    }  else if($(this).prop("checked") == false){
 
        localStorage.removeItem('reasonPageDisable');
        document.getElementById('choice_cash_deposit').setAttribute('onclick','reasonForVisiting()')
       
    }
});
///////////////////////////speech
var SpeechPageDisable= localStorage.getItem('SpeechPageDisable');
        if(SpeechPageDisable == '1'){
            $("#SpeechPageDisable").attr('checked', true);
            $("#choice_demat").removeAttr('onclick');
        }else{
            document.getElementById('choice_demat').setAttribute('onclick','speech()')
            $("#SpeechPageDisable").attr('checked', false);
        }
$('#SpeechPageDisable').click(function(){
 
    if($(this).prop("checked") == true){

        localStorage.setItem('SpeechPageDisable','1');
        $("#choice_demat").removeAttr('onclick')
    }  else if($(this).prop("checked") == false){
 
        localStorage.removeItem('SpeechPageDisable');
        document.getElementById('choice_demat').setAttribute('onclick','speech()')
       
    }
});

///////////////////////videocall
var VideoCallPageDisable= localStorage.getItem('VideoCallPageDisable');
        if(VideoCallPageDisable == '1'){
            $("#VideoCallPageDisable").attr('checked', true);
            $("#choice_fixed_deposit").removeAttr('onclick');
        }else{
            document.getElementById('choice_fixed_deposit').setAttribute('onclick','videocall()')
            $("#VideoCallPageDisable").attr('checked', false);
        }
$('#VideoCallPageDisable').click(function(){
 
    if($(this).prop("checked") == true){
        localStorage.setItem('VideoCallPageDisable','1');
        $("#choice_fixed_deposit").removeAttr('onclick')
    }  else if($(this).prop("checked") == false){
 
        localStorage.removeItem('VideoCallPageDisable');
        document.getElementById('choice_fixed_deposit').setAttribute('onclick','videocall()')
       
    }
});

});


// Clock


///////for settings page 

function check_user(pageSettings){

    $('#settingsModalCenter').modal('hide');

 if(pageSettings == 'welcome'){

    val =  $("#settingsPass").val();
   
    if(val == ''){
      $(".valid").show();
  
     setTimeout(function(){$(".valid").hide(); },2000);
    }else{
      
    //   localStorage.setItem('settingsPassword',val);
   
      $("#settingsPass").val('');
      $("#settingsPass").val('');
      $("#indexPage").hide();
      $("#settingsPage").show();
      $("#body").removeClass("modal-open");
      $(".modal-backdrop  ").addClass('modal');
      //setTimeout(function(){ $("#welcomePage").hide(); $("#counterPage").show() },2000);
    }

 }

  else if(pageSettings == 'counter'){
    val =  $("#settingsPass3").val();

    if(val == ''){
      $(".valid").show();
  
     setTimeout(function(){$(".valid").hide(); },2000);
    }else{
      
      localStorage.setItem('settingsPassword',val);
      $("#settingsPass3").val('');
      $("#settingsPass3").val('');
      $("#counterPage").hide();
      $("#settingsPage").show();
      $("#body").removeClass("modal-open");
      $(".modal-backdrop  ").addClass('modal');
      //setTimeout(function(){ $("#welcomePage").hide(); $("#counterPage").show() },2000);
    }
 }

}

function Modalclose(){
      $("#settingsPass").val('');
      $("#settingsPass3").val('');
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

///////for next page 
function nextPage(nextPage){
  if(nextPage == "welcome"){
      $("#indexPage").hide();  
      $("#welcomePage").show();
      setTimeout(function(){ $("#welcomePage").hide(); $("#counterPage").show(); },2000);
  }else if(nextPage == "speech"){
      var speech_value = new ROSLIB.Message({
      data : 'false'
      });
      speech_state.publish(speech_value);
     $("#navigationPage").hide();
     $("#navigationHeader").hide();
      $("#speechPage").hide();
      $("#counterPage").show();
      $("#videoPage").hide();
      $("#reasonForVisitingPageHeader").hide();
      
  }else if(nextPage == "counters"){

      $("#navigationPage").show();
  
      $("#navigationPage_counter1").hide();
      $("#navigationPage_counter2").hide();
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
      
  
 }else if(nextPage == "back_home"){

      console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
 } else if(nextPage == "settings"){

    $("#settingsPage").hide();
    $("#indexPage").show();
    $("#settingsModalCenter3").modal('hide')
    
}else if(nextPage == "reason"){   

    $("#reasonForVisitingPage").hide();
    $("#counterPage").show();
}else if(nextPage == 'visterPage'){
    $("#others6Page").hide();
    $("#reasonForVisitingPage").show();
   
}else if(nextPage == 'settings_nav'){

    $("#settings_navigation_Page").hide();
    $("#settingsPage").show();
   
}else if(nextPage == 'settings_nav_next'){

    $("#settings_navigation_Page").show();
    $("#settings_Nav_App_Page").hide();
    $("#settings_Nav_Joystick_Page").hide();
    $("#settings_Nav_Keyboard_Page").hide();
    
}

}

// navigation session all pages
function navigation(){
    $("#navigationHeader").show();
    $("#counterPage").hide();
    $("#navigationPage").show();
}
    function counter1(){
        $("#navigationPage_counter1").show(); 
        $("#navigationPage").hide();
    }
    function counter2(){
        $("#navigationPage_counter2").show();
        $("#navigationPage_counter1").hide();
        $("#navigationPage").hide();
    }  
    function counter3(){
        $("#navigationPage_counter3").show();
        $("#navigationPage_counter1").hide();
        $("#navigationPage_counter2").hide();
        $("#navigationPage").hide();
    }
    function counter4(){
        $("#navigationPage_counter4").show();
        $("#navigationPage_counter1").hide();
        $("#navigationPage_counter2").hide();
        $("#navigationPage_counter3").hide();
        $("#navigationPage").hide();
    }

    function counter5(){
        $("#navigationPage_counter5").show();
        $("#navigationPage_counter1").hide();
        $("#navigationPage_counter2").hide();
        $("#navigationPage_counter3").hide();
        $("#navigationPage_counter4").hide();
        $("#navigationPage").hide();
    }

    function counter6(){
        $("#navigationPage_counter6").show();
        $("#navigationPage_counter1").hide();
        $("#navigationPage_counter2").hide();
        $("#navigationPage_counter3").hide();
        $("#navigationPage_counter4").hide();
        $("#navigationPage_counter5").hide();
        $("#navigationPage").hide();
    }

//////////////end///////////
// speech

function speech(){
  var speech_value = new ROSLIB.Message({
      data : 'true'
  });
  speech_state.publish(speech_value);
    $("#counterPage").hide();
    $("#speechPage").show();
    $("#navigationPage").hide();
}

// videocall
function videocall(){
  
    $("#counterPage").hide();
    $("#videoPage").show();
    $("#navigationPage").hide();
}

//////////////reasonForVisiting
function reasonForVisiting(){
    $("#counterPage").hide();
    $("#reasonForVisitingPage").show();
    $("#reasonForVisitingPageHeader").show();
}

function others6(){

    $("#reasonForVisitingPage").hide();
    $("#others6Page").show();

}

function saveVisitData(){
    
    var data ={
        "name": $("#visiter_name").val(),
        "age": $("#visiter_age").val(),
        "reason": $("#Visite_reason").val()
    }
    console.log(data);
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Successfully saved',
        showConfirmButton: false,
        timer: 1500
      })

}
/////////////
//////settings page
 function changePass(){
   
}
function changePassW(){
    $("#exampleModal1").modal('hide');
    $("#changePassText").val('');
    var cngPass = $("#changePassText").val();
}
function themeChange(){

}
function themechangeBtn(){
    $("#exampleModal2").modal('hide');
}
function toChnageTheme(t){ 
    localStorage.setItem('background_image',t);
  if( t == '1'){
    $(".background-image").css("background-image", "url('background-pattern4.png')");
  }else if(t == '2'){
    localStorage.setItem('background_image',t);
    $(".background-image").css("background-image", "url('background-pattern.png')");
  }else if(t == '3'){
    $(".background-image").css("background-image", "url('background-pattern8.png')");
  }else if(t == '4'){
    $(".background-image").css("background-image", "url('background-pattern6.png')");
  }


}

function toChangeNavigation(){

    $("#settingsPage").hide(); 
    $("#settings_navigation_Page").show();

}
function toChangeStatus(){

}
function toMapDisplay(){

}
////power button
function Power_Off_On(){
    
}
function addNewUser(){
    var username = $("#username").val();
    var userDetails = $("#uerdetails").val();
    $("#newuser").text(username);
    var newUser ={
        "username": username,
        "userDetails": userDetails
    }
    localStorage.setItem('newUser', JSON.stringify(newUser));
    $("#adNewuserDect").modal('hide');
    $("#username").val('');
    $("#uerdetails").val('');

}

function inCounterBanigation1(){
   console.log('1 is clicked');

  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });


  var request = new ROSLIB.ServiceRequest({
    counter_no : 1
  });

  document.getElementById("back_counter1").style.visibility = "hidden";
  document.getElementById("test34").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);
      document.getElementById("test34").style.visibility = "visible";
      document.getElementById("back_counter1").style.visibility = "visible";

    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });

}
function inCounterBanigation2(){

 console.log('2 is clicked');

  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });
    var request = new ROSLIB.ServiceRequest({
    counter_no : 2
  });
document.getElementById("back_counter2").style.visibility = "hidden";
  document.getElementById("test34").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);
      document.getElementById("test34").style.visibility = "visible";
      document.getElementById("back_counter2").style.visibility = "visible";

    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });

}
function inCounterBanigation3(){
  console.log('3 is clicked');

  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });
  var request = new ROSLIB.ServiceRequest({

    counter_no : 3
  });
document.getElementById("back_counter3").style.visibility = "hidden";
  document.getElementById("test34").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);
      document.getElementById("test34").style.visibility = "visible";
      document.getElementById("back_counter3").style.visibility = "visible";

    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });
}
function inCounterBanigation4(){
  console.log('4 is clicked');

  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });
    var request = new ROSLIB.ServiceRequest({
    counter_no : 4
  });
document.getElementById("back_counter4").style.visibility = "hidden";
  document.getElementById("test34").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);
      document.getElementById("test34").style.visibility = "visible";
      document.getElementById("back_counter4").style.visibility = "visible";

    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });
}
function inCounterBanigation5(){
  console.log('5 is clicked');

  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });
    var request = new ROSLIB.ServiceRequest({
    counter_no : 5
  });
document.getElementById("back_counter5").style.visibility = "hidden";
  document.getElementById("test34").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);
      document.getElementById("test34").style.visibility = "visible";
      document.getElementById("back_counter5").style.visibility = "visible";

    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });

}
function inCounterBanigation6(){
  console.log('6 is clicked');

  var navigation = new ROSLIB.Service({
    ros : ros,
    name : '/counter_no',
    serviceType : 'ros_waypoint_generator/counter'
  });
    var request = new ROSLIB.ServiceRequest({
    counter_no : 6
  });
document.getElementById("back_counter6").style.visibility = "hidden";
  document.getElementById("test34").style.visibility = "hidden";
  navigation.callService(request, function(result) {
    console.log('Result for service call on '
      + navigation.name
      + ': '
      + result.result);
      document.getElementById("test34").style.visibility = "visible";
      document.getElementById("back_counter6").style.visibility = "visible";

    console.log('backIon')
      ui_refresh.publish(str);
      sleep(300);
      ui_refresh.publish(str);
      $("#indexPage").show();
      $("#welcomePage").hide();
      $("#settingsPage").hide();
      $("#counterPage").hide();
      $("#navigationPage").hide();
      $("#speechPage").hide();
      $("#videoPage").hide();
      $("#navigationPage_counter1").hide();   
      $("#navigationPage_counter2").hide(); 
      $("#navigationPage_counter3").hide();
      $("#navigationPage_counter4").hide();
      $("#navigationPage_counter5").hide();
      $("#navigationPage_counter6").hide();
       ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
      sleep(3000);
      ui_refresh.publish(str);
  });

}

function changeLang(){
   
}
function autonomous(){

}
function app(){
    $("#settings_navigation_Page").hide();
    $("#settings_Nav_App_Page").show();
}
function joystick(){
    $("#settings_navigation_Page").hide();
    $("#settings_Nav_Joystick_Page").show();
}
function keyboard(){
    $("#settings_navigation_Page").hide();
    $("#settings_Nav_Keyboard_Page").show();
}
/////////////////reason for visit others
function others1(){
    
}

///////////////app buttons
function leftBtn(){

}
function upBtn(){
    
}
function downBtn(){
    
}
function rightBtn(){
    
}
/////power button
function powerOff(){
    $('#powerbtnModal').modal('hide');
}
////////////////settings page ends