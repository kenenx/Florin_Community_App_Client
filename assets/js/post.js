const addPosts = document.getElementById('add-posts')

async function viewComplaint() {
  try {
    const response = await fetch('https://florin-api.onrender.com/complaints')
    const data = await response.json()
    console.log(data)
    renderData(data)
  } catch (error) {
    console.log(error)
  }

}

function renderData(data) {
  data.forEach((post) => {
    const { post_date, title, content } = post

    const postInfo = document.createElement('div')
    const postDate = document.createElement('p')
    const postTitle = document.createElement('p')
    const postContent = document.createElement('p')

    const writeDate = document.createElement('p')
    const writeTitle = document.createElement('p')
    const writeContent = document.createElement('p')

    writeDate.textContent = 'Date:'
    writeTitle.textContent = 'Title:'
    writeContent.textContent = 'Details:'

    const buttonContainer = document.createElement('div')
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    postDate.textContent = `${post_date}`
    postTitle.textContent = `${title}`
    postContent.textContent = `${content}`

    editButton.textContent = 'Edit'
    deleteButton.textContent = 'Delete'

    deleteButton.setAttribute('data-bs-toggle', 'modal')
    deleteButton.setAttribute('data-bs-target', '#exampleModal')
    deleteButton.setAttribute('type', 'button')

    postInfo.appendChild(writeDate)
    postInfo.appendChild(postDate)
    postInfo.appendChild(writeTitle)
    postInfo.appendChild(postTitle)
    postInfo.appendChild(writeContent)
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

      const writeDate2 = document.createElement('p')
      const writeTitle2 = document.createElement('p')
      const writeContent2 = document.createElement('p')

      writeDate2.textContent = 'Date:'
      writeTitle2.textContent = 'Title:'
      writeContent2.textContent = 'Details:'

      inputDate.value = postDate.textContent
      inputTitle.value = postTitle.textContent
      inputContent.value = postContent.textContent

      inputContainer.appendChild(writeDate2)
      inputContainer.appendChild(inputDate)
      inputContainer.appendChild(writeTitle2)
      inputContainer.appendChild(inputTitle)
      inputContainer.appendChild(writeContent2)
      inputContainer.appendChild(inputContent)

      inputDate.type = 'text'
      inputTitle.type = 'text'
      inputContent.type = 'text'

      postInfo.appendChild(inputContainer)

      editButton.dataset.id = post.comp_id

      updateButton.setAttribute('data-bs-toggle', 'modal')
      updateButton.setAttribute('data-bs-target', '#staticBackdrop')
      updateButton.setAttribute('type', 'button')

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

  const yesButton = document.querySelector('.yes-button')
  const noButton = document.querySelector('.no-button')
  yesButton.addEventListener('click', async () => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const result = await fetch(
      `https://florin-api.onrender.com/complaints/${id}`,
      options
    )
    if (result.status === 204) {
      window.location.reload()
    }
  })
  noButton.addEventListener('click', () => {
    return
  })
}

async function updateEntry(id, data) {
  const yes2Button = document.querySelector('.yes2-button')
  const no2Button = document.querySelector('.no2-button')
  yes2Button.addEventListener('click', async () => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    const result = await fetch(
      `https://florin-api.onrender.com/complaints/${id}`,
      options
    )
    if (result.status === 200) {
      window.location.reload()
    }
  })
  no2Button.addEventListener('click', () => {
    return
  })

}

viewComplaint()
