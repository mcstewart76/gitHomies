var githubUserData = '';
function searchGitLabFriends(username){
    var Url = "https://gitlab.com/api/v4/users?username="+username;
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



var Gitlabhomierepos=''
function GitLabGetHomieRepos(username){
    var Url = `https://gitlab.com/api/v4/users/:${username}/projects`
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

