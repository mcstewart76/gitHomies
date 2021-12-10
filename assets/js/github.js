var githubUserData = '';
function searchFriends(username){
    var Url = "https://api.github.com/users/" + username;
    fetch(Url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.login);
        githubUserData = data;
    })
}
