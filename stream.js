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
  if (sessionStorage.getItem('status') != null) { 
    var settings = {
        "url": "https://karunyaevent.herokuapp.com/event/listevent",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        document.getElementById("eventTitleDetail").innerHTML = response.data[0].title.toString();
        document.getElementById("eventSpeakerDetail").innerHTML = "By "+response.data[0].organizer.toString();
        document.getElementById("eventDescDetail").innerHTML = response.data[0].discription.toString();
        $("#youtubeEvent").attr("src", response.data[0].youtubeLive.toString());
        $("#rocketEvent").attr("src", response.data[0].rocketChat.toString());
      });
  }
  else{
    document.location = "login.html";
  }