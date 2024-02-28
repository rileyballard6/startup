
var mock_database = [
    {
        name: "employee1",
        goals: "this is my goal",
        goal_rate: "Excellent",
        next_goals: "These are my next goals",
        form_complete: false
    },
    {
        name: "employee2",
        goals: "this is my goal",
        goal_rate: "Excellent",
        next_goals: "These are my next goals",
        form_complete: false
    },
    {
        name: "employee3",
        goals: "this is my goal",
        goal_rate: "Excellent",
        next_goals: "These are my next goals",
        form_complete: true
    }
]


//Insert name at top of screen from mock database
// Go through mock database and inject numbers based on form data
window.onload = function() {
    var user = JSON.parse(localStorage.getItem("new_user"));
    document.getElementById("full_name").innerHTML = "Welcome back, " + user.name;
    var length = mock_database.length;
    document.getElementById("data_number").innerHTML = length;
    var to_review = 0;
    var complete = 0;
    for (var i = 0; i < length; i++) {
        if (!mock_database[i].form_complete) {
            to_review++;
        } else {
            complete++;
        }
    }
    document.getElementById("review_number").innerHTML = to_review;
    document.getElementById("complete_number").innerHTML = complete;


}

