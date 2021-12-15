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
            var friendbtn = `<button  class="btn btn-link btn-sm homie-found m-2">${login_name}</button>`
            var addFriend = ` <button class="btn btn-link btn-sm add-friend ">+</button>`
            
            $("#homieBtns").append(friendbtn);
            $("#homieBtns").append(addFriend);
                $(".homie-found").on("click", function(event){
                    event.preventDefault();
                    window.location.href = `${userURL}`;
                });
            $(".add-friend").hover(function(){
                $(this).html("Add Homie");
            },function(){
                    $(this).html("+");
            });
            $(".add-friend").on("click", function(event){
                event.preventDefault();
                console.log("homie added")
            });
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

$(document).ready(function(e) {
var item = localStorage.getItem('idName')
gitHub_GetRepoCollabs_Async(item).then((input) => {
    // collabs = input.login;   
    localStorage.setItem('collabs', JSON.stringify(input)); 
    // console.log(input[0].login)
    $.each(input, function(i, item) {
        console.log(item.login);
        
        $("#collabs").append(`<div>${item.login}</div>`);
        //$("#collabs").append(item.login)  //toying with 
        ;
    });
});
});


// Mike adding for collab card


//Ernesto working on Wall content for Homie repos

//step 1  get homies from local storage
var collabs = JSON.parse(localStorage.getItem('collabs'))
  

    let totalcount = 1
    collabs.forEach(element => {
        
        
        console.log(element.login)
        gitHub_GetUserRepos_Async(element.login).then((repos) => {  
            
            
            for(var i = 0; i < repos.length; i++)  {      
                console.log("homie: "+repos[i].owner.login);
                console.log("repo name: "+repos[i].name);
                console.log("repo description: "+repos[i].description);
                console.log("repo created: "+repos[i].created_at);
                console.log("repo url: "+repos[i].svn_url);
                console.log("repo watchers: "+repos[i].watchers_count);
                try{
                console.log(`readme url: https://raw.githubusercontent.com/${repos[i].owner.login}/${repos[i].name}/${repos[i].default_branch}/README.md`);
                }
                catch (err) {
                  console.log("readme does not exit")
               }
                

               var html = `<tr>
               <th scope="row">${totalcount}</th>
                     <td>
 
                         <div id="HomiesRepo" class="card">
                           <div class="card-body">
                           <h5 class="repo-title">Repo: ${repos[i].name}</h5>
                           <h6 class="repo-subtitle mb-2 text-muted">Description: ${repos[i].description}</h6>
                           <h5 class="repo-title">Owner: ${repos[i].owner.login}</h5>
                           <h5 class="repo-title">Date: ${repos[i].created_at}</h5>
                           <h5 class="repo-title">Link: ${repos[i].svn_url}</h5>
                           <h5 class="repo-title">Watch Count: ${repos[i].watchers_count}</h5>
                             
                           </div>
                         </div>
 
                         </td>
                         <td>
                     
 
                         <div id="onlineHomies" class="card">
                           <div class="card-body">
                             <h5 class="repo-title">ReadMe</h5>
                             
                             <section id="readme" class="card-text text-center .${repos[i].name}${totalcount}">
                             
                             </section>
                           </div>
                         </div>
 
 
                   </td>`
 
                //${repoText}
                $(".HomieReposTBLBody").append(html)

                
                async function get_readme(githubuser, repo, branch){

                  var url = `https://raw.githubusercontent.com/${githubuser}/${repo}/${branch}/README.md`
                  
                  fetch(url)
                      // let readmeMD = await response;
                      // console.log(githubCollab)
                      
                     .then(async response => { 
                        console.log(await response.text())
                        console.log(await response.statusText)
                          html2 = `${await response.toString().split()}`
                          console.log()
                          var tag = document.querySelectorAll("#readme")[totalcount-1]
                          tag.append(html2)
                      })
                      response.catch(error => {
                        console.error(error)
                      })
                  
                  }
              
                  get_readme(`${repos[i].owner.login}`, `${repos[i].name}`, `${repos[i].default_branch}`)

             
                // var promise = get_readme(`${repos[i].owner.login}`, `${repos[i].name}`, `${repos[i].default_branch}`)
                //         promise.then(githubRepo => new Promise((resolve, reject) => {
                //           html2 = `<p>${readme.toString().split()}</p>`
                //           document.querySelectorAll("#readme")[totalcount-1].append(html2)
                //         }))
                //         .catch(error => document.querySelectorAll("#readme")[totalcount-1].append("<p>No readMe for this repo</p>"));
                  

                totalcount++  

         

            }//closes forloop
        });
    });


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
            
