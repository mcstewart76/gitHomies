
//Search Functionality
$("#SearchHomieBTN").on("click", function (event) {
    event.preventDefault();
    //console.log('submitclicked')

    if ($("#GitHub-Search").hasClass("githubHovered")) {
        var textbox = $("#searchHomieTB").val();
        gitHub_GetUserData_Async(textbox).then((input) => {
            // console.log(input)
            login_name = input.login;
            userURL = input.html_url;
            console.log(login_name);
            console.log(userURL)
            var friendbtn = `<button  class="btn btn-link btn-sm homie-found mx-auto justify-content-center m-2 ${login_name}">${login_name}</button>`
            var addFriend = ` <button class="btn btn-link btn-sm add-friend mx-auto justify-content-center">+</button>`

            if ($(`.${login_name}`).length === 0) {
                $("#homieBtns").empty();
                $("#homieBtns").append(friendbtn);
                $("#homieBtns").append(addFriend);
            }

            $(".homie-found").on("click", function (event) {
                event.preventDefault();
                window.location.href = `${userURL}`;
            });
            $(".add-friend").hover(function () {
                $(this).html("Add Homie");
            }, function () {
                $(this).html("+");
            });
            $(".add-friend").on("click", function (event) {
                event.preventDefault();
                console.log("homie added")
                if ($(`#${login_name}`).length === 0) {
                    $("#collabs").append(`<div id="${login_name}">${login_name}</div>`);
                    gitHub_GetUserData_Async(`${login_name}`).then((input) => {
                        // console.log(input)
                        login_name = input.login;
                        console.log(login_name)
                        var itemsGathered = JSON.parse(localStorage.getItem("collabs"))
                        console.log(itemsGathered)
                        itemsGathered.push(input)
                        localStorage.setItem("collabs", JSON.stringify(itemsGathered))

                    });

                } else {
                    var existHomie = ` <div class="btn btn-sm add-friend my-2">${login_name} is already a homie</div>`
                    $("#homieBtns").empty();
                    $("#homieBtns").append(existHomie);
                }

            });
        });
    }

    if ($("#GitLab-Search").hasClass("gitlabHovered")) {
        var textbox = $("#searchHomieTB").val();
        gitLab_GetUserData_Async(textbox).then((input) => {
            // console.log(input)
            login_name = input.login;

            console.log(login_name);
        });
    }
});


//github search logic stay lit, appends class to use below
$("#GitHub-Search").on("click", function (event) {
    event.preventDefault();
    console.log("its lit")
    $("#GitHub-Search").addClass("githubHovered")
    $("#GitLab-Search").removeClass("gitlabHovered")
});
//gitlab search stays lit, appends class to use below
$("#GitLab-Search").on("click", function (event) {
    event.preventDefault();
    console.log("its lit")
    $("#GitHub-Search").removeClass("githubHovered")
    $("#GitLab-Search").addClass("gitlabHovered")
});

//appends username to top right of wall page, allows onclick to redirect to profile page
$("#usernamebtn").text(localStorage.getItem('idName'))
$("#usernamebtn").on("click", function (event) {
    event.preventDefault();
    window.location.href = "./profilePage.html";
});

// Mike adding for collab card

$(document).ready(function (e) {
    var item = localStorage.getItem('idName')
    gitHub_GetRepoCollabs_Async(item).then((input) => {
        // collabs = input.login;
        if (localStorage.getItem("collabs") === null) {
            localStorage.setItem('collabs', JSON.stringify(input));
        }

        // console.log(input[0].login)
        collabs.forEach(item => {
            console.log(item.login);
            var login_name = item.login;
            $("#collabs").append(`<div id="${login_name}">${item.login}</div>`);
            //$("#collabs").append(item.login)  //toying with 
            ;
            // $(document).ready(() => {
            //         var item = localStorage.getItem('idName');
            //         gitHub_GetRepoCollabs_Async(item).then((input) => {
            //             // collabs = input.login;   
            //             localStorage.setItem('collabs', JSON.stringify(input));
            //             // console.log(input[0].login)
            //             $.each(input, function (i, item) {
            //                 console.log(item.login);

            //                 $("#collabs").append(`<div>${item.login}</div>`);
            //                 //$("#collabs").append(item.login)  //toying with 
            //                 ;
        });
    });
});


// Mike adding for collab card

//Ernesto working on Wall content for Homie repos

//step 1  get homies from local storage
var collabs = JSON.parse(localStorage.getItem('collabs'))

let totalcount = 0
collabs.forEach(element => {

    //console.log(element.login)
    ////////////////////////////////////////
    gitHub_GetUserRepos_Async(element.login).then((repos) => {


        for (var i = 0; i < repos.length; i++) {
            // console.log("homie: " + repos[i].owner.login);
            // console.log("repo name: " + repos[i].name);
            // console.log("repo description: " + repos[i].description);
            // console.log("repo created: " + repos[i].created_at);
            // console.log("repo url: " + repos[i].svn_url);
            // console.log("repo watchers: " + repos[i].watchers_count);
            try {
                //console.log(`readme url: https://raw.githubusercontent.com/${repos[i].owner.login}/${repos[i].name}/${repos[i].default_branch}/README.md`);
            }
            catch (err) {
                //console.log("readme does not exit")
            }

            let htmlrepoinfo = `<h5 class="repo-title">Repo: ${repos[i].name}</h5>
               <h6 class="repo-subtitle mb-2 text-muted">Description: ${repos[i].description}</h6>
               <h5 class="repo-title">Owner: ${repos[i].owner.login}</h5>
               <h5 class="repo-title">Date: ${repos[i].created_at}</h5>
               <h5 class="repo-title">Link: ${repos[i].svn_url}</h5>
               <h5 class="repo-title">Watch Count: ${repos[i].watchers_count}</h5>`
            //console.log(htmlrepoinfo)
            totalcount++
            //console.log(totalcount)

            gitHub_GetReadme_MD_Async2(`${repos[i].owner.login}`, `${repos[i].name}`, `${repos[i].default_branch}`).then((readme) => {

                //console.log(readme.toString())
                //  console.log(`${repos[i].name}`)

                repoText = readme.toString().split()
                //console.log(readme)


                var html = `<tr>
                    <th scope="row"></th>
                          <td>
        
                              <div id="HomiesRepo" class="card">
                                <div class="card-body">
                                ${htmlrepoinfo}
                                  
                                </div>
                              </div>
        
                              </td>
                              <td>
                          
        
                              <div id="onlineHomies"  class="card ">
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

        } //end for loop         
    })
    ////////////////////////////////////////
});



