// gitHub_GetUserData_Async(textbox).then((input) => {
//     // console.log(input)
//   login_name = input.login;
  
//   console.log(login_name)
//      });


 



    //  var collabs = JSON.parse(localStorage.getItem('collabs'))
  


    // collabs.forEach(element => {
        

    //     console.log(element.login)
    //     gitHub_GetUserRepos_Async(element.login).then((repos) => {  
            
            
    //         for(var i = 0; i < repos.length; i++)  {      
    //             console.log("homie: "+JSON.stringify(repos[i].login));
    //             console.log("repo name: "+repos.name);
    //             console.log("repo description: "+repos.description);
    //             console.log("repo created: "+repos.created_at);
    //             console.log("repo url: "+repos.svn_url);
    //             console.log("repo watchers: "+repos.watchers_count);
    //             console.log(`readme url: https://raw.githubusercontent.com/${repos.login}/${repos.name}/main/README.md`);

    //              }
        
        
        
        
        
    //     })})
       


    // repos.name


    let tmp
    gitHub_GetUserRepos_Async('ernestotham').then((repos) => {  
            
            tmp = repos
        for(var i = 0; i < repos.length; i++)  {      
            console.log("homie: "+repos[i].owner.login);
            console.log("repo name: "+repos[i].name);
            console.log("repo description: "+repos[i].description);
            console.log("repo created: "+repos[i].created_at);
            console.log("repo url: "+repos[i].svn_url);
            console.log("repo watchers: "+repos[i].watchers_count);
            console.log(`readme url: https://raw.githubusercontent.com/${repos[i].owner.login}/${repos[i].name}/main/README.md`);

            
            gitHub_GetReadme_MD_Async(`${repos[i].owner.login}`, `${repos[i].name}`).then((val) => {

                console.log(val)

            })
            
             }
    
    
            
    
    
    })