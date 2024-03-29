const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
socket.onopen = (event) => {
    console.log("the web socket is open");
  };
  socket.onclose = (event) => {
    console.log("the web socket is closed");
  };
  socket.onmessage = async (event) => {
    const msg = (await event.data.text());
    console.log(msg);
}

//Insert name at top of screen from mock database
// Go through mock database and inject numbers based on form data
// Add names from database to the list of forms to review
window.onload = async function() {
    const response = await fetch("http://localhost:3000/logininfo");
    const jsondata = await response.json();
    console.log(jsondata);
    document.getElementById("full_name").innerHTML = "Welcome back, " + jsondata.user.full_name;
    var length = jsondata.results.length;
    document.getElementById("data_number").innerHTML = length;
    var to_review = 0;
    var complete = 0;
    // Will replace eventually with websocket to live update the numbers of to review and complete when forms are reviewed.
    for (var i = 0; i < length; i++) {
        console.log(jsondata.results[i])
        if (!jsondata.results[i].response.form_complete) {
            to_review++;
        } else {
            complete++;
        }
        var employee_form = document.getElementById("employee-form").cloneNode(true);
        employee_form.childNodes[3].innerHTML = jsondata.results[i].full_name;
        employee_form.childNodes[1].setAttribute("onclick", "complete_form('" + jsondata.results[i].full_name + "')") ;
        employee_form.id = jsondata.results.name;
        employee_form.childNodes[5].childNodes[1].innerHTML = "Answer 1: " +  '"' + jsondata.results[i].response.goals + '"';
        employee_form.childNodes[5].childNodes[3].innerHTML = "Answer 2: " +  '"' + jsondata.results[i].response.goal_rate + '"';
        employee_form.childNodes[5].childNodes[5].innerHTML = "Answer 3: " +  '"' + jsondata.results[i].response.next_goals + '"';
        document.getElementById("employee-form").after(employee_form);
    }
    document.getElementById("review_number").innerHTML = to_review;
    document.getElementById("complete_number").innerHTML = complete;
    document.getElementById("employee-form").style.display = "none";

}

function displayMessage(msg) {
    document.getElementById("web-socket-message").innerHTML = msg;
    setInterval(clearMessage(), 10000);
}

function clearMessage() {
    document.getElementById("web-socket-message").innerHTML = "";
}