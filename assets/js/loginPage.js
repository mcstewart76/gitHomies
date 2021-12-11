//setting variables
var attempt = 3;
var userName = $('#exampleUsername1')
var passwd = $('#exampleInputPassword1')
var usernameHelpLBL = $('#usernameHelp')
var loginBtn = $('#signinbtn')
// var userNameStored = getLocalStorageArray(user)
// console.log(userNameStored)

var passwdStored = getLocalStorageArray(userName.val())


function validate() {
    console.log(passwd.val)
    console.log(passwdStored)
    if ( passwd.val() === passwdStored) {
        usernameHelpLBL.text("Login Success");
        window.location = "wallUI.html"; // redirect to main page
        return false;
    }
    else{
        attempt --;//Decrement attempts allowed
        console.log(attempt);
        usernameHelpLBL.text("You have "+attempt+" left");

        if( attempt == 0) {
            userName.disabled = true;
            passwd.disabled = true;
            loginBtn.disabled = true;
            return false;
        }
    }
}


loginBtn.on('click',function() {
    validate()
})