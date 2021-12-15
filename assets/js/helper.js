

function getMessageEncoded(message) {
    
    let enc = new TextEncoder();
    return enc.encode(message);
  }
  

  function getMessageDecoded(message) {
    let dec = new TextDecoder();
    return dec.decode(message)

  }

  //returns and decoded array
function getLocalStorageArray(key) {

  try{
      let data = localStorage.getItem(key)
      data=data.split(',')
      let a8rr = new Uint8Array(data.length)
      for(var i = 0; i < data.length; i++){
        //   console.log(data[i].toString())
          a8rr[i] = data[i].toString()
            // console.log(a8rr)
              
      }
      return getMessageDecoded(a8rr)

    } catch(e){return null}
}




//stores value in local storage that has been encoded
function setLocalStorage(key, value){
      localStorage.setItem(key, getMessageEncoded(value))

}


function IsUserRegistered(user) {
    check = localStorage.getItem(user)
    // console.log(check)
     return (check===null ? 0:1)

}


//function to check if user came to page from same session login was initiated from.


$(document).ready(() => {
    var loggedIn = sessionStorage.getItem('isLoggedIn');
    // console.log("loggedIn var = " +loggedIn)   
    var url = "./loginPageUI.html";
    var pageName = sessionStorage.getItem('pageName');
    var location = window.location.href;
    // console.log("page auth test")
    // console.log(window.location.href)
    // console.log(location)
    // console.log("pageName = " +sessionStorage.getItem('pageName'))
    if (loggedIn === null && ((pageName === null)) && !location.includes("login")) {
      console.log("log in was not verified");
      window.location.href = url;

    }
  })




