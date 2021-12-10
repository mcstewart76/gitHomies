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


function gitHub_GetUserData_Async(githubuser){
    var url = 'https://api.github.com/users/'+githubuser

    try {
    	const response = await fetch(URL)
    	const data = await response.json()
        console.log(data)
    } catch (err) {
       console.log(err)
    }

    return data

}


function gitHub_GetFollowers_Async(githubuser){
    var url = 'https://api.github.com/users/'+githubuser+'/followers'

    try {
    	const response = await fetch(URL)
    	const data = await response.json()
        console.log(data)
    } catch (err) {
       console.log(err)
    }

    return data

}


function gitHub_GetFollowing_Async(githubuser){
    var url = 'https://api.github.com/users/'+githubuser+'/following'

    try {
    	const response = await fetch(URL)
    	const data = await response.json()
        console.log(data)
    } catch (err) {
       console.log(err)
    }

    return data

}


function gitHub_GetUserRepos_Async(githubuser){
    var url = 'https://api.github.com/users/'+githubuser+'/repos'

    try {
    	const response = await fetch(URL)
    	const data = await response.json()
        console.log(data)
    } catch (err) {
       console.log(err)
    }

    return data

}


