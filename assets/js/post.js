const addPosts = document.getElementById('add-posts')

async function viewComplaint() {
  const response = await fetch('http://localhost:3000/complaints')
  const data = await response.json()
  console.log(data)
  renderData(data)
}

function renderData(data) {
  data.forEach((post) => {
    const { post_date, title, content } = post

    const postInfo = document.createElement('div')
    const postDate = document.createElement('p')
    const postTitle = document.createElement('p')
    const postContent = document.createElement('p')
    const postResolved = document.createElement('p')

    postDate.textContent = `${post_date}`
    postTitle.textContent = `${title}`
    postContent.textContent = content

    postInfo.appendChild(postDate)
    postInfo.appendChild(postTitle)
    postInfo.appendChild(postContent)
    postInfo.appendChild(postResolved)

    addPosts.appendChild(postInfo)
  })
}
viewComplaint()
