$("#signupbtn").click(function (e) {  
    e.preventDefault();

    var emailId = $('#emailUserSign').val();  
    var password = $('#passwordUserSign').val();  
    var userName = $('#userNameSign').val();  
    var name = $('#nameUserSign').val();
    $.ajax({  
        url: 'https://karunyaevent.herokuapp.com/user/signup',  
        type: 'POST', 
        contentType: "application/json; charset=utf-8",
        dataType: 'json',  
        data: JSON.stringify({"name":name,"password":password,"username":userName,"email":emailId}), 
        // headers: {
        //     'Authorization': `Bearer ${data.token}`,
        // }, 
        success: function (data, textStatus, xhr) {  
        console.log(data.message);
        if (data.message == "New Account Created") {
            $.ajax({  
                url: 'https://karunyavideo.live/api/v1/users.register',  
                type: 'POST', 
                contentType: "application/json",
                dataType: 'json',  
                data: JSON.stringify({"name":name,"pass":password,"email":emailId,"username":userName}), 
                // headers: {
                //     "Access-Control-Allow-Origin": "https://karunya.live/",
                // }, 
                success: function (data, textStatus, xhr) {  
                    if(data.success == true) {
                        document.location = "login.html";
                    }
                },  
                error: function (xhr, textStatus, errorThrown) {  
                    console.log('Error in Operation for rocketchat API');  
                }  
            });
        }
    },
        error: function (xhr, textStatus, errorThrown) {  
            console.log('Error in Operation for karunyaevent API');  
        }  
    });  
}); 



