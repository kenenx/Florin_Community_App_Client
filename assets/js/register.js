document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const randomBin = Math.round(Math.random()* 4)+1

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: form.get("username"),
            user_email: form.get("user_email"),
            password: form.get("password"),
            bin_id: randomBin //bincollection dayyyyy
        })
    }

    const response = await fetch("https://florin-api.onrender.com/users/register", options);
    const data = await response.json();

    if (response.status == 201) {
        window.location.assign("login.html");
    } else {
        alert(data.error);
    }
})
