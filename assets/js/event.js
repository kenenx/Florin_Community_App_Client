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


async function fetchEvents() {

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  await fetch(`https://florin-api.onrender.com/events`, options)
    .then((resp) => resp.json())
    .then((data) => {
      data.sort((a, b) => (a.date > b.date ? 1 : -1))


      const title1Element = document.getElementById('event1')
      const date1Element = document.getElementById('date1')
      const type1Element = document.getElementById('type1')
      const content1Element = document.getElementById('content1')
      const attendance1Element = document.getElementById('attendance1')
      title1Element.innerHTML = data[0]['title']
      date1Element.innerHTML = data[0]['type']
      type1Element.innerHTML = data[0]['date']
      content1Element.innerHTML = data[0]['content']
      attendance1Element.innerHTML = data[0]['attendance']

      const title2Element = document.getElementById('event2')
      const date2Element = document.getElementById('date2')
      const type2Element = document.getElementById('type2')
      const content2Element = document.getElementById('content2')
      const attendance2Element = document.getElementById('attendance2')
      title2Element.innerHTML = data[1]['title']
      date2Element.innerHTML = data[1]['type']
      type2Element.innerHTML = data[1]['date']
      content2Element.innerHTML = data[1]['content']
      attendance2Element.innerHTML = data[1]['attendance']
    })
    .catch((err) => console.log(err))
}
fetchEvents()

form.addEventListener('submit', function (event) {
  event.preventDefault()
  // Check for username
  if (username.value === '') {
    alert('username must be present')
  }
  if (password.value === '') {
    alert('password must be present')
  } else {
    login()
  }
})
