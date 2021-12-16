

// let tmp
// gitHub_GetUserRepos_Async('ernestotham').then((repos) => {  

//         tmp = repos
//     for(var i = 0; i < repos.length; i++)  {      
//         console.log("homie: "+repos[i].owner.login);
//         console.log("repo name: "+repos[i].name);
//         console.log("repo description: "+repos[i].description);
//         console.log("repo created: "+repos[i].created_at);
//         console.log("repo url: "+repos[i].svn_url);
//         console.log("repo watchers: "+repos[i].watchers_count);
//         console.log("repo branch: "+repos[i].default_branch);
//         console.log(`readme url: https://raw.githubusercontent.com/${repos[i].owner.login}/${repos[i].name}/${repos[i].default_branch}/README.md`);

//         var owner = `${repos[i].owner.login}`
//         var repo = `${repos[i].name}`
//         var branch = `${repos[i].default_branch}`

//         gitHub_GetReadme_MD_Async2(owner, repo, branch).then((readme) => { 

//             console.log(readme)

//         })


//          }





// })





gitHub_GetUserRepos_Async('ernestotham').then((repos) => {


    for (var i = 0; i < repos.length; i++) {
        console.log("homie: " + repos[i].owner.login);
        console.log("repo name: " + repos[i].name);
        console.log("repo description: " + repos[i].description);
        console.log("repo created: " + repos[i].created_at);
        console.log("repo url: " + repos[i].svn_url);
        console.log("repo watchers: " + repos[i].watchers_count);
        try {
            console.log(`readme url: https://raw.githubusercontent.com/${repos[i].owner.login}/${repos[i].name}/${repos[i].default_branch}/README.md`);
        }
        catch (err) {
            console.log("readme does not exit")
        }

       htmlrepoinfo = `<h5 class="repo-title">Repo: ${repos[i].name}</h5>
       <h6 class="repo-subtitle mb-2 text-muted">Description: ${repos[i].description}</h6>
       <h5 class="repo-title">Owner: ${repos[i].owner.login}</h5>
       <h5 class="repo-title">Date: ${repos[i].created_at}</h5>
       <h5 class="repo-title">Link: ${repos[i].svn_url}</h5>
       <h5 class="repo-title">Watch Count: ${repos[i].watchers_count}</h5>`
       console.log(htmlrepoinfo)


        gitHub_GetReadme_MD_Async2(`${repos[i].owner.login}`, `${repos[i].name}`, `${repos[i].default_branch}`).then((readme) => {
            
            console.log(readme.toString())
          //  console.log(`${repos[i].name}`)

            repoText = readme.toString().split()
            console.log(readme)


            var html = `<tr>
            <th scope="row">1</th>
                  <td>

                      <div id="HomiesRepo" class="card">
                        <div class="card-body">
                        ${htmlrepoinfo}
                          
                        </div>
                      </div>

                      </td>
                      <td>
                  

                      <div id="onlineHomies" class="card">
                        <div class="card-body">
                          <h5 class="repo-title">ReadMe</h5>
                          
                          <section id="readme" class="card-text text-center">
                          <p>${repoText}</p>
                          </section>
                        </div>
                      </div>


                </td>`

                $(".HomieReposTBLBody").append(html)



        }) //asyn function






        // totalcount++  
        

    } //end for loop


    



})





function get_readme(){

var url = 'https://raw.githubusercontent.com/mcstewart76/gitHomies/main/README.md'

let response = fetch(url)
    // let readmeMD = await response;
    // console.log(githubCollab)
    
    response.then(response => { 
      console.log(response)
      console.log(response.statusText)
    })
    response.catch(error => {
      console.error(error)
    })

}





