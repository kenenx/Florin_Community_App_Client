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
      localStorage.setItem('userToken', userToken.user_id)
      console.log(userToken.user_id);
  })
  .catch(err => console.log(err))
}
fetchUserToken()

const form = document.getElementById('complaints-form')

form.addEventListener('submit', submitForm)

async function submitForm(event) {
  event.preventDefault()

  // Disable the submit button
  const submitButton = form.querySelector('button[type="submit"]')
  submitButton.disabled = true

  const add = {
    title: event.target.title.value,
    post_date: event.target.date.value,
    content: event.target.content.value,
    user_id: parseInt(localStorage.getItem('userToken')),
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(add),
  }

  try {
    const result = await fetch('https://florin-api.onrender.com/complaints', options)
    console.log(result)
    if (result.status === 201) {
      event.target.title.value = ''
      event.target.date.value = ''
      event.target.content.value = ''
      window.location.assign('../../post.html')
    }
  } catch (error) {
    console.error(error)
  } finally {
    // Re-enable the submit button
    submitButton.disabled = false

  }
}

// const form = document.getElementById('complaints-form')
// // const renderEntry = document.querySelector('.post div')

// form.addEventListener('submit', submitForm)

// async function submitForm(event) {
//   event.preventDefault()

//   const add = {
//     title: event.target.title.value,
//     post_date: event.target.date.value,
//     content: event.target.content.value,
//     user_id: parseInt(Math.floor(Math.random() * 10)),
//   }

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(add),
//   }

//   const result = await fetch('http://localhost:3000/complaints', options)

//   if (result.status === 201) {
//     event.target.title.value = ''
//     event.target.date.value = ''
//     event.target.content.value = ''
//     window.location.assign('../../post.html')
//   }
// }
