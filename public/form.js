var mock_database = []

var user = JSON.parse(localStorage.getItem("new_user"));

window.onload = async function() {

    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jsondata = await response.json();
    document.getElementById("full_name").innerHTML = "Welcome back, " + user.name;

    document.getElementById("joke_setup").innerHTML = jsondata.setup;
    document.getElementById("joke_punchline").innerHTML = jsondata.punchline;

}

// gather the responses from the form and add them to the database so that the manager can see them in the real application
function submit_form() {
    var goals_ = document.querySelector("#goals");
    var radio_buttons = document.getElementsByName("goal_rate")
    var checked_button;
    var next_goals = document.querySelector("#next_goals");
    for (let radio of radio_buttons) {
        if (radio.checked) {
            checked_button = radio.value;
        }
    }
    mock_database.push({name: user.name, goals: goals_.value, goal_rate: checked_button, next_goals: next_goals.value, form_complete: false})

    document.getElementById("full_name").innerHTML = "Thank you for submitting!";
}