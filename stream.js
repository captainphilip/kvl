// var settings = {
//     "url": "https://karunyaevent.herokuapp.com/event/listevent",
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//       "Content-Type": "application/json"
//     },
//     "data": JSON.stringify({"emailId":"sa@gmail.com","password":"sasasasas"}),
//   };
  
//   $.ajax(settings).done(function (response) {
//     console.log(response.data[0].title);
//     // document.getElementById("eventTitleDetail").innerHTML = response.data[0].title.toString();
//     // document.getElementById("eventSpeakerDetail").innerHTML = "By "+response.data[0].title.toString();
//   });
  var authToken = sessionStorage.getItem('rocketToken');
  if (sessionStorage.getItem('status') != null) { 
    var settings = {
        "url": "https://karunyaevent.herokuapp.com/event/listevent",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        document.getElementById("eventTitleDetail").innerHTML = response.data[1].title.toString();
        document.getElementById("eventSpeakerDetail").innerHTML = "By "+response.data[1].organizer.toString();
        document.getElementById("eventDescDetail").innerHTML = response.data[1].discription.toString();
        $("#youtubeEvent").attr("src", response.data[1].youtubeLive.toString());
        $("#rocketEvent").attr("src", response.data[1].rocketChat.toString());
        console.log(sessionStorage.getItem('rocketToken'));
      });
  }
  else{
    document.location = "login.html";
  }
  
  function authenticateIFrame() {
    document.getElementById('rcChannel').contentWindow.postMessage({
        externalCommand: 'login-with-token',
        token: authToken
    }, '*');
  }

  window.onload = function () {
      authenticateIFrame();
      var oiframe = document.getElementById('rcChannel');
      oiframe.contentWindow.location.reload();
  };
