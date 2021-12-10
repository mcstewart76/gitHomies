//create a search textbox that allows users to search githubs api to find other users
//create a search textbox that allows users to search gitlabs api to find other users

//https://api.github.com/users/[user]
function friendMatch(input){
    if (input == ''){
        return;
    }
fetch('https://api.github.com/users/' + input).then(
    function(response){
        console.log(response)
        return response.json();  
    })//.then(function(data)){add list items here}

}
