$("#signinbtn").click(function (e) {  
        e.preventDefault();

        var emailId = $('#emailUser').val();  
        var password = $('#passwordUser').val();  
        // console.log(emailId);   
        // console.log(person.emailId);
        // console.log(person.password);
        // obj = `{"emailId":"${emailId}","password":"${password}"}`;
        // raw = `{"emailId":"${emailId}","password":"${password}"}`;
        // let rawData = raw;
        // console.log(JSON.stringify(obj));
        $.ajax({  
            url: 'https://karunyaevent.herokuapp.com/user/login',  
            type: 'POST', 
            contentType: "application/json; charset=utf-8",
            dataType: 'json',  
            data: JSON.stringify({"emailId":emailId,"password":password}), 
            // headers: {
            //     'Authorization': `Bearer ${data.token}`,
            // }, 
            success: function (data, textStatus, xhr) {  
              console.log(data.message);
                    if (data.message == "Auth successful") {
                        document.location = "eventpage.html";
                   }
        
            },  
            error: function (xhr, textStatus, errorThrown) {  
                console.log('Error in Operation');  
            }  
        });  
    });  
