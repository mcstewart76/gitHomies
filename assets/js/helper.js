

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

