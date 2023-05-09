const form = document.getElementById('complaints-form')
// const renderEntry = document.querySelector('.post div')

form.addEventListener('submit', submitForm)

async function submitForm(event) {
  event.preventDefault()

  const add = {
    title: event.target.title.value,
    post_date: event.target.date.value,
    content: event.target.content.value,
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(add),
  }

  console.log(add)
  const result = await fetch('http://localhost:3000/complaints', options)
  console.log(result)
  if (result.status === 201) {
    event.target.title.value = ''
    event.target.date.value = ''
    event.target.content.value = ''
    window.location.assign('../../post.html')
  }
}
