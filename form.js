window.onload = function() {
    var user = JSON.parse(localStorage.getItem("new_user"));
    document.getElementById("full_name").innerHTML = "Welcome back, " + user.name;
}

function submit_form() {
    var goals = document.querySelector("#goals");
    var radio_buttons = document.getElementsByName("goal_rate")
    var next_goals = document.querySelector("#next_goals");
    console.log(goals.value)
    for (let radio of radio_buttons) {
        if (radio.checked) {
            console.log(radio.value)
        }
    }
    console.log(next_goals.value)
}