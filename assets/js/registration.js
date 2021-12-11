
var usernameTb = $('#exampleUsername1')
var usernameHelpLBL = $('#usernameHelp')
var passwordTb = $('#exampleInputPassword1')
var registrationBtn = $('#registrationbtn')


registrationBtn.on('click',function(event){
    
    event.preventDefault();
    
    if(passwordTb.val()===''){
        usernameHelpLBL.text("password cannot be blank") 
        usernameHelpLBL.addClass("alert alert-danger")
        console.log("password cannot be blank")


    }

    else if(usernameTb.val()===''){
        usernameHelpLBL.text("Username cannot be blank") 
        usernameHelpLBL.addClass("alert alert-danger")
        console.log("Username cannot be blank")


    }

    else if(IsUserRegistered(usernameTb.val())===0){
        setLocalStorage(usernameTb.val(),passwordTb.val())
        console.log("user registered")
        window.location.href = "./logInPageUI.html";
        
    }


    else{
        usernameHelpLBL.text("User is already registered") 
        usernameHelpLBL.addClass("alert alert-danger")
        console.log("User is already registered")

    }

})