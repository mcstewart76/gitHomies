//  document.getElementById("signinbtn").onclick = function () {
//         window.location.href = "logInPage.UI.html";
//  };

//  document.getElementById("registerbtn").onclick = function () {
//     window.location.href = "registration.html";
// };
$("#registerbtn").on("click", function(event){
       event.preventDefault();
       window.location.href = "registration.html";
   });
$("#signinbtn").on("click", function(event){
       event.preventDefault();
       window.location.href = "logInPage.UI.html";
});