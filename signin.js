$('#joelSampleTest').click(function(){
    var settings = {
        "url": "https://karunyaevent.herokuapp.com/user/login",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({"emailId":"saasas@gmail.com","password":"sasasasas"}),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
});

