const username= sessionStorage.getItem("username");
const email= sessionStorage.getItem("useremail");

document.getElementById("user-container").innerHTML =
  `<p> Name: ${username}</p>
   <p>Email: ${email}</p>
   
   `
  ;
  console.log(username);



 

  let getOwnedBooks = async () => {
  
    let response = await axios.get("http://localhost:1337/api/users?populate=*", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    console.log(response);

    response.data.data.forEach((user) => {
      
      
      document.querySelector("#owned-books-container").innerHTML += `
          <div id="bookBox">
          
          <p id="a-b-title"><strong>:</strong> ${user.data.username}</p>
          
          
          
          <div/>
          `;
    });
  };