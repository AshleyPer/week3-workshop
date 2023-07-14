$(document).ready(function(){
    console.log( "ready!" );
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    })
})

function ajaxPost(){
    // Prepare Form Data from web form
    var formData = {
        email : $("#email").val(),
        upwd : $("#upwd").val()
    }
    $.ajax({ // DO AJAX POST
        type : "POST",
        contentType : "application/json",
        url : window.location + "api/login",
        data : JSON.stringify(formData),
        dataType : "json",
        success : function(customer){
            if(customer.valid == true){
                $("#errormsg").removeClass("showmessage");
                $("#errormsg").addClass("hidemessage");
                $("#successmsg").removeClass("hidemessage");
                $("#successmsg").addClass("showmessage");
                $("#successmsg").append(`<p><br>Email Address: ${customer.email}</br>Password: ${customer.upwd}</br></p>`)
            }else{
                $("#errormsg").removeClass("hidemessage");
                $("#errormsg").addClass("showmessage");
                $("#successmsg").removeClass("showmessage");
                $("#successmsg").addClass("hidemessage");
            }
        },
        error : function(e){
            alert("Error!")
            console.log("ERROR: ", e);
        }
    });

    // Reset FormData after Posting
    resetData();
}

function resetData(){
    $("#email").val("");
    $("#upwd").val("");
}