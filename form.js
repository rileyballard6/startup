var mock_database = []

var user = JSON.parse(localStorage.getItem("new_user"));

window.onload = function() {
    document.getElementById("full_name").innerHTML = "Welcome back, " + user.name;

}

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
    console.log(mock_database)
}