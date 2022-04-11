let user = document.querySelector("#user");
let password = document.querySelector("#password");
let registerUser = document.querySelector("#registerUser");
let registerEmail = document.querySelector("#registerEmail");
let registerPassword = document.querySelector("#registerPassword");
let fruitName = document.querySelector("#fruitName");
let fruitPrice = document.querySelector("#fruitPrice");

let getBooks = async () => {
  let response = await axios.get("http://localhost:1337/api/books", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

  response.data.data.forEach((book) => {
    document.querySelector(
      "#books-container"
    ).innerHTML += `<p>${book.attributes.title}<button onClick="deleteBook(${book.id})">Delete</button><button onClick="editBook(${book.id})">Make free!</button></p>`;
  });
};

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
