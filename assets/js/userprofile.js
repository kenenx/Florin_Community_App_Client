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
  } else {
    window.location.assign('./index.html')
  }
}

function renderData(data) {
  data.forEach((post) => {
    const { post_date, title, content } = post

    const container = document.getElementById('complaintsInfo')
    const postTitle = document.createElement('p')
    const date = document.createElement('p')
    const postContent = document.createElement('p')

    date.textContent = post_date
    postTitle.textContent = title
    postContent.textContent = content

    container.appendChild(date)
    container.appendChild(postTitle)
    container.appendChild(postContent)
  })
}

loadComplaints()
