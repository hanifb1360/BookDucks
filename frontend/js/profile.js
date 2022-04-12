const username= sessionStorage.getItem("username");
const email= sessionStorage.getItem("useremail");

document.getElementById("user-container").innerHTML =
  `<p> Name: ${username}</p>
   <p>Email: ${email}</p>
   
   `
  ;

  console.log(user)
  let checkIfLoggedIn = () => {
    if (sessionStorage.getItem("token")) {
  
      document.getElementById("loggedInMessage").innerHTML =
        sessionStorage.getItem("username");
    }
  };
  checkIfLoggedIn();




  

  let getOwnedBooks = async () => {
  
    let response = await axios.get("http://localhost:1337/api/users", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    console.log(response.data);
    response.data.data.forEach((user) => {
      console.log("sss", user);
      document.querySelector("#owned-books-container").innerHTML += `
          <div id="bookBox">
          
          <p id="a-b-title"><strong>Title:</strong> ${user}</p>
         
          
          <div/>
          `;
    });
  };