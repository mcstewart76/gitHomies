//setting variables
var attempt = 5;
var userName = $('#exampleUsername1')
var id = userName.val()
var passwd = $('#exampleInputPassword1')
var usernameBL = $('#exampleUsername')
var usernameHelpEl = $('#usernameHelp')
var loginBtn = $('#signinbtn')
var registerBtn = $('#registrationbtn')

function validate() {
    var passwdStored = getLocalStorageArray(userName.val())
    // console.log(passwd.val())
    // console.log(passwdStored)
    if ( passwd.val() === passwdStored) {
        // usernameHelpLBL.text("Login Success");
        // console.log("passwds match logic check")
        window.location.href = '/wallUI.html'; // redirect to main page
        return false;
    }
    else{
        attempt --;//Decrement attempts allowed
        console.log(attempt);
        usernameHelpEl.text("Username or Password not recognized. You have "+attempt+" attempts left");
        // console.log("You have "+attempt+" left");

        if( attempt === 0) {
            document.getElementById("exampleUsername1").disabled = true;
            document.getElementById("exampleInputPassword1").disabled = true;
            document.getElementById("signinbtn").disabled = true;
            return false;
        }
        return true;
    }
}


//function to set username to variable
function setusername() {
    localStorage.setItem('idName',userName.val());
}


//function to begin validation of session
//check on logged in state (i.e. auth) so that if navigating to different tab the session no longer exists.

function beginSession() {
    sessionStorage.setItem('isLoggedIn',userName.val());
}

function setPageName() {
    sessionStorage.setItem('pageName','login');
}


loginBtn.on('click',function(e) {
    e.preventDefault();
    console.log("button was clicked")
    setusername()
    setPageName()
    beginSession()
    validate()
})

//function to redirect to registration page if no username created
registerBtn.on('click',function(e) {
    e.preventDefault();
    window.location.href = '/registration.html'
})