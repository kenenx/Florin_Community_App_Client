function createPostElement(data) {
  const post = document.createElement('div')
  post.className = 'post'

  const date = document.createElement('p')
  date.textContent = `Date: ${data['post_date']}`
  post.appendChild(date)

  const header = document.createElement('p')
  header.textContent = `Title: ${data['recy_title']}`
  post.appendChild(header)

  const type = document.createElement('p')
  type.textContent = `Type: ${data['recy_type']}`
  post.appendChild(type)

  const content = document.createElement('p')
  content.textContent = `Details: ${data['info']}`
  post.appendChild(content)

  const img = document.createElement('img')
  img.src = data['img']
  post.appendChild(img)

  img.classList.add('image-recy')

  const button = document.createElement('button')
  button.textContent = 'Delete'
  post.appendChild(button)

  post.classList.add('post-container-recy')
  button.classList.add('delete-button2')

  button.setAttribute('data-bs-toggle', 'modal')
  button.setAttribute('data-bs-target', '#exampleModal')
  button.setAttribute('type', 'button')

  button.dataset.id = data['recy_id']
  button.addEventListener('click', () => deleteRecycling(data['recy_id']))

  return post
}

document
  .getElementById('recycling-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault()

    const form = new FormData(e.target)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: form.get('title'),
        recy_type: form.get('recy_type'),
        post_date: form.get('post_date'),
        info: form.get('info'),
        img: form.get('img'),
      }),
    }

    const result = await fetch(
      'https://florin-api.onrender.com/recycling',
      options
    )

    if (result.status === 201) {
      window.location.reload()
    }
  })

async function loadRecPosts() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  }
  const response = await fetch(
    'https://florin-api.onrender.com/recycling',
    options
  )
  if (response.status === 200) {
    const posts = await response.json()

    const container = document.getElementById('recy_posts')

    posts.forEach((p) => {
      const elem = createPostElement(p)
      container.appendChild(elem)
    })
    console.log(posts)
  } else {
    window.location.assign('./index.html')
  }
}

async function deleteRecycling(id) {
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
      `https://florin-api.onrender.com/recycling/${id}`,
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

loadRecPosts()

//////////////////////////////////////
//for testing
module.exports = { loadRecPosts, deleteRecycling }
