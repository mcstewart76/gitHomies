//create a search textbox that allows users to search githubs api to find other users
//create a search textbox that allows users to search gitlabs api to find other users

//https://api.github.com/users/[user]



// submitBtn = document.getElementById("search-btn")
// .click('#search-btn', friendMatch())
// function friendMatch(input){
//     searchBox = document.getElementById("friend-search")
//     searchBox.innerHTML = '';
//     if (input == ''){
//         return "clicked";
//     }
// }

$("#searchHomieBTN").on("click", function(event){
event.preventDefault();
var textbox = $("#searchHomieTB").val();
gitHub_GetUserData_Async(textbox).then((input) => {
   // console.log(input)
 login_name = input.login;
 
 console.log(login_name)
    });
});


// let icon = '';
// fetch('https://api.github.com/users/' + input).then(
//     function(response){
//         console.log(response)
//         return response.json();  
//     })//.then(function(data)){add list items here}

// }


// var card = $("#avatarimage")

// showAvatar('ernestotham').then((val) => {
//     console.log(val)
//     card.append(`<a class="navbar-brand" href="#"><img id=homieavatar src=${val} alt="avatar"></a>`)
    
//     });
    


    





    



//create pull latest repos from array list
//get readme content for user
// var tempFrienLsit = {}
// function getGithubReadme(){


// }

