//setting variables
var attempt = 3;
var userName = $('#exampleUsername1')
var passwd = $('#exampleInputPassword1')
var usernameBL = $('#exampleUsername')
var loginBtn = $('#signinbtn')
// var userNameStored = getLocalStorageArray(user)
// console.log(userNameStored)

// var passwdStored = getLocalStorageArray(userName.val())


function validate() {
    var passwdStored = getLocalStorageArray(userName.val())
    console.log(passwd.val())
    console.log(passwdStored)
    if ( passwd.val() === passwdStored) {
        // usernameHelpLBL.text("Login Success");
        console.log("passwds match logic check")
        window.location = "wallUI.html"; // redirect to main page
        return false;
    }
    else{
        attempt --;//Decrement attempts allowed
        console.log(attempt);
        // usernameLBL.text("You have "+attempt+" left");
        console.log("You have "+attempt+" left");

        if( attempt == 0) {
            userName.disabled = true;
            passwd.disabled = true;
            loginBtn.disabled = true;
            return false;
        }
    }
}


loginBtn.on('click',function() {
    console.log("button was clicked")
    validate()
})