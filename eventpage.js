  if (sessionStorage.getItem('status') != null) { 
    var settings = {
      "url": "https://karunyaevent.herokuapp.com/event/listevent",
      "method": "GET",
      "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      document.getElementById("eventTitle").innerHTML = response.data[0].title.toString();
    });
  }
  else{
    document.location = "signin.html";
  }