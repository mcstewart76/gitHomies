

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
      let data = localStorage.getItem(key)
      data=data.split(',')
      let a8rr = new Uint8Array(data.length)
      for(var i = 0; i < data.length; i++){
        //   console.log(data[i].toString())
          a8rr[i] = data[i].toString()
            // console.log(a8rr)
      }
    return getMessageDecoded(a8rr)

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


function writeCookie(name,value,days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
            }else{
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return '';
}