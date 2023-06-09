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

    postInfo.classList.add('post-container')

    // writeDate.textContent = 'Date:'
    // writeTitle.textContent = 'Title:'
    // writeContent.textContent = 'Details:'

    const buttonContainer = document.createElement('div')
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    postDate.textContent = ` Date: ${post_date}`
    postTitle.textContent = ` Title: ${title}`
    postContent.textContent = `Details: ${content}`

    editButton.textContent = 'Edit'

    deleteButton.textContent = 'Delete'

    editButton.style.textAlign = 'center'
    deleteButton.style.textAlign = 'center'
    editButton.classList.add('edit-button')
    deleteButton.classList.add('delete-button')
    buttonContainer.classList.add('button-container')

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

      updateButton.classList.add('update-button')

      const inputContainer = document.createElement('div')

      const inputDate = document.createElement('input')
      const inputTitle = document.createElement('input')
      const inputContent = document.createElement('textarea')

      inputDate.classList.add('input-date')
      inputTitle.classList.add('input-title')
      inputContent.classList.add('input-content')

      const writeDate2 = document.createElement('p')
      const writeTitle2 = document.createElement('p')
      const writeContent2 = document.createElement('p')

      writeDate2.textContent = 'Date:'
      writeTitle2.textContent = 'Title:'
      writeContent2.textContent = 'Details:'

      inputDate.value = ''
      inputTitle.value = ''
      inputContent.value = ''

      inputContainer.appendChild(writeDate2)
      inputContainer.appendChild(inputDate)
      inputContainer.appendChild(writeTitle2)
      inputContainer.appendChild(inputTitle)
      inputContainer.appendChild(writeContent2)
      inputContainer.appendChild(inputContent)

      inputContainer.classList.add('input-container')

      inputDate.type = 'date'
      inputTitle.type = 'text'
      inputContent.type = 'text'

      inputDate.style.width = '30vh'
      inputDate.style.height = '6vh'
      inputDate.style.paddingLeft = '10px'

      postInfo.appendChild(inputContainer)

      updateButton.setAttribute('data-bs-toggle', 'modal')
      updateButton.setAttribute('data-bs-target', '#staticBackdrop')
      updateButton.setAttribute('type', 'button')

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

function deletePost(id) {
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

function updateEntry(id, data) {
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
    window.location.reload()
  })
}

viewComplaint()

//////////////////////////////////////////////////////////
//for testing

module.exports = { viewComplaint, deletePost, updateEntry }
