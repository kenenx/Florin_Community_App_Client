function createPostElement (data) {

    const post = document.createElement("div");
    post.className = "post";

    const header = document.createElement("h2");
    header.textContent = data["title"];
    post.appendChild(header);
    
    const type = document.createElement("h3");
    type.textContent = data["recy_type"];
    post.appendChild(type)

    const date = document.createElement("h3");
    date.textContent = data["post_date"];
    post.appendChild(date)
    
    const content = document.createElement("p");
    content.textContent = data["info"];
    post.appendChild(content);

    const img = document.createElement("img");
    img.textContent = data["img"];
    post.appendChild(img);

    return post;
}

document.getElementById("recycling-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: form.get("title"),
            recy_type: form.get("recy_type"),
            post_date: form.get("post_date"),
            info: form.get("info"),
            img: form.get('img') 
        })
    }

    const result = await fetch("https://florin-api.onrender.com/recycling", options);

    if (result.status == 201) {
        window.location.reload();
    }
})

async function loadRecPosts () {

    const options = {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    }
    const response = await fetch("http://localhost:3000/recycling", options);

    if (response.status == 200) {
        const posts = await response.json();
    
        const container = document.getElementById("posts");

        posts.forEach(p => {
            const elem = createPostElement(p);
            container.appendChild(elem);
        })
    } else {
        window.location.assign("./index.html");
    }

}

loadRecPosts();
