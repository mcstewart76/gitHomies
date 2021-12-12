var search = document.getElementById("Search");
var searchButton = document.getElementById("SearchButton");
var profileInfo = document.getElementById("ProfileInfo");
var userName = search.value;


// Make Api Request for User Information
function getApis(username){
    var Url = "http://api.github.com/users/" + username;
    fetch(Url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        userData = data;
        console.log(data);
        console.log(data.avatar_url);
        console.log(data.bio);
        console.log(data.repos_url);
        console.log(data.following_url);
        profileInfo.textContent = data.bio
    })
}

// let githubresponse = await fetch('http://api.github.com/users/${user}');
// let githubUser = await githubResponse.json();

// return githubUser.avatar_url;
// return githubUser.bio;
// return githubUser.repos_url;
// }

// var card = $("avatarimage")

// showAvatar('jack-bartlett').then(val) => {
//     console.log(val)
//     card.append
// }



searchButton.addEventListener("click", function() {
    // getAvatar(search.value)
    // getBio(search.value)
    getApis(search.value)
})

// var avatar = null;
// var bio = null;
// var repos = null;




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







