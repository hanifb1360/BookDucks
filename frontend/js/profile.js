const username= sessionStorage.getItem("username");
const email= sessionStorage.getItem("useremail");

document.getElementById("user-container").innerHTML =
  `<p> Name: ${username}</p><p>Email: ${email}</p>`;


  let checkIfLoggedIn = () => {
    if (sessionStorage.getItem("token")) {
  
      document.getElementById("loggedInMessage").innerHTML =
        sessionStorage.getItem("username");
    }
  };
  checkIfLoggedIn();
  