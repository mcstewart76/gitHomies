

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
            console.log("repo branch: "+repos[i].default_branch);
            console.log(`readme url: https://raw.githubusercontent.com/${repos[i].owner.login}/${repos[i].name}/${repos[i].default_branch}/README.md`);

            var owner = `${repos[i].owner.login}`
            var repo = `${repos[i].name}`
            var branch = `${repos[i].default_branch}`
            
            gitHub_GetReadme_MD_Async2(owner, repo, branch).then((readme) => { 
        
                console.log(readme)
               
            })
        
            
             }
    
    
            
    
    
    })



   
