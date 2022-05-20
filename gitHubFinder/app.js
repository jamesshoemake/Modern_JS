// init github
const github = new GitHub;
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input even listener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  if(userText !== ''){
    // make http call
    github.getUser(userText)
    .then(data => {
      // Show profile
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
    })
    .catch(error => ui.showAlert(error.message, 'alert alert-danger'));
  } else {
    // clear profile
    ui.clearProfile();
  }
})