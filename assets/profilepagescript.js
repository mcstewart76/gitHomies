var search = document.getElementById("Search");
var searchButton = document.getElementById("SearchButton");
var profileInfo = document.getElementById("ProfileInfo");

// function getApis(username){
//     var Url = "http://api.github.com/users/" + username;
//     fetch(Url)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         console.log(data.avatar_url);
//         console.log(data.bio);
//         console.log(data.repos_url);
//         console.log(data.following_url);
//         profileInfo.textContent = data.bio
//     })
// }

function getAvatar(username){
    var Url = "https://api.github.com/users/" + username + "/avatar";
    fetch(Url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.avatar_url);
        profileInfo.textContent = data.avatar
    })
}

function getBio(username){
    var Url = "https://api.github.com/users/" + username + "/bio";
    fetch(Url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.bio);
        profileInfo.textContent = data.bio
    })
}

function getRepos(username){
    var Url = "https://api.github.com/users/" + username + "/repos";
    fetch(Url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.repos_url);
        profileInfo.textContent = data.repos
    })
}


searchButton.addEventListener("click", function() {
    getAvatar(search.value)
    getBio(search.value)
    get(search.value)
})

// var avatar = null;
// var bio = null;
// var repos = null;


// // Make api request for user Avatar information
// async function getAvatar(username){
//     var Url = "https://api.github.com/users/" + username + "/avatar";
//     return await fetch(Url)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         return data;
//     })
// }

// // Make api request for user Bio information
// async function getBio(username){
//     var Url = "https://api.github.com/users/" + username + "/bio";
//     return await fetch(Url)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         return data;
//     })
// }

// // Make api request for user Repo information
// async function getRepos(username){
//     var Url = "https://api.github.com/users/" + username + "/repos";
//     return await fetch(Url)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         return data;
//     })
// }

// // Render HTML element for list of repos
// function renderRepos(username, repos) {

//     var container = document.getElementById( "repoContainer" );

//     repos.forEach( async (r) => {
//         var commits = await getCommits( username, r.name );

//         var eleContainer = document.createElement("div");
//         eleContainer.innerHTML = r.full_name;
//         eleContainer.style.padding = "20px";

//         var image = document.createElement( "img" );
//         image.src = r.owner.avatar_url;
//         image.style.width = "50px";
//         image.style.float = "left";
//         image.style.borderRadius = "50%";

//         var commitsContainer = document.createElement( "div" );
        
//         commitsContainer.style.marginLeft = "40px";

//         if(commits != null) {
//             commits.forEach((c) => {
//                 commitsContainer.appendChild( renderCommit(c) );
//             });
//         }

//         container.appendChild(image);
//         eleContainer.appendChild( commitsContainer );
//         container.appendChild(eleContainer);
        
//     } );
// }







