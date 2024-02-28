
//Insert name at top of screen from mock database
window.onload = function() {
    var user = JSON.parse(localStorage.getItem("new_user"));
    document.getElementById("full_name").innerHTML = "Welcome back, " + user.name;
}

