const username = sessionStorage.getItem("username");
const email = sessionStorage.getItem("useremail");

document.getElementById("user-container").innerHTML = `<p> Name: ${username}</p>
   <p>Email: ${email}</p>
   
   `;
console.log(username);

let getOwnedBooks = async () => {
  let response = await axios.get("http://localhost:1337/api/books?populate=*", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
  console.log(response.data.data);

  let myBooks = response.data.data.filter((book) => {
    console.log(book.attributes.user.data.id);
    console.log(sessionStorage.getItem("userid"));
    return book.attributes.user.data.id == sessionStorage.getItem("userid");
  });
  console.log(myBooks);
  myBooks.forEach((book) => {
    document.querySelector("#owned-books-container").innerHTML += `
          <div class="owned-book">
          <div class="title-auth">
          <p class="owned-title"><strong>${book.attributes.title}</strong></p>
          <p class="owned-title">${book.attributes.author}</p>
          <div/>
          <button class="lendbtn">LEND</button>
          
          <div/>
          `;
  });
};

let getOwnedAudiobooks = async () => {
  let response = await axios.get(
    "http://localhost:1337/api/audio-books?populate=*",
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }
  );
  console.log(response.data.data);

  let myAudiobooks = response.data.data.filter((audiobook) => {
    console.log(audiobook.attributes.user.data.id);
    console.log(sessionStorage.getItem("userid"));
    return (
      audiobook.attributes.user.data.id == sessionStorage.getItem("userid")
    );
  });
  console.log(myAudiobooks);
  myAudiobooks.forEach((audiobook) => {
    document.querySelector("#owned-audiobooks-container").innerHTML += `
          <div class="owned-book">

          <div class="title-auth">
          <p class="owned-title"><strong>${audiobook.attributes.title}</strong></p>
          <p class="owned-title">${audiobook.attributes.author}</p>
          <div/>
          
          <button class="lendbtn">LEND</button>
          <div/>
          `;
  });
};
