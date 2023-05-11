/////////////////////////////////////////////////////////////////
async function fetchUserToken() {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  }
  fetch(`https://florin-api.onrender.com/users/profile`, 
  )
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
  const options = {
    headers: {
        'Authorization': localStorage.getItem("token")
    }
}
  const response= await fetch(`https://florin-api.onrender.com/users/profile/${user_id}`, options);

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
  const options = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  }

  const responseBin = await fetch(
    `https://florin-api.onrender.com/users/profile/${user_id}/bin`,
    options
  )

  // const response = await fetch(
  //   `https://florin-api.onrender.com/users/profile/${user_id}/bin`,
  //   options
  // )

  if (responseBin.status == 200) {
    const data = await responseBin.json()
    const container = document.getElementById('bininfo')
    console.log(data.bin_coll)
    container.innerHTML = data.bin_coll
  } else {
    // window.location.assign("./index.html");
  }
}

loadbinCollData()

///////////////////////////////////////////////////////////////////
//complants
async function loadComplaints() {
  const options = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  }
  let user_id = 1
  const response = await fetch(
    `http://localhost:3000/users/profile/${user_id}/complaints`,
    options
  )

  if (response.status === 200) {
    const data = await response.json()
    renderData(data)
  }
  // } else {
  //   window.location.assign('./index.html')
  // }
}

function renderData(data) {
  data.forEach((post) => {
    const { post_date, title, content } = post

    const container = document.getElementById('userComplaints')
    const postTitle = document.createElement('p')
    const date = document.createElement('p')
    const postContent = document.createElement('p')

    date.textContent = `Date: ${post_date}`
    postTitle.textContent = `Title: ${title}`
    postContent.textContent = `Title: ${content}`

    container.appendChild(date)
    container.appendChild(postTitle)
    container.appendChild(postContent)
  })
}

loadComplaints()


