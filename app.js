// init Github
const github = new Github;
// init ui
const ui = new UI;
// Get input text
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", async (event) => {
  const userText = event.target.value;

  if (userText !== "") {
    // Make http call
    github.getUser(userText)
      .then(data=>{
        if(data.profile.message === "Not Found")
         {// show alert 
            ui.showAlert("User Not found", "alert alert-danger");
         }
         else {
            // Show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
         }
      });
  } else{
    // clear profile
    ui.clearProfile();
  }
});