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


//Search Functionality
$("#SearchHomieBTN").on("click", function(event){
    event.preventDefault();
    //console.log('submitclicked')
    if($("#GitHub-Search").hasClass("githubHovered")){
        var textbox = $("#searchHomieTB").val();     
        gitHub_GetUserData_Async(textbox).then((input) => {
    // console.log(input)
        login_name = input.login;
        userURL = input.html_url;
        console.log(login_name);
        console.log(userURL)
        // <div id="homieBtns">
        //           <button  class="btn btn-link btn-sm homie-found m-2">Jimbob</button>
        //           <button class="btn btn-link btn-sm add-friend ">add friend</button>
        // </div>
        });
    }
    if($("#GitLab-Search").hasClass("gitlabHovered")){
        var textbox = $("#searchHomieTB").val(); 
        gitLab_GetUserData_Async(textbox).then((input) => {
            // console.log(input)
                login_name = input.login;
            
                console.log(login_name);
        });
    }
});


//github search logic stay lit, appends class to use below
$("#GitHub-Search").on("click", function(event){
    event.preventDefault();
    console.log("its lit")
    $("#GitHub-Search").addClass("githubHovered")
    $("#GitLab-Search").removeClass("gitlabHovered")
    });
//gitlab search stays lit, appends class to use below
$("#GitLab-Search").on("click", function(event){
    event.preventDefault();
    console.log("its lit")
    $("#GitHub-Search").removeClass("githubHovered")
    $("#GitLab-Search").addClass("gitlabHovered")
    });
var gitButts = document.querySelectorAll('label button');
//appends username to top right of wall page, allows onclick to redirect to profile page
$("#usernamebtn").text(localStorage.getItem('idName'))
$("#usernamebtn").on("click", function(event){
    event.preventDefault();
    window.location.href = "./profilePage.html";
    });


// Mike adding for collab card




//step 2 append content to wall table


//Ernesto working on Wall content for Homie repos






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
    
    

//var temp = showAvatar()
    



//create pull latest repos from array list
//get readme content for user
// var tempFrienLsit = {}
// function getGithubReadme(){


// }

