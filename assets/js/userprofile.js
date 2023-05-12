/////////////////////////////////////////////////////////////////
async function fetchUserToken() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  fetch(`https://florin-api.onrender.com/users/profile`)
    .then((resp) => resp.json())
    .then((data) => {
      userToken = data
    })
    .then(() => {
      localStorage.setItem('userToken', userToken.user_id)
      console.log(userToken.user_id)
    })
    .catch((err) => console.log(err))
}
fetchUserToken()

console.log(fetchUserToken())

/////////////////////////////////////////////////////////////////
//user displayed info
async function userprofileinfo() {
  user_id = parseInt(localStorage.getItem('userToken'))
  const options = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  }
  const response = await fetch(
    `https://florin-api.onrender.com/users/profile/${user_id}`,
    options
  )

  if (response.status == 200) {
    const data = await response.json()
    const container = document.getElementById('userInfo')
    console.log(data)
    const name = document.createElement('h2')
    name.innerHTML = data.username
    container.appendChild(name)
    const email = document.createElement('h3')
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
  let user_id = parseInt(localStorage.getItem('userToken'))
  const response = await fetch(
    `https://florin-api.herokuapp.com/complaints/${user_id}`,
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
    postContent.textContent = `Details: ${content}`

    container.appendChild(date)
    container.appendChild(postTitle)
    container.appendChild(postContent)
  })
}

loadComplaints()
///events////
async function loadEvents() {
  try {
    let user_id = parseInt(localStorage.getItem('userToken'))
    const response = await fetch(
      `https://florin-api.onrender.com/users/events/${user_id}`
    )
    const data = await response.json()
    console.log(data)
    renderEvents(data)
  } catch (error) {
    console.log(error)
  }
}

function renderEvents(data) {
  data.forEach((post) => {
    const { event_title, event_type, event_date, event_content } = post

    const container = document.getElementById('userEvents')
    const postTitle = document.createElement('p')
    const postType = document.createElement('p')
    const postDate = document.createElement('p')
    const postContent = document.createElement('p')

    postDate.textContent = `Date: ${event_date}`
    postTitle.textContent = `Title: ${event_title}`
    postType.textContent = `Type: ${event_type}`
    postContent.textContent = `${event_content}`

    container.appendChild(postDate)
    container.appendChild(postTitle)
    container.appendChild(postType)
    container.appendChild(postContent)
  })
}
loadEvents()
