async function fetchUserToken() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  }
  fetch(`https://florin-api.onrender.com/users/profile`, options)
  .then(resp => resp.json())
  .then(data => {
      userToken = data
  })
  .then(() => {
      console.log(userToken.user_id);
  })
  .catch(err => console.log(err))
}

console.log(fetchUserToken())

/////////////////////////////////////////////////////////////////
//user displayed info
async function userprofileinfo(){
  user_id = 1
  // const options = {
  //   headers: {
  //       'Authorization': localStorage.getItem("token")
  //   }
  // }
  const response= await fetch(`http://localhost:3000/users/profile/${user_id}`,);

  if (response.status == 200) {
    const data = await response.json();
    const container = document.getElementById("userInfo");
    console.log(data)
    const name = document.createElement("h2");
    name.innerHTML = data.username;
    container.appendChild(name)
    const email = document.createElement("h3")
    email.textContent = data.user_email
    container.appendChild(email)
    console.log(container)
  }
  
}

userprofileinfo()

////////////////////////////////////////////////////////////////
async function loadbinCollData() {

  // const options = {
  //     headers: {
  //         'Authorization': localStorage.getItem("token")
  //     }
  // }

 // const responseBin = await fetch(`http://localhost:3000/users/profile/${user_id}/bin`, options);

  const response = await fetch(`https://florin-api.onrender.com/users/profile/${user_id}/bin`);


  if (responseBin.status == 200) {
      const data = await responseBin.json();
      const container = document.getElementById("bininfo");
      console.log(data.bin_coll)
      container.innerHTML = data.bin_coll;
  
  } else {
     // window.location.assign("./index.html");
  }
}

loadbinCollData();

///////////////////////////////////////////////////////////////////
//for testin
///////////////////////////////
