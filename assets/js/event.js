// async function fetchUserToken() {
//     try {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }
//         const response = await fetch(`https://florin-api.onrender.com/users/profile`, options)
//         const userToken = await response.json();
//         return userToken.user_id
//     } catch (error) {
//         console.error(error);
//     }
// }
// async function renderUserToken() {
//     const userToken = await fetchUserToken();
//     localStorage.setItem('userToken', userToken)
//     return userToken;
// }
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

async function fetchEvents() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    await fetch(`https://florin-api.onrender.com/events`, options)
    .then(resp => resp.json())
    .then(data => {
        data.sort((a,b) => (a.date > b.date ? 1 : -1))

        const title1Element = document.getElementById('event1')
        const date1Element = document.getElementById('date1')
        const type1Element = document.getElementById('type1')
        const content1Element = document.getElementById('content1')
        // const attendance1Element = document.getElementById('attendance1')
        title1Element.innerHTML = data[0]["title"]
        date1Element.innerHTML = data[0]["type"]
        type1Element.innerHTML = data[0]["date"]
        content1Element.innerHTML = data[0]["content"]
        // attendance1Element.innerHTML = data[0]["attendance"]

        const title2Element = document.getElementById('event2')
        const date2Element = document.getElementById('date2')
        const type2Element = document.getElementById('type2')
        const content2Element = document.getElementById('content2')
        // const attendance2Element = document.getElementById('attendance2')
        title2Element.innerHTML = data[1]["title"]
        date2Element.innerHTML = data[1]["type"]
        type2Element.innerHTML = data[1]["date"]
        content2Element.innerHTML = data[1]["content"]
        // attendance2Element.innerHTML = data[1]["attendance"]

        const title3Element = document.getElementById('event3')
        const date3Element = document.getElementById('date3')
        const type3Element = document.getElementById('type3')
        const content3Element = document.getElementById('content3')
        // const attendance3Element = document.getElementById('attendance3')
        title3Element.innerHTML = data[2]["title"]
        date3Element.innerHTML = data[2]["type"]
        type3Element.innerHTML = data[2]["date"]
        content3Element.innerHTML = data[2]["content"]
        // attendance3Element.innerHTML = data[2]["attendance"]
    })
    .catch(err => console.log(err))
}
fetchEvents()


const addEvent1 = document.getElementById('event-btn1')
addEvent1.addEventListener('click', submitForm1)

    async function submitForm1() {
    document.getElementById('event-btn1').disabled = true
    // event.preventDefault()
    const add = {
      user_id: parseInt(localStorage.getItem('userToken')),
      event_id: 1,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(add),
    }

    console.log(add)
    const result = await fetch('https://florin-api.onrender.com/userevents', options)
    console.log(result)
    if (result.status === 201) {
    console.log('done')
    }
  }

const addEvent = document.getElementById('event-btn2')
addEvent.addEventListener('click', submitForm2)

    async function submitForm2() {
    // event.preventDefault()
    document.getElementById('event-btn2').disabled = true
    const add = {
      user_id: parseInt(localStorage.getItem('userToken')),
      event_id: 2,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(add),
    }

    console.log(add)
    const result = await fetch('https://florin-api.onrender.com/userevents', options)
    console.log(result)
    if (result.status === 201) {
    console.log('done')
    }
  }


module.exports = {fetchEvents}

