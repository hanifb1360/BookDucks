let user = document.querySelector("#user");
let password = document.querySelector("#password");

let getBooks = async () => {
  let response = await axios.get("http://localhost:1337/api/books?populate=*", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

  response.data.data.forEach((book) => {
    console.log(book);
    document.querySelector("#books-container").innerHTML += `
        <div id="bookBox">
        <p id="b-title"><strong>Title: </strong>${book.attributes.title}</p>
        <p id="b-author"><strong>Author: </strong>${book.attributes.author}</p>
        <p id="b-publicationDate"><strong>Publication Date: </strong>${book.attributes.publicationDate}</p>
        <p id="b-numberOfPages"><strong>Number Of Pages: </strong>${book.attributes.numberOfPages}</p>
        <p id="b-rating"><strong>Rating: </strong>${book.attributes.rating}</p>
    
        <img class="img" src="http://localhost:1337${book.attributes.coverPhoto.data.attributes.url}" alt="cover photo">

        <p><strong>Owners Information:</strong></p>
        <p>${book.attributes.user.data.attributes.username}</p>
        
        
        <div/>
        `;
     
        
  });
};
let getAudiobooks = async () => {
  
  let response = await axios.get("http://localhost:1337/api/audio-books?populate=*", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
  console.log(response.data);
  response.data.data.forEach((audiobook) => {
    console.log("sss", audiobook);
    document.querySelector("#audiobooks-container").innerHTML += `
        <div id="audiobookBox">
        
        <p id="a-b-title"><strong>Title:</strong> ${audiobook.attributes.title}</p>
        <p Author: id="a-b-author"><strong>Author:</strong> ${audiobook.attributes.author}</p>
        <p Publication Date id="a-b-publicationDate"><strong>Publication Date:</strong>${audiobook.attributes.publicationDate}</p>
        <p id="a-b-length"><strong>Length:</strong>${audiobook.attributes.length}</p>
        <p id="a-b-rating"><strong>Rating:</strong>${audiobook.attributes.rating}</p>

        <img class="img" src="http://localhost:1337${audiobook.attributes.coverPhoto.data.attributes.url}" alt="cover photo">

        <p><strong>Owner's Information:</strong></p>
        <p>${audiobook.attributes.user.data.attributes.username}</p>
        
        <div/>
        `;
  });
};



let checkIfLoggedIn = () => {
  if (sessionStorage.getItem("token")) {

    document.getElementById("loggedInMessage").innerHTML =
      sessionStorage.getItem("username");
  }
};
checkIfLoggedIn();

