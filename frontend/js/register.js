let user = document.querySelector("#user");
let password = document.querySelector("#password");
let registerUser = document.querySelector("#registerUser");
let registerEmail = document.querySelector("#registerEmail");
let registerPassword = document.querySelector("#registerPassword");




const login = async () => {
  const response = await axios.post("http://localhost:1337/api/auth/local", {
    identifier: user.value,
    password: password.value,
  });
  console.log("response--->", response);
  let token = response.data.jwt;
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("username", response.data.user.username);
  sessionStorage.setItem("useremail", response.data.user.email);
  sessionStorage.setItem("userid", response.data.user.id);
  console.log("response.data.user", response.data.user);
  checkIfLoggedIn();
};

let register = async () => {
  let response = await axios.post(
    "http://localhost:1337/api/auth/local/register",
    {
      username: registerUser.value,
      password: registerPassword.value,
      email: registerEmail.value,
    }
  );

  let token = response.data.jwt;
  sessionStorage.setItem("token", token);
};

document.querySelector("#login").addEventListener("click", login);

let checkIfLoggedIn = () => {
  if (sessionStorage.getItem("token")) {
    document.getElementById("loggedInMessage").innerHTML =
      sessionStorage.getItem("username");
  }
};
checkIfLoggedIn();
