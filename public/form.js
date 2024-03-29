const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
socket.onopen = (event) => {
    console.log("the web socket is open");
  };
  socket.onclose = (event) => {
    console.log("the web socket is closed");
  };

window.onload = async function() {

    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const user = await fetch("http://localhost:3000/logininfo");
    const user_data = await user.json();
    const jsondata = await response.json();
    document.getElementById("full_name").innerHTML = "Welcome back, " + user_data.user.full_name;
    document.getElementById("joke_setup").innerHTML = jsondata.setup;
    document.getElementById("joke_punchline").innerHTML = jsondata.punchline;

}

// gather the responses from the form and add them to the database so that the manager can see them in the real application

function sendMessage() {
    socket.send(`A new form was submitted by ${user_data.user.full_name}`);
      socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        console.log(msg);
    }
}