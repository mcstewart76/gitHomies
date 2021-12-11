//setting variables
var attempt = 5;
var userName = $('#exampleUsername1')
var passwd = $('#exampleInputPassword1')
var usernameBL = $('#exampleUsername')
var usernameHelpEl = $('#usernameHelp')
var loginBtn = $('#signinbtn')

function validate() {
    var passwdStored = getLocalStorageArray(userName.val())
    console.log(passwd.val())
    console.log(passwdStored)
    if ( passwd.val() === passwdStored) {
        // usernameHelpLBL.text("Login Success");
        console.log("passwds match logic check")
        window.location.href = '/wallUI.html'; // redirect to main page
        return false;
    }
    else{
        attempt --;//Decrement attempts allowed
        console.log(attempt);
        usernameHelpEl.text("Username or Password not recognized. You have "+attempt+" attempts left");
        // console.log("You have "+attempt+" left");

        if( attempt == 0) {
            userName.disabled = true;
            passwd.disabled = true;
            loginBtn.disabled = true;
            return false;
        }
        return true;
    }
}


loginBtn.on('click',function(e) {
    e.preventDefault();
    console.log("button was clicked")
    validate()
})