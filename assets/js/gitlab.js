var gitlabUserData = '';
// async function searchGitLabFriends(username){
//     var Url = "https://gitlab.com/api/v4/users?username="+username;
//     fetch(Url)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         console.log(data.login);
//         gitlabUserData = data;
//     })
// }
async function searchGitLabFriends(gitlabuser){
    var url = `https://gitlab.com/api/v4/users?username=${gitlabuser}`
    // console.log(url)
    
    let response = await fetch(url)
    let gitlabUser = await response.json();
    console.log(gitlabUser)
    return gitlabUser
   
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

