//create a search textbox that allows users to search githubs api to find other users
//create a search textbox that allows users to search gitlabs api to find other users

//https://api.github.com/users/[user]
submitBtn = document.getElementById("search-btn")
.click('#search-btn', friendMatch())
function friendMatch(input){
    searchBox = document.getElementById("friend-search")
    searchBox.innerHTML = '';
    if (input == ''){
        return "clicked";
    }
}
// let icon = '';
// fetch('https://api.github.com/users/' + input).then(
//     function(response){
//         console.log(response)
//         return response.json();  
//     })//.then(function(data)){add list items here}

// }