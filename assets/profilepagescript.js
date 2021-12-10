var search = document.getElementById("Search");
var searchButton = document.getElementById("SearchButton");
var profileInfo = document.getElementById("ProfileInfo");

function getApis(username){
    var Url = "http://api.github.com/users/" + username;
    fetch(Url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.avatar_url);
        console.log(data.bio);
        console.log(data.repos_url);
        console.log(data.following_url);
        profileInfo.textContent = data.bio
    })
}



searchButton.addEventListener("click", function() {
    getApis(search.value)
})