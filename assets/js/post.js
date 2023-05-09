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

    const buttonContainer = document.createElement('div')
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    postDate.textContent = `Date: ${new Date(post_date).toLocaleDateString()}`
    postTitle.textContent = `Title: ${title}`
    postContent.textContent = `Complaint Details: ${content}`

    editButton.textContent = 'Edit'
    deleteButton.textContent = 'Delete'

    postInfo.appendChild(postDate)
    postInfo.appendChild(postTitle)
    postInfo.appendChild(postContent)

    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(deleteButton)

    addPosts.appendChild(postInfo)
    addPosts.appendChild(buttonContainer)

    deleteButton.dataset.id = post.comp_id
    deleteButton.addEventListener('click', () => deletePost(post.comp_id))

    editButton.addEventListener('click', () => {
      const updateButton = document.createElement('button')
      updateButton.textContent = 'Update'
      buttonContainer.appendChild(updateButton)

      const inputContainer = document.createElement('div')

      const inputDate = document.createElement('input')
      const inputTitle = document.createElement('input')
      const inputContent = document.createElement('input')
      const writeDate = document.createElement('p')
      const writeTitle = document.createElement('p')
      const writeContent = document.createElement('p')

      writeDate.textContent = 'DATE'

      inputDate.value = postDate.textContent
      inputTitle.value = postTitle.textContent
      inputContent.value = postContent.textContent

      inputContainer.appendChild(inputDate)
      inputContainer.appendChild(inputTitle)
      inputContainer.appendChild(inputContent)

      inputDate.type = 'text'
      inputTitle.type = 'text'
      inputContent.type = 'text'

      postInfo.appendChild(inputContainer)

      editButton.dataset.id = post.comp_id

      updateButton.addEventListener('click', () => {
        const data = {
          title: inputTitle.value,
          post_date: inputDate.value,
          content: inputContent.value,
        }
        updateEntry(post.comp_id, data)
      })
    })
  })
}

async function deletePost(id) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const result = await fetch(`http://localhost:3000/complaints/${id}`, options)
  if (result.status === 204) {
    window.location.reload()
  }
}

async function updateEntry(id, data) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  console.log(data)
  const result = await fetch(`http://localhost:3000/complaints/${id}`, options)
  if (result.status === 200) {
    window.location.reload()
  }
}

viewComplaint()
