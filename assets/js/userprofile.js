
function binCollData (data) {

  const bin = document.createElement("div");
  bin.className = "bininfo";

  const date = document.createElement("h2");
  date.textContent = data["bin_id"];
  bin.appendChild(date);

  return bin;
}

async function loadbinCollData() {

  const options = {
      headers: {
          'Authorization': localStorage.getItem("token")
      }
  }
  const response = await fetch("http://localhost:3000/users/:id/bin", options);

  if (response.status == 200) {
      const data = await response.json();
      const container = document.getElementById("bininfo");
      console.log(data.bin_id)
      container.innerHTML = data.bin_id;
  
  } else {
      //window.location.assign("./index.html");
  }

}

loadbinCollData();
