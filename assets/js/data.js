$(document).ready(function(){
$('#header').hide();
$('#disdiv').hide();
$('#cashWid').hide();
$('#cashDeposite').hide();
$('#demat').hide();
$('#foreignEx').hide();
$('#fixedDepos').hide();
$('#speech').hide();
$//('#index').hide();
//video streamer
  var cam_viewer = new MJPEGCANVAS.Viewer({
            divID : 'page-front-img',
            host : 'localhost',
            width : 700,
            height : 400,
            topic : '/front_cam'

            
          });
   console.log(cam_viewer);

});

var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
      });

ros.on('connection', function() {
console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
console.log('Connection to websocket server closed.');
});



// home page to welcome page ui change
var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/ui',
    messageType : 'std_msgs/String'
  });

  listener.subscribe(function(message) {
    $("#indexPage").hide();  
      document.getElementById('User').innerHTML = message.data;
      $("#welcomePage").show();
      setTimeout(function(){ $("#welcomePage").hide(); $("#counterPage").show() },7000);
    console.log('Received message on ' + listener.name + ': ' + message.data);

    // listener.unsubscribe();
  });




var ui_refresh = new ROSLIB.Topic({
     ros : ros,
     name : '/ui_refresh',
     messageType : 'std_msgs/String'
   });

  var str = new ROSLIB.Message({
      data : 'hello'
  });

var speech_state = new ROSLIB.Topic({
     ros : ros,
     name : '/speech/state',
     messageType : 'std_msgs/String'
   });

  











//Enter Btn
$('.enterBtn').on('click',function(){
console.log('enter')

  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "enter_pressed",

  });
  ui_choice.publish(selected);

  //$('#disdiv').show();
  //$('#index').hide();
  //$('#header').show();

});
//backIon

$('#backIon').on('click',function(){
console.log('backIon')

  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "go_ui",

  });
  ui_choice.publish(selected);

  $('#disdiv').hide();
  $('#header').hide();
  $('#index').show();

});
//backBtnDemo
$('.backBtnDemo').on('click',function(){
console.log('backBtnDemo')

  $('#disdiv').hide();
  $('#header').hide();
  $('#index').show();

});
//homeBtn
$('#homeBtn').on('click',function(){
console.log('backBtnDemo')

  $('#disdiv').hide();
  $('#header').hide();
  $('#index').show();

});

/******************These below are the "Go to Counter" buttons on respective pages**************************/
//cashDepositNav button
$('#cashDepositNav').on('click',function(){
console.log('test1')
    var ui_choice = new ROSLIB.Topic({
    ros : ros,
    name : '/ui/button_clicked',
    messageType : 'std_msgs/String'
    });
        
    var selected = new ROSLIB.Message({
    data : "go_cash_deposit",
    
    });
    ui_choice.publish(selected);
});

//cashWidNav button
$('#cashWidNav').on('click',function(){
console.log('test1')
    var ui_choice = new ROSLIB.Topic({
    ros : ros,
    name : '/ui/button_clicked',
    messageType : 'std_msgs/String'
    });
        
    var selected = new ROSLIB.Message({
    data : "go_cash_withdraw",
    
    });
    ui_choice.publish(selected);
});


//dematNav button
$('#dematNav').on('click',function(){
console.log('test1')
    var ui_choice = new ROSLIB.Topic({
    ros : ros,
    name : '/ui/button_clicked',
    messageType : 'std_msgs/String'
    });
        
    var selected = new ROSLIB.Message({
    data : "go_demat",
    
    });
    ui_choice.publish(selected);
});

//foreignExNav button
$('#foreignExNav').on('click',function(){
console.log('test1')
    var ui_choice = new ROSLIB.Topic({
    ros : ros,
    name : '/ui/button_clicked',
    messageType : 'std_msgs/String'
    });
        
    var selected = new ROSLIB.Message({
    data : "go_forex",
    
    });
    ui_choice.publish(selected);
});

//fixedDeposNav button
$('#fixedDeposNav').on('click',function(){
console.log('test1')
    var ui_choice = new ROSLIB.Topic({
    ros : ros,
    name : '/ui/button_clicked',
    messageType : 'std_msgs/String'
    });
        
    var selected = new ROSLIB.Message({
    data : "go_fixed_deposit",
    
    });
    ui_choice.publish(selected);
});

/****************************These below are the back buttons of counter pages******************************/




//cashWithBtn
$('.backBtn').on('click',function(){
console.log('test')

  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "go_ui",

  });
  ui_choice.publish(selected);

  $('#cashWid').hide();
  $('#disdiv').show();

});

//dematBackBtn
$('#dematBtn').on('click',function(){
console.log('test1')

  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "go_ui",

  });
  ui_choice.publish(selected);


  $('#demat').hide();
  $('#disdiv').show();

});


//fixedDepBtn
$('#fixedDepBtn').on('click',function(){
  console.log('test1')
  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "go_ui",

  });
  ui_choice.publish(selected);


  $('#fixedDepos').hide();
  $('#disdiv').show();

});


//speechBtn
$('#speechBtn').on('click',function(){
  console.log('test1')
  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "speech_close",

  });
  ui_choice.publish(selected);

  $('#speech').hide();
  $('#disdiv').show();

});

/*
//cashDepBtn
$('#cashDepBtn').on('click',function(){
console.log('test1')

  $('#cashDeposite').hide();
  $('#disdiv').show();

});



//foreExBtn
$('#foreExBtn').on('click',function(){
console.log('test1')

  $('#foreignEx').hide();
  $('#disdiv').show();

});
*/

/*****************These are the buttons for corresponding choices in second page****************************/
  //choice_cash_withdrawal btn click
$("#choice_cash_withdrawal").on('click',function(){
  console.log('click event');
  //$('#cashWid').show();
  //$('#disdiv').hide();
  //$('.txtBtn').show();
  //return new Promise(function(resolve, reject) {
    // console.log('start')
  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "cash_withdraw",
  
  });
  ui_choice.publish(selected);
     // setTimeout(function() {
    //   resolve();
    // }, 2000);
    //}).then(function() {
       //  console.log('middle');

        //  document.location.href = "Cash_Withdrawal.html";
    //  return " end";
    //});
  
 });


//choice_cash_deposit btn click
/*
$("#choice_cash_deposit").on('click',function(){
  console.log('click event');
  $('#cashDeposite').show();
  $('#disdiv').hide();
  $('.txtBtn').show();

  
  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "cash_deposit",
  
  });
  ui_choice.publish(selected);
     
   
  //window.location.href = "Cash-deposit.html";
  //document.location.href = "Cash-deposit.html";
 });
*/
//choice_demat_account btn click
$("#choice_demat").on('click',function(){
  console.log('click event');
  //$('#demat').show();
  //$('#disdiv').hide();
  //$('.txtBtn').show();
  
  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "demat",
  
  });
  ui_choice.publish(selected);

     
  $('#demat').show();
  $('#disdiv').hide();
});


//choice_forex btn click 
/*
$("#choice_forex").on('click',function(){
  console.log('click event');
  $('#foreignEx').show();
  $('#disdiv').hide();
  $('.txtBtn').show();    
  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "forex",
  
  });
  ui_choice.publish(selected);

      
});
*/

//choice_fixed_deposit btn click  
$("#choice_fixed_deposit").on('click',function(){
  console.log('click event');
  
  //$('#fixedDepos').show();
        //$('#disdiv').hide();
  //$('.txtBtn').show();  
  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "fixed_deposit",
  
  });
  ui_choice.publish(selected);

      
 });

//choice_speech btn click
$("#choice_speech").on('click',function(){
  console.log('click event');
  
  //$('#speech').show();
        //$('#disdiv').hide();
  //$('.txtBtn').show();
  var ui_choice = new ROSLIB.Topic({
  ros : ros,
  name : '/ui/button_clicked',
  messageType : 'std_msgs/String'
  });

  var selected = new ROSLIB.Message({
  data : "speech_start"
  });
  ui_choice.publish(selected);
  //document.location.href = "Fixed-deposit.html";

});
  
  
var IDLE_TIMEOUT = 3000; //not seconds
var _idleSecondsCounter = 0;

document.onclick = function() {
  _idleSecondsCounter = 0;
  //console.log(_idleSecondsCounter);
  };

document.onmousemove = function() {
  _idleSecondsCounter = 0;
  //console.log(_idleSecondsCounter);
  };

document.onkeypress = function() {
  _idleSecondsCounter = 0;
  //console.log(_idleSecondsCounter);
  };

window.setInterval(CheckIdleTime, 1000);//calls the function every xxxx milliseconds
//window.setTimeout(CheckIdleTime, 2000);

function CheckIdleTime() {
      _idleSecondsCounter++;
    //console.log(_idleSecondsCounter);
       if (_idleSecondsCounter == IDLE_TIMEOUT) {
       // alert("Time expired!");
    console.log(_idleSecondsCounter);
    // document.location.href = "index.html";
    clearInterval(_idleSecondsCounter);
      
      $('#disdiv').hide();
      $('#header').hide();
      $('#index').show();
      $('.txtBtn').hide();
      var ui_choice = new ROSLIB.Topic({
      ros : ros,
      name : '/ui/button_clicked',
      messageType : 'std_msgs/String'
      });
    
      var selected = new ROSLIB.Message({
      data : "timeout"
      });
      ui_choice.publish(selected);
  }
}

//loads index page once home position is reached
var listener = new ROSLIB.Topic({
ros : ros,
name : '/nav_complete',
messageType : 'std_msgs/String'
});

listener.subscribe(function(message) {
console.log('Received message on ' + listener.name + ': ' + message.data);
if(message.data=='complete'){

  $('#cashWid').hide();
  $('#cashDeposite').hide();
  $('#demat').hide();
  $('#foreignEx').hide();
  $('#fixedDepos').hide();
  $('#speech').hide();
  $('#disdiv').hide();
  $('#header').hide();
  $('#index').show();}

});

var page_loader = new ROSLIB.Topic({
ros : ros,
name : '/load_page',
messageType : 'std_msgs/String'
});


page_loader.subscribe(function(message){
  console.log('Received message on ' + page_loader.name + ': ' + message.data);
  
  if(message.data=='choices'){
    //console.log('Received message on ' + page_loader.name + ': ' + message.data);
    $('#disdiv').show();
    $('#header').show();
    $('#index').hide();

    $('#cashWid').hide();
    $('#cashDeposite').hide();
    $('#demat').hide();
    $('#foreignEx').hide();
    $('#fixedDepos').hide();
    $('#speech').hide();}

  else if(message.data=='cash_withdraw'){
    //console.log('Received message on ' + page_loader.name + ': ' + message.data);
    $('#cashWid').show();
    $('.txtBtn').show();
    $('#disdiv').hide();

    $('#header').hide();
    $('#cashDeposite').hide();
    $('#demat').hide();
    $('#foreignEx').hide();
    $('#fixedDepos').hide();
    $('#speech').hide();}
  
  else if(message.data=='demat'){
    //console.log('Received message on ' + page_loader.name + ': ' + message.data);
    $('#demat').show();
    $('.txtBtn').show();
    $('#disdiv').hide();
    
    $('#header').hide();
    $('#cashWid').hide();
    $('#cashDeposite').hide();
    $('#foreignEx').hide();
    $('#fixedDepos').hide();
    $('#speech').hide();}
  
  else if(message.data=='fixed_deposit'){
    //console.log('Received message on ' + page_loader.name + ': ' + message.data);
    $('#fixedDepos').show();
    $('.txtBtn').show();
    $('#disdiv').hide();

    $('#header').hide();
    $('#cashWid').hide();
    $('#cashDeposite').hide();
    $('#demat').hide();
    $('#foreignEx').hide();
    $('#speech').hide();}
  
  else if(message.data=='speech_start'){
    console.log('Received message on ' + page_loader.name + ': ' + message.data);
    $('#speech').show();
    $('.txtBtn').show();
    $('#disdiv').hide();

    $('#header').hide();
    $('#cashWid').hide();
    $('#cashDeposite').hide();
    $('#demat').hide();
    $('#foreignEx').hide();
    $('#fixedDepos').hide();}
});

//end of ready() function

