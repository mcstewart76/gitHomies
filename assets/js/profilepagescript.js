var search = document.getElementById("Search");
var searchButton = document.getElementById("SearchButton");
var bioCard = document.getElementById("biocard");
var userName = localStorage.getItem('idName');
var proPic = document.getElementById("propic");
var userRepos = document.getElementById("repowallcard");

// adds event listener to button id
// searchButton.addEventListener("click", function() {
//     searchfunction(localStorage.getItem('idName'))
// })

searchfunction(localStorage.getItem('idName'))


// calls search function passing parameter of the getApis function 
async function searchfunction(gitusername) {
    getApis(gitusername);
    var Repos = await getRepos(gitusername);
    renderRepos(Repos);
    $("#Search").text(gitusername);
}

// Make Api Request for User Information and renders bio and avatar info
function getApis(userName){
    var Url = "http://api.github.com/users/" + userName;
    fetch(Url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        userData = data;
        // console.log(data);
        // console.log(data.avatar_url);
        // console.log(data.bio);
        // console.log(data.repos_url);
        bioCard.textContent = data.bio;
        proPic.src = data.avatar_url;
    })
}

// Make api request for user information
async function getRepos(username){
    var Url = "https://api.github.com/users/" + username + "/repos";
    return await fetch(Url)
    .then(response => {
        return response.json();
    })
}

// cycles through array to target and append the repo full name and also targets the html url and appends it to the repo name div
function renderRepos(repos){
    for(var i = 0; i < repos.length; i++) {

        var eleContainer = document.createElement("div");
        eleContainer.innerHTML = repos[i].full_name;
        eleContainer.style.padding = "20px";
        var link = document.createElement("a");
        link.href = repos[i].html_url;
        link.innerHTML = "Visit Repository";
        eleContainer.appendChild(link);
        userRepos.appendChild(eleContainer);
        }
}
$("#gitHomiesLogo").on("click", function(event){
    event.preventDefault();
    window.location.href = "./wallUI.html";
    });













